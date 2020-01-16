//console.log(sessionStorage.firstName);
console.log(sessionStorage.DOB);
document.getElementById("data").innerHTML = "<tr><td>" +sessionStorage.firstName + "</td><td> " + sessionStorage.lastName + "</td><td>" + sessionStorage.DOB + "</td><td>" + sessionStorage.email +" </td><td>" + sessionStorage.password + "</td><td> " + sessionStorage.phoneNo +"</td></tr>" ;