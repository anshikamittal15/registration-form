var row=1;
var submit=document.getElementById("submit");
submit.addEventListener("click",displaydetails);

function displaydetails(){
var name=document.getElementById("name").value;
var id=document.getElementById("id").value;
var department=document.getElementById("department").value;
var address=document.getElementById("address").value;
var email=document.getElementById("email").value;

if(!name||!id||!department||!address||!email){
    alert("Please fill all the details!");
    return;
}
var display=document.getElementById("display");
var newRow= display.insertRow(row);
var cell1= newRow.insertCell(0); 
var cell2= newRow.insertCell(1); 
var cell3= newRow.insertCell(2); 
var cell4= newRow.insertCell(3); 
var cell5= newRow.insertCell(4); 

cell1.innerHTML=name;
cell2.innerHTML=id;
cell3.innerHTML=department;
cell4.innerHTML=address;
cell5.innerHTML=email;

row++;
}
