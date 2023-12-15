<?php
	$email = $_POST['email'];
	$message = $_POST['message'];
// Database connection
	$conn = new mysqli('','','','');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into footer_form(email, message) values(?, ?)");
		$stmt->bind_param("ss", $email, $message);
		$execval = $stmt->execute();
		echo $execval;
		echo "<script type='text/javascript'>window.open('http://yamoym.000webhostapp.com/front.html', '_blank');</script>";
		$stmt->close();
		$conn->close();
	}
?>