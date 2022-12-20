<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET');
  header('Access-Control-Max-Age: 1000');
  header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');


  include('config.php');


  switch($_POST["a"]){
    case "1":
        getFiles();
        break;
    case "2":
      saveFile();
      break;
    case "3":
      //request is to delete file
      deleteFile();
      break;
    case "4":
      modFile();
      break;
    default: break;

  }

  function getFiles(){
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    $stmt = mysqli_prepare($conn, "SELECT * FROM accre_files order by `file_idx` DESC");
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC); 

    echo json_encode(array("result"=>true, "files"=>$result));
    // if ($stmt->affected_rows > 0){
    // } else {
    //     echo json_encode(array("result"=>false, "message"=>"Something went wrong...pls contact developers"));

    // }
    $stmt->close();
  }


  function saveFile(){
  
      $filename = $_FILES['file']['name'];
    
      $ext = getFileExt($filename);
   
      $dept_id = $_POST["dept_id"];
      $tier = $_POST["tier"];
     

      $parent = $_POST["parent"];
      $creator = $_POST["creator"];
      $accdesc = $_POST["accDesc"];
    
      $today = today;
     

      //save the file to tmp dir
      // $tmp_dir = sys_get_temp_dir();
      // $outputfile = $tmp_dir."/${filename}" ;
  
      // $filehandler = fopen($outputfile, 'wb' ); 
      // fwrite($filehandler, base64_decode($data->img));
      // // clean up the file resource
      // fclose($filehandler);

 

      try {
        //code...
        //save to database
       
        
        $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
        $stmt = mysqli_prepare($conn,
         "INSERT INTO `accre_files`(`file_name`, `file_desc`,`parent_dir`, `created_at`, `created_by`, `file_ext`, `tier_id`, `dept_id`) VALUES (?,?,?,?,?,?,?,?)");
        mysqli_stmt_bind_param(
          $stmt,
           'ssisssii',
            $filename,
            $accdesc,
            $parent,
            $today,
           
              $creator,
               $ext,
                $tier, $dept_id
              );
        $stmt->execute();
        
        if ($stmt->affected_rows > 0){
               // upload to s3
            require "vendor/autoload.php";

            $s3 = new Aws\S3\S3Client([
              'region'  => 'ap-southeast-1',
              'version' => 'latest',
              'credentials' => [
                  'key'    => "AKIAXFRJBWCUVVZRV5PM",
                  'secret' => "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",
              ]
            ]);		

          $newfile = "documents/d-".$dept_id."/t-".$tier."/p-".$parent."/".$filename;

          $result = $s3->putObject([
              'Bucket' => 'ac3-890ddq',
              'Key'    => $newfile,
              'SourceFile' => $_FILES['file']['tmp_name'],			
              'ACL' => 'public-read',
          ]);

          $insertDate = date('Y-m-d');
          echo json_encode(array("result"=>true, "message"=>"New File has been uploaded!", 'idx'=>$conn->insert_id, 'insertDate'=> $insertDate, "ext"=>$ext, "tier_id"=>$tier, "parent_dir"=>$parent, "dept_id"=>$dept_id));
         } else {
          echo json_encode(array("result"=>false, "message"=>"Something went wrong...pls contact developers1"));
    
        }
     
        $stmt->close();
      
      
      
      } catch (Error $e) {
        echo json_encode(array("result"=>false, "message"=>"Something went wrong...pls contact developers1"));
      }



  
     

      
      
  }


  function getLoc($accArea){
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    $stmt = mysqli_prepare($conn, "SELECT `accre_name` FROM `accre_areas` where `accre_index` = ?");
    mysqli_stmt_bind_param($stmt, 'i', $accArea);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC); 
    // var_dump($result[0]["accre_name"]);
    // exit();
    if ($stmt->affected_rows > 0){
      return $result[0]["accre_name"];
     } else {
      return "others";

    }
    $stmt->close();
  }
  

  function getFileExt($filename){

    $ext = explode(".", $filename);
    return end($ext);
  }

  function deleteFile(){
 
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    $stmt = mysqli_prepare($conn, "DELETE FROM `accre_files` WHERE `file_idx` = ?");
    mysqli_stmt_bind_param($stmt, 'i', $_POST['idx']);
    $stmt->execute();
    
    
    if ($stmt->affected_rows > 0){
      echo json_encode(array("result"=>true, "message" => "file deleted from directory and database"));
     } else {
      echo json_encode(array("result"=>false, "message" => "error"));

    }
    $stmt->close();
  }



  function getArea($areaId){
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    $stmt = mysqli_prepare($conn, "SELECT `accre_name` FROM `accre_areas` where `accre_index` = ?");
    mysqli_stmt_bind_param($stmt, 'i', $areaId);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC); 

    if ($stmt->affected_rows > 0){
      return $result[0]["accre_name"];
     } else {
      return "others";

    }
    $stmt->close();
  }

  function modFile(){
    // var_dump($_POST);
    // exit();
    $desc = $_POST['editFileDesc']==''?null:$_POST['editFileDesc'];
    $newFile = $_POST['editFileName'].'.'.$_POST['editFileExt'];
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    $stmt = mysqli_prepare($conn, "UPDATE `accre_files` SET `file_name` = ?, `accre_area` = ? ,`file_desc` = ? WHERE `file_idx` = ?");
    mysqli_stmt_bind_param($stmt, 'sisi',$newFile, $_POST['editAccArea'], $desc, $_POST['editFileIndex']);
    $stmt->execute();
    
    
    if ($stmt->affected_rows > 0){
      $oldArea = getArea($_POST['oldAccArea']);
      $newArea = getArea($_POST['editAccArea']);
      if (rename("../documents/".$oldArea."/".$_POST['oldFileName'], "../documents/".$newArea."/".$newFile)){
        echo json_encode(array("result"=>true, "message" => "file modified from directory and database"));
      } else {
        echo json_encode(array("result"=>true, "message" => "file modified only from database"));

      }
     } else {
      echo json_encode(array("result"=>false, "message" => "error"));

    }
    $stmt->close();
  }


  


  