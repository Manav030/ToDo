var item=document.getElementById("todo")
function abc()
{
    // alert("button is working");
    // (item.value);

var para=document.createElement("li");
para.innerText=item.value;
document.getElementById("list").appendChild(para)

var cancel=document.createElement("button");
cancel.innerText="X";
para.setAttribute("id","listcancel");
document.getElementById("listcancel").appendChild(cancel);
cancel.setAttribute("id","btn");
btn.onclick=function()
{
    para.setAttribute("class","boom");

}
para.setAttribute("id","gone");
}