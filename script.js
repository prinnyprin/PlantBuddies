///SIDEBAR//
let sidebarItems = document.querySelectorAll(".sidebar-item");
sidebarItems.forEach((item) =>{
    item.addEventListener("click", ()=>{
        let curr = document.querySelector(".side-curr");
        curr.classList.remove("side-curr");
        item.classList.add("side-curr");
    });
});

//SITTER-QUIZ//
let dropInBtn = document.querySelector("#dropIn-btn");
dropInBtn.addEventListener("click", () =>{
    let inputDrop = document.querySelector("#dropIn");
    inputDrop.checked = true;
});
