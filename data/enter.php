<?php
  header("Content-Type:text/plain;charset=utf-8");
  @$tel = $_REQUEST['tel'];
  @$pwd = $_REQUEST['pwd'];
  require('init.php');
  $sql = "SELECT * FROM b_login WHERE btel ='$tel' AND bpwd = '$pwd'";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //如果用户名或密码有误返回NULL
  if($row===NULL){
    echo "-3";
  }else{
    echo "$tel";
  }  
?>