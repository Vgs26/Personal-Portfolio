//-------------------about tabs
    var tablinks =document.getElementsByClassName("tab-links");
    var tabcontents =document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

//----------------------theme
    var icon=document.getElementById("icon");
    icon.onclick =function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src="images/moon.png";
        }
        else{
            icon.src="images/sun.png";
        }
    }
//-----------small screen sidemenu
    var sidemeu=document.getElementById("sidemenu");
    function openmenu(){
        sidemeu.style.left="0";
    }
    function closemenu(){
        sidemeu.style.left="-200px";
    }

