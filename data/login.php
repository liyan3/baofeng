<?php
header("Content-type:text/plain;charset = utf-8"); 
require('init.php');
$tel = $_REQUEST['tel']or die("-1");
$pwd = $_REQUEST['pwd']or die("-2");
$sql = "SELECT * FROM b_login WHERE btel=$tel";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row === null){
	$sql = "INSERT INTO b_login VALUES(NULL,$tel,'$pwd')";
	$result = mysqli_query($conn,$sql);
		if($result===false){
			echo '-3';
		}else{
			echo '注册成功sql1';
		}
}else{
	echo "该手机号已注册";
}
