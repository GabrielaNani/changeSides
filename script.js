const select = document.querySelector("select");
const left = document.createElement("option");
const right = document.createElement("option");
const horizontal = document.createElement("option");
const sections = document.querySelectorAll(".sections");

left.textContent = "left";
right.textContent = "right";
horizontal.textContent = "horizontal";

select.append(left);
select.append(right);
select.append(horizontal);

select.addEventListener("change", ()=>{
    sections.forEach(item =>{
        if(select.value === "left"){
            item.classList.remove("right");
            item.classList.add("left");
            item.classList.remove("horizontal");
        }
        if(select.value === "right"){
            item.classList.add("right");
            item.classList.remove("left");
            item.classList.remove("horizontal");
        }
        if(select.value === "horizontal"){
            item.classList.remove("left");
            item.classList.remove("right");
            item.classList.add("horizontal");
        }
    })
})
