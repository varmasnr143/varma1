function loadjson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if(xhr.readyState===4 && xhr.status == "200"){
      callback(xhr.responseText);
    }

  };
  xhr.send(null);
}

loadjson("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  educationdetails(data.education);
  technicalskills(data.Skills);
})
var left =document.querySelector(".leftchild");
function details(det) {
var image=document.createElement("img");
image.src=det.image;
left.appendChild(image);

var name =document.createElement("h3");
name.textContent=det.name;
left.appendChild(name);

var mail =document.createElement("a");
mail.href="mailto:saiganeshsgb1999@gmail.com";
mail.textContent =det.email;
left.appendChild(mail);
var Number =document.createElement("p");
Number.textContent=det.Number;
left.appendChild(Number);
var add =document.createElement("h3");
add.textContent="Address";
left.appendChild(add);
var hr=document.createElement("hr");
left.appendChild(hr);
var Address=document.createElement("p");
Address.textContent=det.Address;
left.appendChild(Address);

}
var right =document.querySelector(".rightchild");
function careerinfo(car) {

  var info=document.createElement("h3");
  info.textContent="Career Objective:";
  right.appendChild(info);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var info=document.createElement("p");
  info.textContent=car.info;
  right.appendChild(info);



}
function educationdetails(edu) {
  var info=document.createElement("h3");
  info.textContent="Educational Details :";
  right.appendChild(info);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var table1= document.createElement("table");
  table1.border="1";
  var tr1="<tr><th>institute</th><th>degree</th><th>passout</th></tr>";
  var tr2="";
  for(var i=0;i<edu.length;i++) {
    tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td></tr>"
  }
  table1.innerHTML=tr1+tr2;
  right.appendChild(table1);

}
function technicalskills(tec) {
  var info=document.createElement("h3");
  info.textContent="Technical skills:";
  right.appendChild(info);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var ul=document.createElement("ul");
  for (var i = 0; i < tec.length; i++) {
    var li= document.createElement("li");
    li.textContent=tec[i].info+";"+tec[i].details;
    ul.appendChild(li);
  }
  right.appendChild(ul);
}
