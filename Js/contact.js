document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#sbm").onclick = Kiemtra;})
    function Kiemtra(){
        var name = document.querySelector("#name").value;
        if(name == "") document.querySelector("#thongbao").innerHTML = "Bạn không được để trống Name";
        var email = document.querySelector("#email").value;
        if(email == "") document.querySelector("#thongbao").innerHTML = "Bạn không được để trống Email";
        var subject = document.querySelector("#subject").value;
        if(subject == "") document.querySelector("#thongbao").innerHTML = "Bạn không được để trống Subject";
        var massage = document.querySelector("#massage").value;
        if(massage == "") document.querySelector("#thongbao").innerHTML = "Bạn không được để trống câu trả lời";

        if( name !=="" && email !=="" && subject !=="" && massage !=="" && (filter.test(email) === true) ) document.querySelector("#thongbao").innerHTML = "Cảm ơn câu trả lời của bạn, đội ngũ FreeCODE sẽ phản hồi bạn trong thời gian sớm nhất ^^";
    }