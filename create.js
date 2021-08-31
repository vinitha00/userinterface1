function create(){
  var fname = document.getElementById("fname").value;
  var eid = document.getElementById("eid").value;
  var ecountry = document.getElementById("ecountry").value;
  if(document.getElementById("fname").value.length == 0)
{
    alert("Enter valued name")
}
if(document.getElementById("eid").value.length == 0)
{
    alert("Enter valued Id")
}
if(document.getElementById("ecountry").value.length == 0)
{
    alert("Enter valued country")
}

  var table = document.getElementsByTagName('table')[0];
  var row = table.insertRow(7);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = fname;
  cell2.innerHTML = eid;
  cell3.innerHTML = ecountry;
  
 
 
};
