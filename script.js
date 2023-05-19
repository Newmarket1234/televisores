function my_function(element){
 var text=element.textContent;
alert("hola");
var length = 18;
var trimmedString = text.length > length ? 
                    text.substring(0, length - 3) + "..." : 
                    text;
element.textContent = trimmedString;
}

function reducirTamano(){
  for (const a of document.querySelectorAll(".linea")) {
    
    var text=a.textContent;
    var length = 18;
    var trimmedString = text.length > length ? 
                    text.substring(0, 21) + "..." : 
                    text;
     a.textContent = trimmedString;

  }
}

