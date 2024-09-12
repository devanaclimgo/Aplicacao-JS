// hello world
let mensagem = 2;
console.log("hello world!");
console.log(mensagem);


// arrays, objetos
let metas = ["ana", "alô"]

console.log(metas[1] + " " + metas[0]);

let meta = {
  value: "ler um livro por mês",
  checked: false,
  isChecked: (info) => {
    console.log(info)
  }
}

meta.value = "assistir um filme todo final de semana"
meta.isChecked(meta.value)


// function // arrow function
const criarMeta = () => {}

//function criarMeta() {}