const vardi=['Jana Krūmiņa','Jana Bēŗziņa','Dace'];
const balvas=['Dators','Ledusskapis','Tālrunis','Auto'];
const naudaKopa=100000;//kopeja summa
let uzvaretajuSkaits=5;
for(let i=0;i<5;i++){
let rand= Math.random()*vardi.length;
rand= Math.floor(rand);//noapaļo uz leju
console.log(vardi[rand]);//izvada konsolē
}