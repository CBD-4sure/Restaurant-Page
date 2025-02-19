import pic from "./img.png"
export function menu(){
    const content = document.getElementById('content');
    content.innerHTML = ""
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')

    div1.innerHTML = "<h1> Menu page</h1> "
    const p = document.createElement('img')
    p.src = pic
    div2.appendChild(p)

    content.appendChild(div1);
    content.appendChild(div2);

}