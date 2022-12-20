
var files = [];
var activetier = 0;
var currentDir = 0;
var prevDir;
var currentTier = 0;
var prevTier;
var navArr = [0];
var dirHistory = [];
var activeDept = getParameterByName('dept');
var deptname = departments.find(x=>x.id === parseInt(activeDept)).name;
var img = departments.find(x=>x.id === parseInt(activeDept)).img;
var gradient = departments.find(x=>x.id === parseInt(activeDept)).gradient;
var imageLink, docLink;
$(".dept-context").text(deptname);
$("#deptImage").prop('src', img);
$("#maincontainer").css('background-image', 'linear-gradient(0.45turn, #fff, #fff, '+gradient+')')

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
    // getDirs();
    clearDir();
    
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
   
    contentPop(currentTier, currentDir);
  }

  const getFileExt = (id) => {
    const x = files.find(x=>x.file_idx === parseInt(id)).file_ext;

    return x;
  }

  function collapseNav(){
    
    if ($(".navbar-toggler").hasClass('collapsed') === false){
        $(".navbar-toggler").trigger('click')
    }
  }

  function openFileEdit(id, areaId, desc){
  
    const n = getFileName(id);
    const x = '.'+getFileExt(id);
  
    const nx = n.replace(x, '');
    const a = getAccreArea(areaId);
    const d = (desc==null || desc == 'null') ? '' : desc;

  

    $("#editFileName").val(nx);
    $("#editAccArea").val(areaId);
    $("#editFileDesc").val(d);
    $("#oldFileName").val(n);
    $("#editFileExt").val(x);
    $("#editFileIndex").val(id);
    $("#oldAccArea").val(areaId);


}

  const contentPop = (t,d) => {
    collapseNav();
    clearDir();


    var tempDir;
    currentTier = t;
    if (currentTier>0) {
        $("#btnFile").removeClass('d-none');
    } else {
        $("#btnFile").addClass('d-none');
    }
    // var state = (t===0) ? true : false;
    // $("#btnFile").prop("disabled",state);
    switch(t){
        case 0:
           
            tempDir = dir;
            break;
        case 1:
            tempDir = dirt1.filter(x=>x.accre_index === d);
            break;
        case 2:
            tempDir = dirt2.filter(x=>x.t1_id === d);
            break;
        case 3:
            tempDir = dirt3.filter(x=>x.t2_id === d);
            break;
            default:
               
            break;
    }

    // var dirs = dir.filter(x=>x.dir_parent === currentDir);
    // var f = files.filter(x=>x.parent_dir===currentDir);
    var f = files.filter(function(item){
        // return (item.parent_dir === currentDir && item.tier_id === currentTier && item.dept_id === parseInt($("#dept").val()))
        return (item.parent_dir === currentDir && item.tier_id === currentTier && item.dept_id === parseInt(activeDept))
    });
  
   console.log(f);
     //populate for directories
    if (tempDir.length > 0){

        $.each(tempDir, function(key, val){
            switch(t){
                case 0:
                    id = val.accre_index;
                    dname = val.accre_name;
                    break;
                case 1:
                    id = val.t1_id;
                    dname = val.name;
                    break;
                case 2:
                    id = val.t2_id;
                    dname = val.name;
                    break;
                case 3:
                    id = val.t3_id;
                    dname = val.name;
                    break;
                    default: break;
            }
            $("#files-table > tbody").append(
                '<tr>'+
                    `<td><a class="dir-link" onclick="openDir(${id}, ${t})" href="javascript:void(0);"><img src="img/file-icons/folder.png" class="me-3" alt="." height="20" width="30"> ${dname} </a></td>`+
                    // '<td>'+ formatDate(val.created_at) +'</td>'+
                    '<td>&nbsp;</td>'+
                
                    // '<td class="text-end"><button class="btn btn-danger btn-sm mb-2 mb-md-0  me-2">&#10005;</button><button class="btn btn-primary btn-sm">&#9998;</button></td>'+
                   
                '</tr>'
            );    
        });
     
    }
    //populate for files
    if (f.length > 0){
        $.each(f, function(key, val){
            // var area = accreAreas.find(x=>x.id===val.accre_area).accre_name;
            var ext = val.file_ext;
           var dept = $("#dept").val();
           
            var proc;
            var fileLink = `https://ac3-890ddq.s3.ap-southeast-1.amazonaws.com/documents/d-${val.dept_id}/t-${val.tier_id}/p-${val.parent_dir}/${val.file_name}`;
            switch(ext.toLowerCase()){
                case "pdf":
                    proc = `<td><a class="dir-link" onClick="openDoc('${fileLink}', '${val.file_name}')" data-bs-toggle="modal" data-bs-target="#docModal"  href="javascript:void(0);"><img src="img/file-icons/${ext}.png" class="me-2" alt="." height="30" width="30">'${val.file_name}</a></td>`;
                    break;
                case "jpg":
                    case "jpeg":
                        case "png":
                            case "webp":
                                
                            proc = `<td><a class="dir-link" onClick="setImg('${fileLink}', '${val.file_name}')" data-bs-toggle="modal" data-bs-target="#imgModal"  href="javascript:void(0);"><img src="img/file-icons/${ext}.png" class="me-2" alt="." height="30" width="30">'${val.file_name}</a></td>`;
                            break;
                case "doc":
                    case "docx":
                        case "xls":
                            case "xlsx":
                                case "txt":
                                    proc = `<td><a class="dir-link" onClick="openDoc('${fileLink}', '${val.file_name}')" data-bs-toggle="modal" data-bs-target="#docModal"  href="javascript:void(0);"><img src="img/file-icons/${ext}.png" class="me-2" alt="." height="30" width="30">'${val.file_name}</a></td>`;
                                    break;      
                default: break;
            }
        
            $("#files-table > tbody").append(
                '<tr>'+
                    // '<td><a class="dir-link"  href="'+ref+'https://ac3-890ddq.s3.ap-southeast-1.amazonaws.com/documents/d-'+val.dept_id+'/t-'+val.tier_id+'/p-'+val.parent_dir+'/'+val.file_name+'" target="_blank"><img src="img/file-icons/'+ext+'.png" class="me-2" alt="." height="30" width="30">'+ val.file_name +'</a></td>'+
                    // `<td><a class="dir-link" onClick="openF('${fileLink}')"  href="javascript:void(0);"><img src="img/file-icons/${ext}.png" class="me-2" alt="." height="30" width="30">'${val.file_name}</a></td>`+
                    proc +// '<td>'+ formatDate(val.created_at) +'</td>'+
                    // '<td>'+ area +'</td>'+
                    '<td>&nbsp;</td>'+
                    // `<td class="text-end d-flex"><button onClick="deleteFile(${val.file_idx}, ${val.accre_area})" class="btn btn-danger btn-sm mb-2 mb-md-0 me-2">&#10005;</button>`+
                    // `<button class="btn btn-primary btn-sm" onClick="openFileEdit(${val.file_idx}, ${val.accre_area}, '${val.file_desc}')" data-bs-toggle="modal" data-bs-target="#editFileModal">&#9998;</button>`+
                    // '</td>'+
                    // `<button class="btn btn-primary btn-sm" onClick="openFileEdit(${val.file_idx}, ${val.accre_area}, '${val.file_desc}')" >&#9998;</button></td>`+
                   
                   
                '</tr>'
            );    
        });
    }
    navBreads(d);
    if (currentTier != 0){
        $("#backButton").removeClass('invisible');
    } else {
        $("#backButton").addClass('invisible');
    }


  
    // $('#files-table').DataTable({
    //     order: [[2, 'asc']],
    // });
  

  }

  function setImg(src, name){
    imageLink = src;
    $("#imgName").text(name);
}

