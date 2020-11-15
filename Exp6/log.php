<?php
	$connection = mysqli_connect("localhost","root","");
	$db = mysqli_select_db($connection,"lms");
	// $query = "insert into users values(null,'$_POST[name]','$_POST[rollno]','$_POST[email]','$_POST[password]',$_POST[mobile])";
	$query = "SELECT `users`(`name`, `password`) VALUES ('$_POST[name]','$_POST[password]')";
	// $query = "INSERT INTO `admins`(`id`, `name`, `email`, `password`, `mobile`) VALUES (null,'$_POST[name]','$_POST[email]','$_POST[password]',$_POST[mobile])"
	$query_run = mysqli_query($connection,$query);
?>
<script type="text/javascript">
	alert("WELCOME......")
	window.location.href = "home.php";
</script>

