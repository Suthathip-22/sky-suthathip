for(let i=0;i<30;i++){

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.style.position="fixed";
petal.style.left=Math.random()*100+"vw";
petal.style.top="-20px";

petal.style.fontSize=
(Math.random()*20+15)+"px";

petal.style.animation=
`fall ${Math.random()*8+5}s linear infinite`;

document.body.appendChild(petal);

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(-50px); '
}
100%{
transform:translateY(110vh);
}
}
`;

document.head.appendChild(style);
