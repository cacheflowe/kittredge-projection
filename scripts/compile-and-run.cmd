REM @echo off
REM ======== Don't display this script's commands

start "" kill-java-daily.cmd

REM ======== Restart point if app disappears
:restart

REM ======== Move to project root to launch
cd ..

REM ======== Kill previous java app
Taskkill /F /T /IM java.exe
Taskkill /F /T /IM javaw.exe
Taskkill /F /T /IM java.exe
Taskkill /F /T /IM javaw.exe

REM ======== Give time for computer to start up (you can always press a button to launch)
timeout 15

REM ======== Pass along app-specific args from launch script
REM ======== Allow different local java paths to be passed in as arg #4
REM ======== Use `java` instead of `javaw` if you want logging
SET args=%*
SET arg1=%1
SET arg2=%2
SET arg3=%3
SET javaPath=%4
IF [%javaPath%] == [] (
	SET javaPath="C:\Users\kittredgetheater2\.p2\pool\plugins\org.eclipse.justj.openjdk.hotspot.jre.full.win32.x86_64_17.0.7.v20230425-1502\jre\bin\java.exe"
)

REM ======== String replacement to find javac next to java.exe
SET javaCPath=%javaPath%
call SET javaCPath=%%javaCPath:java.exe=javac.exe%%
echo %javaCPath%

REM ======== Remove old compiled .class files recursively
del /S src\*.class

REM ======== Compile & run
SET natives=
SET classPath=src;bin;lib\haxademic\haxademic.jar;lib\java_websocket\Java-WebSocket-1.3.9.jar;lib\jetty\jetty-all-9.4.30.v20200611-uber.jar;lib\processing-4\core\library\core.jar;lib\processing-4\core\library\gluegen-rt.jar;lib\processing-4\core\library\jogl-all.jar 

%javaCPath% -classpath %classPath% src\com\reddymade\MePlusYouCapture.java
%javaPath% -Xmx16G -Xms4G %natives% -classpath %classPath%  com.cacheflowe.KittredgeProjection

REM ======== Move back to ./scripts dir
cd scripts

REM ======== Pause command to keep script window open if java program quits [REMOVED]
REM pause

REM ======== Try restarting if the program quits
REM taskkill /f /t /im javaw.exe
timeout 15
echo Restarting at %DATE%,%TIME%
goto :restart

