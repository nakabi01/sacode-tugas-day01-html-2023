const notescontainer = document.queryselector(".notes-container");
const createbtn = document.queryselector(".btn");
let notes = document.queryselectorAll(".input-box");

createbtn.addEvenlistener("click",()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src = "hapus.png";
    notescontainer.appendchild(inputbox).appendchild(img);
    
    })