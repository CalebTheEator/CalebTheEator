var secrets;
function merch(e, textarea){
    secrets = document.getElementById("credit")
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
        document.getElementById("form").style.display="none";
        document.getElementById("the-buttons").style.display="flex"
        document.getElementById("page1").style.display="block";          
        secret();
    }
}

function secret(){
    let guh = secrets.value;
    console.log(guh);
    if (guh === "secret merch"){
        // document.getElementById("form").style.display="none";
        document.getElementById("secret-category-button").style.display="block";
    }
}

function page1(){
    document.getElementById("page1").style.display="block";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="none";
    document.getElementById("page4").style.display="none";
    document.getElementById("page5").style.display="none";
    document.getElementById("secretmerch").style.display="none";
}

function page2(){
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";
    document.getElementById("page3").style.display="none";
    document.getElementById("page4").style.display="none";
    document.getElementById("page5").style.display="none";
    document.getElementById("secretmerch").style.display="none";
}

function page3(){
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="block";
    document.getElementById("page4").style.display="none";
    document.getElementById("page5").style.display="none";
    document.getElementById("secretmerch").style.display="none";
}

function page4(){
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="none";
    document.getElementById("page4").style.display="block";
    document.getElementById("page5").style.display="none";
    document.getElementById("secretmerch").style.display="none";
}

function page5(){
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="none";
    document.getElementById("page4").style.display="none";
    document.getElementById("page5").style.display="block";
    document.getElementById("secretmerch").style.display="none";
}

function secretpage(){
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="none";
    document.getElementById("page4").style.display="none";
    document.getElementById("page5").style.display="none";
    document.getElementById("secretmerch").style.display="block";
}