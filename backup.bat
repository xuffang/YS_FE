@echo off

set dd=%date:~8,2%
set mm=%date:~5,2%
set yy=%date:~0,4%
set Tss=%TIME:~6,2%
set Tmm=%TIME:~3,2%
set Thh=%TIME:~0,2%
set Thh=%Thh: =0%
rem set folder="%yy%.%mm%.%dd%.%Thh%.%Tmm%.%Tss%"
rem set folder="%yy%.%mm%.%dd%"
rem echo 当前时间为%folder% 

rem 使用时需要配置项目相关路径
set from="C:\Users\Administrator\Desktop\manage_center\manage"
set to="C:\Users\Administrator\Desktop\manage_center\manage_%yy%%mm%%dd%"
set current="C:\Users\Administrator\Desktop\manage_center\manage_current"

rem 历史版本备份
xcopy %from% %to% /e/I/D/h/r/y

rem 配置文件备份路径
set config="C:\Users\Administrator\Desktop\manage_center\manage_%yy%%mm%%dd%\backup"
md %config%

rem php.ini备份
set php="D:\wamp2.2\bin\apache\Apache2.2.21\bin\php.ini"
copy %php% %config%

rem httpd.conf备份
set httpd="D:\wamp2.2\bin\apache\Apache2.2.21\conf\httpd.conf"
copy %httpd% %config%

rem my.ini备份
set my="D:\wamp2.2\bin\mysql\mysql5.5.16\my.ini"
copy %my% %config%

rem 删除备份验证码图片
del %to%\public\images\verify\*.* /q

rem 删除当前版本验证码图片
del %from%\public\images\verify\*.* /q

rem 删除当前版本交互log
del %from%\PC_Addons\log\*.* /q

rem 删除当前版本系统log
del %from%\application\logs\*.* /q

rem 当前版本备份，以便版本回退
xcopy %from% %current% /e/I/D/h/r/y
exit
