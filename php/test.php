<?php



include('config.php');


$conn = mysqli_connect(servername, dbuser, dbpw, dbname);
$stmt = mysqli_prepare($conn, "SELECT * FROM `accre_areas` order by `accre_index` ASC");
$stmt->execute();
$result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC); 
if ($result){


  echo json_encode(array("result"=>true,"directories"=>$result));
} else {
  echo json_encode(array("result"=>false, "message"=>"Something went wrong...pls contact developers"));
}


$stmt->close();