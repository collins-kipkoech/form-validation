function validate(){
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    if(fname == ""){
        alert("please enter your first name");
        return false;
    }else if(lname == ""){
        
        alert("please enter your last name");
        return false;
    }
    else {
        return true;
    }
}