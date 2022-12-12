<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET');
  header('Access-Control-Max-Age: 1000');
  header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');


  include('config.php');


  switch($_POST["a"]){
    case "1":
        getDirs();
        break;
    case "2":
        saveDir();
        break;
        case "3":
          getAreas();
          break;
    default: break;

  }

  $directories = [
    "Vision & Mission, Goals & Objectives",
    "Faculty",
    "Curriculum",
    "Student Support",
    "Research",
    "Extension",
    "Library",
    "Physical",
    "Laboratories",
    "Administration"
  ];

  function getDirs(){
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    $stmt = mysqli_prepare($conn, "SELECT * FROM directories order by `dir_idx` DESC");
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC); 
    if ($stmt->affected_rows > 0){
        echo json_encode(array("result"=>true, "directories"=>$result));
    } else {
        echo json_encode(array("result"=>false, "message"=>"Something went wrong...pls contact developers"));

    }
 
    $stmt->close();
  }


  function getContents(){

     $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    $stmt = mysqli_prepare($conn, "SELECT * FROM `$table` order by `` ASC");
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC); 
    echo json_encode(array("result"=>true,"directories"=>$result));
    exit();
    if ($result){
      foreach ($result as $key => $value) {
        $result[$key]["t1"] = getTIer1($value["accre_index"]);
      }

    } else {
      echo json_encode(array("result"=>false, "message"=>"Something went wrong...pls contact developers"));
    }
    
 
    $stmt->close();
  }

  function getAreas(){
    try {
      $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
      $stmt = mysqli_prepare($conn, "SELECT * FROM `accre_areas` order by `accre_index` ASC");
      $stmt->execute();
      $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
   
      // foreach ($result as $key => $value) {
      //   $result[$key]["t1"] = getTIer1($value["accre_index"]);
      // }
      $tier1 = getTier1(1);
      $tier2 = getTier2(1);
      $tier3 = getTier3(1);

      echo json_encode(array("result"=>true,"directories"=>$result, "t1"=>$tier1, "t2"=>$tier2, "t3"=>$tier3)); 
      echo json_encode(array("result"=>true,"t2"=>$tier2)); 
      //code...
    } catch (Error $e) {
      echo json_encode(array("result"=>false, "message"=>$e." \n Something went wrong...pls contact developers"));
    }
   
    
 
    $stmt->close();
  }


  function getTier1($accre_index){
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    // $stmt = mysqli_prepare($conn, "SELECT * FROM `accre_t1_dir` WHERE `accre_index` = $accre_index ORDER BY `t1_id`  ASC");
    $stmt = mysqli_prepare($conn, "SELECT * FROM `accre_t1_dir` ORDER BY `t1_id`  ASC");
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC); 
    // if ($result != null){
      // foreach ($result as $key => $value) {
      //   $result[$key]["t2"] = getTier2($value["t1_id"]);
      // }
    // } 

    return $result;

 
    $stmt->close();
  }
  function getTier2($t1_id){
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    // $stmt = mysqli_prepare($conn, "SELECT * FROM `accre_t2_dir` WHERE `t1_id` = $t1_id ORDER BY `t2_id`  ASC");
    $stmt = mysqli_prepare($conn, "SELECT * FROM `accre_t2_dir` ORDER BY `t2_id`  ASC");
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC); 
    
      // foreach ($result as $key => $value) {
      //   $result[$key]["t3"] = getTier3($value["t2_id"]);
      // }


    return $result;
 
    $stmt->close();
  }
  function getTier3($t2_id){
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    // $stmt = mysqli_prepare($conn, "SELECT * FROM `accre_t3_dir` WHERE `t2_id` = $t2_id ORDER BY `t3_id`  ASC");
    $stmt = mysqli_prepare($conn, "SELECT * FROM `accre_t3_dir` ORDER BY `t3_id`  ASC");
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC); 
    return $result;
 
    $stmt->close();
  }

  function saveDir() {
    $dirname = trim($_POST["dirName"]);
    $dp = $_POST["parent"];
    $creator = $_POST["creator"];
    $today = today;
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    $stmt = mysqli_prepare($conn, "INSERT INTO `directories` (`dir_name`, `dir_parent`,`created_at`, `created_by`) VALUES (?,?,?,?)");
    mysqli_stmt_bind_param($stmt, 'sisi', $dirname, $dp,$today, $creator);
    $stmt->execute();
    if ($stmt->affected_rows > 0){
      $insertDate = date('Y-m-d');
      echo json_encode(array("result"=>true, "message"=>"New Directory has been saved!", 'idx'=>$conn->insert_id, 'insertDate'=> $insertDate));
     } else {
      echo json_encode(array("result"=>false, "message"=>"Something went wrong...pls contact developers"));

    }

  $stmt->close();
  }