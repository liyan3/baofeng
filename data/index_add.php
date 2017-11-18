<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
$sql = "SELECT curl,chref FROM b_carousel";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
$str = json_encode($rows);
if($result===false){
	echo "-1";
}
	echo $str;
?>