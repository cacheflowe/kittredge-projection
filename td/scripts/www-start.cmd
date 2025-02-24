pushd ..\www\scripts\
start "www" /min serve-all.cmd ^& exit
popd

exit