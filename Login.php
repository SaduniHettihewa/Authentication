<?php 
// connection create 
$mysqli = new mysqli("localhost","serverName",'',"DBName");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
  //json decodor
	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);
    

	$email1 = $obj['email'];
	
	$password1 = $obj['password'];
	
	if($email1!=""){	
	//check data available or not
	$result= $mysqli->query("SELECT * FROM `user` WHERE email='$email1' and password='$password1' ");

  
		if($result->num_rows==0){
			echo json_encode('Invalid Details !!');				
		}
		else{		
		echo json_encode('Welcome');				
		}
	}	
	else{
	  echo json_encode('try again');
	}

?>