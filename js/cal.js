"use strict";
var ar=[],i;
function set(op) {

    document.getElementById("display").value += op;

}

function clearInput()
{
    document.getElementById("display").value="";
    
}

function up()
{   if( i>=0 || i<=(ar.length-1))
     {  
        document.getElementById("input1").value=ar[i];
        alert(ar[i]);
        i--;}
}

function down()
{
    if(i<=(ar.length) || i>=0 )
    {
        document.getElementById("input1").value=ar[i];
        alert(ar[i]);i++;}
}

function edit()
{
    if(document.getElementById("input1").disabled)
    {
        document.getElementById("input1").disabled = false;
        document.getElementById("input1").style.backgroundColor = "#8ba0dd";
        document.getElementById("input1").style.Color = "#ffffff";                   
    }
    else
        {
            document.getElementById("input1").style.backgroundColor = "#ffffff";
                document.getElementById("input1").disabled = true;
        }
    
}


function setOp() 
{
    alert("gf");
}

function answer() 
{
    var Exp = document.getElementById("display");
    var a=document.getElementById("input1").value;
    document.getElementById("input1").value=Exp.value;
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    Exp.value = result;
    //store
    if(Exp1!="")
    {   
        ar.push(Exp1);
        i=ar.length;
    }    
}
    


function ce() {
    var elem = document.getElementById("display").value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);
    document.getElementById("display").value = a;
  
}
