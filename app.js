let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = [".com", ".net", ".org"]
let dominios = []
const button = document.getElementById("boton");

function generarDominio (a,b,c,d) {
    let dominio = []
    for (let i = 0; i < a.length; i++) {
        dominio[0] = a[i]  
        for (let j = 0; j < b.length; j++) {
            dominio[1] = b[j]
            for (let k = 0; k < c.length; k++) {
                dominio[2] = c[k]
                for (let l = 0; l < d.length; l++) {
                    dominio[3] = d[l]
                    dominios.push(dominio[0] + dominio[1] + dominio[2] + dominio[3])
                }
            }   
        }
    }
}
generarDominio(pronoun, adj, noun, extension)
console.log(dominios)

button.addEventListener("click", function clickBoton () {
    generarDominio(pronoun, adj, noun, extension)
    document.getElementById("nombreDominio").innerHTML = dominios[Math.floor(Math.random() * dominios.length)]
})
