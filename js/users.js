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
   
    




  $(document).ready(function () {

  
    getUsers();
   
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    $("#tdate").val(today);


   
  });



  function collapseNav(){
    console.log($(".navbar-toggler").hasClass('collapsed'))
    if ($(".navbar-toggler").hasClass('collapsed') === false){
        $(".navbar-toggler").trigger('click')
    }
  }





  


  

  function getUsers(){
    $('#users-table').DataTable().clear().destroy();
    collapseNav()
    $.ajax({
        type: 'POST',
    
        url: 'php/users.php',
        data: {action:'get'},
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            console.log(data.users.length);
            
            if (data.users.length > 0){
                users = data.users;
                
            }
        }

    }).then((result) => {
        userPop();  
    }).catch((err) => {
        
    });; //END AJAX
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


  function saveUser(){
    $(".user-error").text('');
    $(".user-input").removeClass('is-invalid is-valid');
    if (checkUserForm()){
        var form = $("#userForm").serialize();
        form += "&action=post";
        console.log(form);

        $.ajax({
            type: 'POST',
        
            url: 'php/users.php',
            data: form,
            crossDomain: true,
            dataType: 'json',
            success: function(data) {
               if (data.result){
                const username = $("#username").val();
                    var newUser = {userid: data.idx, username: username}
                    users.push(newUser);
                    userPop();
               }
            }
    
        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err)
        });; //END AJAX
    }
  } 

  const checkUserForm = () => {
    //form validation for creating new user
    var result = true;
    const username = $("#username").val();
    const email = $("#useremail").val();
    const password = $("#userpassword").val();
    const pwcheck = $("#passwordCheck").val();


    //validate the username
    if (username === '' || username === null || username === undefined || username.length < 4){
        $("#username").addClass('is-invalid');
        $(".name-error").text('Please fill out this field with at least 4 characters');
        result = false;
    } else {
        $("#username").addClass('is-valid');
    }

    //validate the email
    if (email === '' || email === undefined || email === null || isEmail(email) === false){
        $("#useremail").addClass('is-invalid');
        $(".email-error").text('Please enter a valid email');
        result = false;
    } else {
        $("#useremail").addClass('is-valid');
    }

    //validate the passwords
    if (password !== '' && password.length < 6){
        $("#userpassword").addClass('is-invalid');
        $(".pw-error").text('Password must be atleast 6 characters long');
        result = false;
    } else {
        $("#userpassword").addClass('is-valid');
    }

     if (password !== '' && pwcheck !== password) {
        $("#passwordCheck").addClass('is-invalid');
        $(".pwc-error").text('passwords must match');

        $("#userpassword").addClass('is-invalid');
        $(".pw-error").text('passwords must match');
        result = false;
    } else {
        $("#passwordCheck").addClass('is-valid');
    }

    return result;
  }



  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return regex.test(email);
  }