const vardi = ["Jaanis B", "Andrew Z", "Krisis A", "Ivo", "Ivanovs"];
const balva = ["Mikriņa biļete", "Ņinas bulciņa", "Bembis X5", "Lelle", "Zoom"];
const naudaKopa = 100000;//kopeja summa
let uzvaretajuSkaits = 5;//uzvarētāju skaits
let rand = Math.random() * 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';

for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random()*vardi.length;
    rand = Math.floor(rand);//noapaļo uz leju ar Math.floor

    let uzvaretajs = vardi[rand];//izvade konsolē
    rindas.innerHTML += `
<tr>
<td>${i+1}</td>
<td>${uzvaretajs}</td>
</tr>`
}