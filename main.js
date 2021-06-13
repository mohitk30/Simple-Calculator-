 function button_clicked(char) {

     var output = document.getElementById("input-output");
     output.textContent = char;
     op1 = 0;;
     count = 0;
     O1 = 0;
     O2 = 0;
     O3 = 0;
     O4 = 0;
     O5 = 0;
     nvari = "";
     nvar = "";
     res = 0;

 }
 // function clear() {

 //     var output = document.getElementById("input-output");
 //     output.innerText = space;




 // }
 var op1;
 var count = 0;
 var O1 = 0;
 var O2 = 0;
 var O3 = 0;
 var O4 = 0;
 var O5 = 0;


 function button_clickedO1(char) {
     if (count == 0) {

         var output = document.getElementById("input-output");
         output.textContent = char;
         op1 = nvar;
         nvar = "";
         O1 = 1;
         count = 1;
     } else {
         alert("please press = first");
     }

 }

 function button_clickedO2(char) {
     if (count == 0) {
         var output = document.getElementById("input-output");
         output.textContent = char;
         op1 = nvar;
         nvar = "";
         O2 = 1;
         count = 1;
     } else {
         alert("please press = first");
     }


 }

 function button_clickedO3(char) {
     if (count == 0) {
         var output = document.getElementById("input-output");
         output.textContent = char;
         op1 = nvar;
         nvar = "";
         O3 = 1
         count = 1;
     } else {
         alert("please press = first");
     }


 }

 function button_clickedO4(char) {
     if (count == 0) {
         var output = document.getElementById("input-output");
         output.textContent = char;
         op1 = nvar;
         nvar = "";
         O4 = 1
         count = 1;
     } else {
         alert("please press = first");
     }


 }



 function button_clickedO5(char) {
     if (count == 0) {
         var output = document.getElementById("input-output");
         output.textContent = char;
         op1 = nvar;
         nvar = "";
         O5 = 1
         count = 1;
     } else {
         alert("please press = first");
     }


 }




 var nvari = "";
 var nvar = "";

 function button_clickedN(char) {

     nvar = nvar + char;
     var output = document.getElementById("input-output");
     output.textContent = nvar;




 }




 var res;

 function button_clickedE() {
     console.log(parseFloat(nvar));
     console.log(parseFloat(nvari));
     if (O1 == 1) {
         res = parseFloat(op1) + parseFloat(nvar);

     } else if (O2 == 1) {
         res = parseFloat(op1) - parseFloat(nvar);

     } else if (O3 == 1) {
         res = parseFloat(op1) * parseFloat(nvar);

     } else if (O4 == 1) {
         res = parseFloat(op1) / parseFloat(nvar);

     } else if (O5 == 1) {
         res = parseFloat(op1) % parseFloat(nvar);

     }

     var output = document.getElementById("input-output");
     output.textContent = parseFloat(res);
     count = 0;
     nvar = "";

     O1 = 0;
     O2 = 0;
     O3 = 0;
     O4 = 0;
     O5 = 0;

 }