import sys
import os
import platform
import td

def PrintPythonPath():
	print("[Config] 🐍----------------------------------🐍")
	print('[Config] Python sys.path:')
	for path in sys.path:
		print("[Config] -", path)
	print("[Config] 🐍----------------------------------🐍")


def AddCondaEnvToPath(user, env_name):
	if platform.system() == 'Windows':
		windowsPathBase = 'C:/Users/'+user+'/miniconda3/envs/'+env_name
		windowsPathDLLs = windowsPathBase+'/DLLs'
		windowsPathLib = windowsPathBase+'/Library/bin'
		windowsPathSite = windowsPathBase+'/Lib/site-packages'
		if windowsPathSite not in sys.path:
			print(f"[Config] Adding conda environment '{env_name}' for user '{user}' to sys.path")
			print('[Config] Added Conda DLLs and Library paths added to sys.path:')
			print('[Config] - Conda env DLLs path: ', windowsPathDLLs)
			print('[Config] - Conda env Library path: ', windowsPathLib)
			print('[Config] - Conda env site-packages path: ', windowsPathSite)
			os.add_dll_directory(windowsPathDLLs)
			os.add_dll_directory(windowsPathLib)
			sys.path.insert(0, windowsPathSite)  # Add to the beginning of the path list
		else:
			print('[Config] Conda env {} already loaded!'.format(env_name))
	else:
		print(f"[Config] Adding conda environment '{env_name}' for user '{user}' to sys.path")
		macPathBase = '/Users/'+user+'/opt/miniconda3/envs/'+env_name
		macPathLib = macPathBase+'/lib'
		macPathBin = macPathBase+'/bin'
		macPathSite = macPathBase+'/lib/python3.9/site-packages'
		if macPathSite not in sys.path:
			print('[Config] Added Conda lib, bin and site-packages paths to sys.path:')
			print('[Config] - Conda env lib path: ', macPathLib)
			print('[Config] - Conda env bin path: ', macPathBin)
			print('[Config] - Conda env site-packages path: ', macPathSite)
			os.environ['PATH'] = macPathLib + os.pathsep + os.environ['PATH']
			os.environ['PATH'] = macPathBin + os.pathsep + os.environ['PATH']
			sys.path.insert(0, macPathSite)  # Add to the beginning of the path list
		else:
			print('[Config] Conda env {} already loaded!'.format(env_name))


def AddPyDirToPath(new_path):
	if new_path not in sys.path:
		if os.path.exists(new_path):
			sys.path.insert(0, new_path)  # Add to the beginning of the path list
	else:
		print('[Config] Python path already loaded!')


def LoadEnvFile(new_path=os.path.join(td.project.folder, '.env')):
	# load environment variables from a .env file and copy values into AppStore
	if os.path.exists(new_path):
		print(f"[Config] Loading .env file: {new_path}")
		with open(new_path) as f:
			for line in f:
				line = line.strip()
				if line and not line.startswith("#"):
					key, value = line.split("=", 1)
					os.environ[key] = value
					print(f"[Config] - {key}={value}")
					StoreValueInStore(key, value)
	else:
		print(f"[Config] Env file {new_path} does not exist!")


def LoadSystemEnvironmentVar(key, default_value=None):
	if key not in os.environ:
		print(f"[Config] System environment variable '{key}' not found. Using default value: {default_value}")
		StoreValueInStore(key, default_value)
	else:
		value = os.environ[key]
		if value != None:
			print(f"[Config] Add system environment var: {key}={value}")
			StoreValueInStore(key, value)


def StoreValueInStore(key, value):
	# Store a value in the AppStore
	if td.op.AppStore:
		# check for number/boolean types
		if value.isdigit():
			td.op.AppStore.SetFloat(key, value)
		elif value.lower() in ['true', 'false']:
			value = value.lower() == 'true'
			td.op.AppStore.SetBoolean(key, value)
		else:
			td.op.AppStore.SetString(key, str(value))
	else:
		print("[Config] AppStore not available.")