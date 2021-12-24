function compute()
{
    var principal = document.getElementById("principal").value;
    //below creates alert when users doesn't enter positive
    if(principal <= 0 || ""){
       alert("Enter a number greater than 0");
       document.getElementById("principal").focus(); 
    } 

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var resultDisplay = document.getElementById("result");
     resultDisplay.innerHTML = "If you deposit  " 
    + "<span>" + principal + "</span>."  
    + ", <br> at an interest rate of "+ "<span>" 
    + rate + "</span> %." + "<br> You will receive an amount of " 
    + "<span>" + interest + "</span>" +
    " , <br> in the year " + "<span>" 
    + year + "</span>"; 
        
    };

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

