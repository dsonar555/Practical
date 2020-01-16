
document.getElementById('submit-btn').addEventListener("click",validate);

function validate()
{
    sessionStorage.DOB=formId.day.value+ "-"+ formId.month.value+ "- "+ formId.year.value;
    sessionStorage.phoneNo=formId.phoneNo.value;
    pattern=/^[A-z]*$/;
    console.log(pattern.test(formId.firstName.value));
    if(!pattern.test(formId.firstName.value))
    {
        alert("First Name should contain only alphabets.");
    }
    else{
        sessionStorage.firstName=formId.firstName.value;
    }
    if(!pattern.test(formId.lastName.value))
    {
        alert("Last Name should contain only alphabets.");
    }
    else{
        sessionStorage.lastName=formId.lastName.value;
    }
    //pattern=/^[A-z0-9.-_]{3,}\@[A-z]{2,6}+\.[A-z]{2,5}$/;
    pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if( !pattern.test(formId.email.value) )
    {
        alert("Enter email address and re-type field should be same.");
        if( formId.email.value != formId.re-typeEmail.value )
        {
            alert("enter the same email in retype field.");
        }
    }
    else
    {
        sessionStorage.email=formId.email.value;
    }
    pattern=/^[A-z0-9]{8,}$/;
    if( !pattern.test( formId.password.value) )
    {
        alert("Password should contain atleast one number.");
        if( formId.password.value != formId.re-typePasssword.value )
        {
            alert("enter the same password in retype field.");
        }
    }
    else{
        sessionStorage.password=formId.password.value;
    }
    // location.replace("information.html");
    // console.log(formId.firstName.value);
    //sessionStorage.fname=formId.firstName.value;
}