function openDoc(src, name){
    var link = `https://docs.google.com/gview?url=${src}&embedded=true`;
    docLink = link;
    $("#docName").text(name);
  }

  function openF(src){
    window.open(src, '_blank');
  }

  function navBreads(d){
   
    
      $("#breadcrumbs").html('');
      var p = navArr.slice(-1)[0];
      
    

     if (dirHistory.length > 0){
        $.each(dirHistory, function(key, val){
       
            
            // var dn = tmpDir.find(x=>x.dir_idx === parseInt(val)).dir_name;
          
            var active = (key == dirHistory.length - 1) ? "active":"";
            $("#breadcrumbs").append(
                '<li class="breadcrumb-item '+active+'">'+val+'</li>'
            );
          });
     } else {
        $("#breadcrumbs").append(
            '<li class="breadcrumb-item active">Root</li>'
        );
     }
    
 
  }


  function getDirName(id){
    
  
    var breadcrumb = '';
    switch(currentTier){
        case 0:
           
            breadcrumb = dir.find(x=>x.accre_index === id).accre_name;
            break;
        case 1:
          
            breadcrumb = dirt1.find(x=>x.t1_id === id).name;
            break;
        case 2:
          
            breadcrumb = dirt2.find(x=>x.t2_id === id).name;
            break;
        case 3:
           
            breadcrumb = dirt3.find(x=>x.t3_id === id).name;
            break;
        default: break;
    }

    return breadcrumb;
  }

  function openDir(id, t){

    var breadCrumb = getDirName(id);
   
    dirHistory.push(breadCrumb);

    navArr.push(id);
  
    currentTier = t + 1;



    // var cd = dir.find(x=>x.accre_index===id).accre_name;
    prevDir = currentDir;
    currentDir = parseInt(id);
    


    // $("#current-dir").text(cd);
    console.log(`entering tier ${currentTier}`);
    contentPop(currentTier, id);
  }

  $("#backButton").click(function(){
      navArr.pop();
      dirHistory.pop();
      currentDir = navArr.slice(-1)[0];
   
      
      currentTier--;
      console.log(`going back to ${currentTier}`);
    if (currentDir == 1){
        navBreads();
    }
    contentPop(currentTier, currentDir);
  });



  function getDirs(){
    
    $.ajax({
        type: 'POST',
       
        url: 'php/directories.php',
        data: {a:3},
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            if (data.result){
                dir = data.directories;

               
                //populate the t1 dirs
                $.each(dir, function(key, val){
                    $.each(val.t1, function(key, val){
                        dirt1.push(val)
                    });

                    
                });
             
              //populate t2 dirs
              $.each(dirt1, function(key, val){
                $.each(val.t2, function(key, val){
                    dirt2.push(val)
                    });
                });
                //populate t3
                $.each(dirt2, function(key, val){
                  
                    //check if there is a t3 dir
                    if (val.t3.length > 0) {
                        $.each(val.t3, function(key, val){
                            dirt3.push(val)
                            });
                    }
                   
                    });

            
         
            
            
            }

            
            
            
          
        }

    }).then((result) => {
        $(".fetch-status").addClass('d-none');
        contentPop(0, 0);
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

    }).then((result)=>{
        $(".fetch-status").addClass('d-none');
        contentPop(0, 0);
    }); //END AJAX
  }

  

 $("#dept").on('change', function(){
    contentPop(currentTier, currentDir);
 });


    
function deleteFile(id, areaId){
   
        const filename = getFileName(id);
        // const area = getAccreArea(areaId);
       
    if (confirm(`Are you sure you want to delete this file? \n ${filename}`)){
    
        const data = {
            idx: id,
            filename: filename,
           
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

  


