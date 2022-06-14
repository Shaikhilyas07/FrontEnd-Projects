console.log("This is tutorial");
const students =[
    {name: "Harry", subject: "JavaScript"},
    { name: "Rohan", subject: "Machine Learning"}

    
]
// students.forEach()
function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
        
    }, 1000);
}
function getStudents(){
    setTimeout(function() {
       let str = "";
       students.forEach(function(student){
           str += `<li> ${student.name} </li>`
       });
       document.getElementById('students').innerHTML = str
       console.log("Student has beeen fetched");

        
    }, 5000);

}

let std = {name:"Sunny", subject: "Python"}
enrollStudent(std, getStudents);
// getStudents();