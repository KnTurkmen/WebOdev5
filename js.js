const sayacCerceve = document.querySelector(".sayac-cerceve")
const isiklar = document.querySelectorAll(".isik")
const hIsiklar = document.querySelectorAll(".isik-p")
const butonlar = document.querySelectorAll(".button-isik")

const renkler = ['rgba(221, 60, 60)', 'rgba(219, 153, 55)', 'rgba(68, 181, 50)']
const yazilar = ['DUR', 'HAZIR', 'GEÇ']
const zaman = [5,2,5]
const hRenkler = ['rgba(221, 60, 60)', 'rgba(68, 181, 50)']

let sayac = 0
let guncelIndex = 0
let saydir

function init(){
  isiklar.forEach((isik, index)=>{
    isik.style.setProperty('--isik-color',  renkler[index])
  })

  hIsiklar.forEach((isik, index)=>{
    isik.style.setProperty('--isik-color',  hRenkler[index])
    isik.style.setProperty("fill",  hRenkler[index])
  })
  
  butonlar.forEach((btn, index)=>{
    btn.addEventListener("click", () => {
      clearInterval(saydir)
      guncelIndex=index
      sayac=0
      iskIntervaliBasla()
    })
  })

  iskIntervaliBasla()
}

init()

function  iskIntervaliBasla(){
  isiklariSifirla()
  isiklandir(guncelIndex)
  hIsık()
  saydir = setInterval(()=>{
    if(sayac==0){
      guncelIndex = (guncelIndex + 1) % 3
      sayac=zaman[guncelIndex]
      hIsık()
      isiklariSifirla()
      isiklandir(guncelIndex)
    }
    sayac--
    sayacCerceve.innerText=sayac
  }, 1000)
}

function hIsık(){
  if(guncelIndex==0){
    hIsıkSifirla(0)
    hIsiklandir(1)
  } else {
    hIsıkSifirla(1)
    hIsiklandir(0)
  }
}

function hIsıkSifirla(index){
  hIsiklar[index].style.opacity = 0.3;
  hIsiklar[index].style.zIndex = 0;
  hIsiklar[index].style.boxShadow = "none";
  hIsiklar[index].style.setProperty("fill",  hRenkler[index])
}

function hIsiklandir(index){
  hIsiklar[index].style.setProperty("fill",  "white")
  hIsiklar[index].style.opacity = 1;
  hIsiklar[index].style.zIndex = 1;
  hIsiklar[index].style.boxShadow = "0 0 50px 10px var(--isik-color)";
}

function isiklariSifirla() {
  isiklar.forEach((isik) => {
    isik.style.opacity = 0.3;
    isik.style.zIndex = 0;
    isik.style.boxShadow = "none";
    isik.innerText="";
  });
  butonlar.forEach((btn)=>{
    btn.style.backgroundColor='#fff'
  })
}

function isiklandir(index){
  isiklar[index].style.opacity = 1;
  isiklar[index].style.zIndex = 1;
  isiklar[index].style.boxShadow = "0 0 50px 10px var(--isik-color)";
  isiklar[index].innerText=yazilar[index];
  butonlar[index].style.backgroundColor=renkler[index]
};