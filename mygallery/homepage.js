function validate_name(uname){
	if(uname.value.length==0){
		alert("shouldn't be empty");
		uname.focus();
	}	
}

function validate_mobile(umob){
	var next=document.formtosubmit.email;
	if(umob.value.length==0 || umob>10){
		alert("enter valid mobile number");
		umbo.focus();
	}else{
		next.focus();
	}
}

function  validate_email(uemail){
	var letter=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!uemail.value.match(letter)){
		alert("please enter the correct email id");
		uemail.focus();
	} 
}

function validate(ugender){
	if(ugender.value="Default"){
		alert("please select the gender");
		ugender.focus();
	}
}