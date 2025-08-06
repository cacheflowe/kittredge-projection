# Python standard lib imports
import os
import sys
import importlib

# Add base modules to allow for further imports, specifically `config`
utils_path = os.path.join(project.folder, 'python', 'util')
if utils_path not in sys.path:
	sys.path.append(utils_path)

# Custom imports
import config


class App:
	"""
	:: App Extension Class ::

	This class is intended to be the top-level extension for the application.
	It is designed to be attached to the main /project component of the project
	and serves as a central point for initializing the application state.

	- This file/extension is loaded when the project starts
	- This file is reloaded when the text is saved
	- This file is externalized to the `python/extensions` directory
	"""

	# Static constants
	APP_STATE = 'app_state'
	MODE_INTERSTITIAL = 'interstitial'
	MODE_PLAYER = 'player'
	MODE_TITLE = 'title'
	EVENT_PLAYLIST_NEXT = 'playlist_next'
	LAUNCH_WINDOW = 'launch_window'
	CLOSE_WINDOW = 'close_window'
	PERFORM_TOGGLE = 'perform_toggle'

	def __init__(self, ownerComp):
		self.ownerComp = ownerComp
		print("=============================================")
		print("[App] Initializing...")
		self.reloadImports()  # only necessary during development, to reload the config module
		self.addPythonUtilsPath()
		self.appInit()
		print("[App] Initialized!")
		print("=============================================")

	# Reloads imported Python modules to ensure any changes are applied
	# This is useful during development when you want to see changes without restarting the project.
	# Note: This is not needed in production code
	def reloadImports(self):
		importlib.reload(config)

	# Add the path to the Python utils directory to sys.path
	# This allows importing modules from that directory
	# and ensures that the utils are available for use in the project.
	def addPythonUtilsPath(self):
		print('[App] Adding Python utils path to sys.path')
		utils_path = os.path.join(project.folder, 'python', 'util')
		if utils_path not in sys.path:
			sys.path.append(utils_path)

	def appInit(self):
		# Initialize the application state here - this would be custom per application
		self.loadEnvVars()
		self.loadPythonModules()
		self.LaunchPlaylist()
		return

	def loadEnvVars(self):
		# Make sure AppStore has the latest defaults set
		op.AppStore.par.Applydefaults.pulse()
		# Load .env file and system environment vars
		# The order here would override any loaded vars with the last loaded value
		envFilePath = os.path.join(project.folder, 'data', '.env')  # path to the .env file
		# defaults to loading the .env file in the project root, but an optional path can be passed in
		config.LoadEnvFile(envFilePath)
		# set by a shell script before launching the .toe: `set sys_env_var=Something`
		config.LoadSystemEnvironmentVar('sys_env_var', 'Default Value')

	def loadPythonModules(self):
		# Add any extra python environments/modules
		# config.AddPyDirToPath(os.path.join(project.folder, 'python', 'other_modules')) # add more python modules to sys.path if desired
		# config.AddCondaEnvToPath("cacheflowe", "td-onnx")
		config.AddPyDirToPath(os.path.join(project.folder, 'python', '_local_modules'))
		config.PrintPythonPath()

	# ===============================================
	# Launch Helpers
	# ===============================================

	def LaunchPlaylist(self, delayFrames=0):
		self.playlistIndex = 0
		self.playlistDAT = op('null_playlist_active')
		print("[App] Launching Playlist...")
		print("[App] is_production:", op.AppStore.GetBoolean('is_production'))
		self.LaunchWebServer(100)
		run(f"op('{self.ownerComp.path}').PlaylistNext()", delayFrames=500)
		if op.AppStore.GetBoolean('is_production') == True:
			run(f"op('{self.ownerComp.path}').LaunchOutputWindow(True)", delayFrames=1000)
		self.AddStoreListeners()

	def LaunchWebServer(self, delayFrames=0):
		run('op.PythonWebServer.par.Startserver.pulse()', delayFrames=delayFrames)

	def TriggerLaunch(self, delayFrames=0):
		# trigger after delay, mostly to accomodate TD startup
		# run("parent().PulseTriggerLaunch()", delayFrames=delayFrames, fromOP=self.ownerComp)
		run(f"op('{self.ownerComp.path}').PulseTriggerLaunch()", delayFrames=delayFrames)

	def PulseTriggerLaunch(self):
		trigger_launch = op('trigger_launch')
		trigger_launch.par.triggerpulse.pulse()

	def LaunchOutputWindow(self, performMode=False):
		op('window1').par.winopen.pulse()
		ui.performMode = performMode

	def CloseOutputWindow(self):
		op('window1').par.winclose.pulse()


	# ===============================================
	# AppStore listeners
	# ===============================================

	def AddStoreListeners(self):
		# Add listeners to the AppStore for specific keys
		# op.AppStore.AddListener(self)
		# triggered by players
		op.AppStore.AddListener(self, App.EVENT_PLAYLIST_NEXT)
		op.AppStore.AddListener(self, App.LAUNCH_WINDOW)
		op.AppStore.AddListener(self, App.CLOSE_WINDOW)
		op.AppStore.AddListener(self, App.PERFORM_TOGGLE)

	def OnAppStoreValueChanged(self, key, value, type):
		# print(f"[App] *** {key} = {value} (type: {type})")
		return

	def On_playlist_next(self, key, value, type):
		if value == 1:
			self.PlaylistNext()

	def On_launch_window(self, key, value, type):
		# launch window and keep the current perform mode
		self.LaunchOutputWindow(ui.performMode) if value == 1 else None

	def On_close_window(self, key, value, type):
		self.CloseOutputWindow() if value == 1 else None

	def On_perform_toggle(self, key, value, type):
		ui.performMode = value


	# ===============================================
	# Playlist Control Helpers
	# ===============================================

	def PlaylistLength(self):
		return op('select_active_items').numRows

	def PlaylistNext(self):
		# Increment the playlist index and wrap around if necessary
		self.playlistIndex = (self.playlistIndex + 1) % self.PlaylistLength()
		# get playlist data and switch mode
		curPlaylistID = self.playlistDAT[self.playlistIndex, 0]
		artistName = self.playlistDAT[self.playlistIndex, 3]
		artTitle = self.playlistDAT[self.playlistIndex, 2]
		op.AppStore.SetString(App.APP_STATE, App.MODE_INTERSTITIAL)
		op.AppStore.SetString('playlist_id', '')
		op.AppStore.SetString('playlist_id_queued', curPlaylistID)
		op.AppStore.SetString('artist_name', artistName)
		op.AppStore.SetString('art_title', artTitle)
		op.AppStore.SetFloat('player_progress', 0)

	def InterstitialComplete(self):
		op.AppStore.SetString(App.APP_STATE, App.MODE_TITLE)

	def TitleHidden(self):
		queuedId = op.AppStore.GetString('playlist_id_queued')
		op.AppStore.SetString('playlist_id_queued', '')
		op.AppStore.SetString('playlist_id', queuedId)
		op.AppStore.SetString(App.APP_STATE, App.MODE_PLAYER)

	def UpdatePlayerProgress(self, progress):
		op.AppStore.SetFloat('player_progress', progress)

	# ===============================================
	# Helpers to connect nodes to output composite
	# ===============================================

	def FindPlaylistComps(self):
		allComps = op('opfind_COMPs')
		allComps.numRows
		playlistComps = []
		for i in range(allComps.numRows):
			compName = allComps[i, 0]
			curOp = op(compName)
			if curOp != None and hasattr(curOp.par, 'Playlistid'):
				playlistComps.append(curOp)
		return playlistComps

	def PlaylistCompById(self, playlistID):
		playlistComps = self.FindPlaylistComps()
		for comp in playlistComps:
			if comp.par.Playlistid.eval() == playlistID:
				return comp
		return None

	def ClearPlaylistOutputs(self):
		playlistComps = self.FindPlaylistComps()
		for comp in playlistComps:
			comp.outputConnectors[0].disconnect()

	def PlaylistConnectOutputs(self):
		activeComps = op('select_active_items')
		opComposite = op('comp_all_visuals')
		for i in range(activeComps.numRows):
			playlistID = activeComps[i, 0]
			comp = self.PlaylistCompById(playlistID)
			self.ConnectFromTo(comp, opComposite)

	def ReconnectActiveItems(self):
		self.ClearPlaylistOutputs()
		self.PlaylistConnectOutputs()

	def ConnectFromTo(self, fromOp, toOp):
		fromOp.outputConnectors[0].connect(toOp)
