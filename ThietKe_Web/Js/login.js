        document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".login_1").onclick = Testlogin;
 })
    function Testlogin(){
    var Login= document.querySelector("#username").value;
    var Pass = document.querySelector("#password").value;
    
    var warning_1 = "Vui lòng điền tên tài khoản";
    var warning_2 = "Vui lòng nhập mật khẩu";
    if(Login == ""){
        document.querySelector("#warning_1").innerHTML = warning_1;
    }
        else document.querySelector("#warning_1").innerHTML = "Ok!!!"
    if(Pass==""){
        document.querySelector("#warning_2").innerHTML = warning_2;
    }
    else document.querySelector("#warning_2").innerHTML = "Ok!!!"
    }