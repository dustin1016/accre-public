var dir = [];
var files = [];
var currentDir = 1;
var prevDir;

var navArr = [1];

const accreAreas = [
    {id:1,accre_name:'Vision & Mission, Goals & Objectives'},
    {id:2,accre_name:'Faculty'},
    {id:3,accre_name:'Curriculum'},
    {id:4,accre_name:'Student Support'},
    {id:5,accre_name:'Research'},
    {id:6,accre_name:'Extension'},
    {id:7,accre_name:'Library'},
    {id:8,accre_name:'Physical Plants Facilities'},
    {id:9,accre_name:'Laboratories'},
    {id:10,accre_name:'Administration'}
]
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];


function formatDate(str){
    var d = new Date(str);
    var dx = months[d.getMonth()] + ' ' + d.getDate()+', '+ d.getFullYear();
    return dx;
  }


    var activeUser = getCookie('userid');
    var xx =getCookie('usr_d');
   

    
        if (xx == ''){
            //there is no user logged in
            window.location.href="index"
        } 
        // else {

        //     $("#logged-user").text(xx);
        
        // }
    
function clearDir(){
    $('#files-table > tbody').html('');
    $('#files-table').dataTable().fnClearTable();
    $('#files-table').dataTable().fnDestroy();
}

  $(".navi-link").click(function () { 
    $(".navi-link").removeClass('active');
    $(".db-section").removeClass('active');
    $(this).addClass('active');
    let div = "#"+$(this).data('div');

    $(div).addClass('active');
  });



  $(document).ready(function () {

    getFiles();
    getDirs();
    clearDir();
    console.log(window.location.pathname)
    $("#accArea").val(0);
      $('#newProfileForm').trigger("reset");
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    $("#tdate").val(today);


   
  });

  const getFileName = (idx) => {
    var fileName = files.find(x=>x.file_idx === parseInt(idx)).file_name;
    return fileName??'';
  }

  const getAccreArea = (idx) => {
    var area = accreAreas.find(x=>x.id === parseInt(idx)).accre_name;
    return area??'';
  }

  const deleteFileFromArray = (idx) => {
    
    files = files.filter(function(obj){
        return obj.file_idx !== idx;
    });
   
    contentPop();
  }

  const getFileExt = (id) => {
    const x = files.find(x=>x.file_idx === parseInt(id)).file_ext;

    return x;
  }

  function collapseNav(){
    console.log($(".navbar-toggler").hasClass('collapsed'))
    if ($(".navbar-toggler").hasClass('collapsed') === false){
        $(".navbar-toggler").trigger('click')
    }
  }

  function openFileEdit(id, areaId, desc){
    console.log(id, areaId, desc);
    console.log($.type(desc))
    const n = getFileName(id);
    const x = '.'+getFileExt(id);
    console.log(x);
    const nx = n.replace(x, '');
    const a = getAccreArea(areaId);
    const d = (desc==null || desc == 'null') ? '' : desc;

    console.log(n,nx, a ,d);

    $("#editFileName").val(nx);
    $("#editAccArea").val(areaId);
    $("#editFileDesc").val(d);
    $("#oldFileName").val(n);
    $("#editFileExt").val(x);
    $("#editFileIndex").val(id);
    $("#oldAccArea").val(areaId);


}

  const contentPop = () => {
    collapseNav();
    clearDir();


  
    

    var dirs = dir.filter(x=>x.dir_parent === currentDir);
    var f = files.filter(x=>x.parent_dir===currentDir);
    console.log(dirs);
   
     //populate for directories
    if (dirs.length > 0){

        $.each(dirs, function(key, val){
            
            $("#files-table > tbody").append(
                '<tr>'+
                    '<td><a class="dir-link" onclick="openDir('+val.dir_idx+')" href="javascript:void(0);"><img src="img/file-icons/folder.png" class="me-3" alt="." height="20" width="30">'+ val.dir_name +'</a></td>'+
                    '<td>'+ formatDate(val.created_at) +'</td>'+
                    // '<td>&nbsp;</td>'+
                
                    '<td class="text-end"><button class="btn btn-danger btn-sm mb-2 mb-md-0  me-2">&#10005;</button><button class="btn btn-primary btn-sm">&#9998;</button></td>'+
                   
                '</tr>'
            );    
        });
     
    }
    //populate for files
    if (f.length > 0){
        $.each(f, function(key, val){
            var area = accreAreas.find(x=>x.id===val.accre_area).accre_name;
            var ext = val.file_ext;
            var pf = accreAreas.find(x=>x.id === parseInt(val.accre_area)).accre_name;
            var ref = (ext === "pdf") ? "ViewerJS/#../" : "";
            $("#files-table > tbody").append(
                '<tr>'+
                    '<td><a class="dir-link"  href="'+ref+'documents/'+pf+'/'+val.file_name+'" target="_blank"><img src="img/file-icons/'+ext+'.png" class="me-2" alt="." height="30" width="30">'+ val.file_name +'</a></td>'+
                    '<td>'+ formatDate(val.created_at) +'</td>'+
                    // '<td>'+ area +'</td>'+
              
                    `<td class="text-end"><button onClick="deleteFile(${val.file_idx}, ${val.accre_area})" class="btn btn-danger btn-sm mb-2 mb-md-0 me-2">&#10005;</button>`+
                    `<button class="btn btn-primary btn-sm" onClick="openFileEdit(${val.file_idx}, ${val.accre_area}, '${val.file_desc}')" data-bs-toggle="modal" data-bs-target="#editFileModal">&#9998;</button></td>`+
                    // `<button class="btn btn-primary btn-sm" onClick="openFileEdit(${val.file_idx}, ${val.accre_area}, '${val.file_desc}')" >&#9998;</button></td>`+
                   
                   
                '</tr>'
            );    
        });
    }
    if (currentDir != 1){

        navBreads();
        $("#backButton").removeClass('invisible');
    } else {
        $("#backButton").addClass('invisible');
    }


  
    $('#files-table').DataTable({
        order: [[2, 'asc']],
    });
  

  }

  function getDirFiles(){

  }


  function navBreads(){
    
      $("#breadcrumbs").html('');
      var p = navArr.slice(-1)[0];
      $.each(navArr, function(key, val){
        // console.log(val);
        var dn = dir.find(x=>x.dir_idx === parseInt(val)).dir_name;
      
        var active = (parseInt(val) === p) ? "active" : "";
        $("#breadcrumbs").append(
            '<li class="breadcrumb-item '+active+'">'+dn+'</li>'
        );
      });
  }


  function openDir(id){
    navArr.push(id);
    console.log(navArr);
    prevDir = currentDir;
    currentDir = parseInt(id);
    var cd = dir.find(x=>x.dir_idx===id).dir_name;
    

    $("#current-dir").text(cd);
    contentPop();
  }

  $("#backButton").click(function(){
    navArr.pop();
    currentDir = navArr.slice(-1)[0];
    console.log(navArr);
    if (currentDir == 1){
        navBreads();
    }
    contentPop();
  });



  function getDirs(){
    
    $.ajax({
        type: 'POST',
       
        url: 'php/directories.php',
        data: {a:1},
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            if (data.result){
                dir = data.directories;
                console.log(dir);
            }
            
            
          
        }

    }).then((result) => {
        contentPop();
    }).catch((err) => {
        console.log(err);
    });; //END AJAX
  }
  

  function getFiles(){
    
    $.ajax({
        type: 'POST',
       
        url: 'php/files.php',
        data: {a:1},
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            if (data.result){
                files = data.files;
                    console.log(files);
            }
          
            
            
          
        }

    }); //END AJAX
  }

  

  function getUsers(){
    $('#users-table').DataTable().clear().destroy();
    collapseNav()
    $.ajax({
        type: 'GET',
    
        url: 'php/users.php',
       
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            console.log(data.users.length);
            
            if (data.users.length > 0){
                users = data.users;
                userPop();
            }
        }

    }); //END AJAX
  }


  function userPop(){
    console.log(users);
    $('#users-table > tbody').html('');
    $('#users-table').dataTable().fnClearTable();
    $('#users-table').dataTable().fnDestroy();
    $.each(users, function(key, val){
        $("#users-table > tbody").append(
            '<tr>'+
                '<td class="fs-2">'+ val.username+
                '</td>'+
                '<td class="text-center"><button type="button" class="btn btn-danger">Delete</button></td>'+
               
            '</tr>'
        );
    });
    $('#users-table').DataTable()
  }

function modifyFile(id, newName, areaId){

}
    
function deleteFile(id, areaId){
   
        const filename = getFileName(id);
        const area = getAccreArea(areaId);
       
    if (confirm(`Are you sure you want to delete this file? \n ${filename}`)){
    
        const data = {
            idx: id,
            filename: filename,
            accArea: area,
            a: 3
        }
        $.post("php/files.php", data,
            function (data, textStatus, jqXHR) {
                if (data.result){
                    deleteFileFromArray(id);        
                    alert('file has been deleted');
                }
            },
            "json"
        );

   
    }
}   

  


