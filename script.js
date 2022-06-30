const select = document.querySelector("select");
const option = document.createElement("option");
const option2 = document.createElement("option");
const sections = document.querySelectorAll(".sections");

option.textContent = "left"
option2.textContent = "right"

select.append(option);
select.append(option2);

select.addEventListener("change", ()=>{
    sections.forEach(item =>{
        if(select.value === "left"){
            console.log("left")
            item.classList.toggle("right")
            item.classList.toggle("left")
        }
        if(select.value === "right"){
            console.log("right")
            item.classList.toggle("right")
            item.classList.toggle("left")
        }
    })
})

