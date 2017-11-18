<?php
header('Content-Type: text/plain;charset=UTF-8');

$v = $_REQUEST['vcode'];

//将用户提交的验证码于之前服务器端生成的验证码进行比对
session_start();
if(strtolower($v)===strtolower($_SESSION['vcodeInServer'])){
    //验证码输入正确，开始执行数据INSERT操作....
    echo 'true';
}else {
    echo 'false';
}

