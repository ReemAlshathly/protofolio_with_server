function validateform(){  
    var name=document.myform.name.value;  
    var Message=document.myform.Message.value;
    var nameer=document.getElementById('nameerror');
    var emailerr=document.getElementById('');
    var meserr=document.getElementById('meserror');
  

    if (name==null || name==""){  
     nameer.innerHTML="Name can't be blank";  
      return false;  
    }else if( name.length < 3 || name.length > 10){  
     nameer.innerHTML="name must be at least 10 characters long and more than 3.";
     
      return false;  
      }  
    
   /* else if(url != urlExp ) {
        alert("your url falsee");  
      return false; 
    }*/
    else if(Message.length<20 ) {
     meserr.innerHTML="your message must be more than 20 character ";  
    
        return false; 
}}

/////////////////////////////////dark
var element = document.body;  
var cardark= document.getElementById('car-dark')  ;   
element.classList.toggle("dark-mode","");
cardark.classList.toggle("darkcard");
/////////////////////////////
function myFunction() {
    var element = document.body;
    
    element.classList.toggle("dark-mode");
   
 }
 ///////////////////////////
 function OnMouseIn(elem) {
    elem.style.width = "320px";
    elem.style.hight = "320px";
}
function OnMouseOut(elem) {
    elem.style.width = "";
    elem.style.hight = "";
}