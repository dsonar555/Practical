if(sessionStorage.getItem('students') == null)
{
    var students=new Array();
    sessionStorage.setItem('students',JSON.stringify(students));
}

function validate(name,maths,english,passingYear)
{
    if(name == "" || maths == "" || english =="" || passingYear =="")
    {
        alert("All fields are mandatory");
        return false;
    }
    // maths=parseInt( maths );
    // english=parseInt( english );
    // passingYear=parseInt( passingYear );
    pattern=/^[A-z]*$/;
    if(!pattern.test(name))
    {
        alert("Enter valid name");
        return false;
    }
    if( maths <= 1 || maths>=100 )
    {
        alert("enter marks between 1 to 100");
        return false;
    }
    if( english <=1 || english>= 100 )
    {
        alert("enter marks between 1 to 100");
        return false;
    }
    if(passingYear <= 2000 || passingYear>= 2020)
    {
        alert("enter valid passing year");
        return false;
    }
    return true;
}

class studentInfo
{
    constructor(name,maths,english,passingYear)
    {   
        this.name=name;
        this.maths=maths;
        this.english=english;
        this.passingYear=passingYear;
        this.calculateAverage();
        this.currentCreationTime();
    }
    calculateAverage()
    {
        this.average = ( this.maths+this.english ) / 2;
    }
    currentCreationTime()
    {
        this.creationTime=new Date();
    }
}
var allStudents=JSON.parse(sessionStorage.students);
function addStudent()
{
    var name=info.name.value;
    var maths=info.maths.value;
    var english= info.english.value ;
    var passingYear=info.passingYear.value;
    if(validate(name,maths,english,passingYear))
    {
        student = new studentInfo(name,parseInt( maths ),parseInt( english ),parseInt( passingYear) );
        console.log(student);
        allStudents.push(student);
        sessionStorage.students=JSON.stringify(allStudents);
    }
    else 
      return false;
}
showStudentsInfo();

function showStudentsInfo()
{
    var allStudents=JSON.parse(sessionStorage.students);
    for(var i = 0; i< allStudents.length; i ++)
    {
        var row= data.insertRow();
        var cell1=row.insertCell();
        var cell2=row.insertCell();
        var cell3=row.insertCell();
        var cell4=row.insertCell();
        var cell5=row.insertCell();
        var cell6=row.insertCell();
        var cell7=row.insertCell();
        cell1.innerHTML = i+1;
        cell2.innerHTML = allStudents[i].name;
        cell3.innerHTML = allStudents[i].maths;
        cell4.innerHTML = allStudents[i].english;
        cell5.innerHTML = allStudents[i].average;
        cell6.innerHTML = allStudents[i].passingYear;
        cell7.innerHTML = allStudents[i].creationTime;
    }    
}