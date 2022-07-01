const select = document.querySelector("select");
const left = document.createElement("option");
const right = document.createElement("option");
const horizontal = document.createElement("option");
const sections = document.querySelectorAll(".sections");

left.textContent = "left";
right.textContent = "right";
horizontal.textContent = "horizontal";

select.append(left, right, horizontal);

const condition = (select, item, option, option2, option3) => {
    if(select.value === option){
        item.classList.add(option);
        item.classList.remove(option2, option3);
    }
}

select.addEventListener("change", ()=>{
    sections.forEach(item =>{
        condition(select, item, "right", "left", "horizontal");
        condition(select, item, "left", "right", "horizontal");
        condition(select, item, "horizontal", "left", "right");
    });
});
