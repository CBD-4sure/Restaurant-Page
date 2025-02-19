import pic from "./img.png"
export function startup(){
    const content = document.getElementById('content');
    content.innerHTML = ""
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')

    div1.innerHTML = "<h1>Dive into Delights of Delectable Food</h1> <h4>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</h4>"
    const p = document.createElement('img')
    p.src = pic
    div2.appendChild(p)

    content.appendChild(div1);
    content.appendChild(div2);

}