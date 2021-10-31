document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".type").onclick = Testregistration;
 })
    function Testregistration(){
    var Name= document.querySelector("#name").value;
    var User= document.querySelector("#username").value;
    var Pass= document.querySelector("#pass").value;
    var Passtoo = document.querySelector("#passtoo").value;
    var Mail= document.querySelector("#email").value;
    
    
    var warning_1 = "Vui lòng nhập họ tên";
    var warning_2 = "Vui lòng điền tên tài khoản";
    var warning_201 = "Vui lòng nhập đủ 8 ký tự";
    var warning_3 = "Vui lòng nhập mật khẩu";
    var warning_4 = "Vui lòng nhập lại mật khẩu";
    var warning_401 = "Mật khẩu không trùng khớp";
    var warning_5 = "Vui lòng điền email";
    var warning_501 = "Email không hợp lệ";
    if(Name ==""){
        document.querySelector("#warning_1").innerHTML = warning_1;
    }
        else document.querySelector("#warning_1").innerHTML = "Ok!!!";
    if(User == ""){
        document.querySelector("#warning_2").innerHTML = warning_2;
    }
    else if(User<8){
        document.querySelector("#warning_2").innerHTML = warning_201;
    }
        else document.querySelector("#warning_2").innerHTML = "Ok!!!";
    if(Pass == ""){
        document.querySelector("#warning_3").innerHTML = warning_3;
    }
        else document.querySelector("#warning_3").innerHTML = "Ok!!!";
    if(Passtoo==""){
        document.querySelector("#warning_4").innerHTML = warning_4;
    }
    else if(Passtoo!==Pass){
        document.querySelector("#warning_4").innerHTML = warning_401;
    }
        else document.querySelector("#warning_4").innerHTML = "Ok!!!";
    if(Mail==""){
        document.querySelector("#warning_5").innerHTML = warning_5;
    }
    else if (email === false){
    document.querySelector("#warning_5").innerHTML = "Email không hợp lệ ! Vui lòng kiểm tra lại!!!";
    }
        else document.querySelector("#warning_5").innerHTML = "Ok!!!";
}