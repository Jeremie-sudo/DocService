const main = document.querySelector('.main')
const screen = document.querySelector('.screen')
const  visitor = document.querySelector("#kamelo");
const linkeds = document.querySelectorAll('.linked')
let array = ["Convertissez PDF en Word","Concevez vos supports et fiches de cours","Rédigez la clé et grille de correction de vos épreuves"]
let arrayDesc=
[
"Ce servcie consiste à convertir votre fichier PDF en ficher word modifiable.",
"C'est un grand service subdivisé en deux catégories: Concevoir un support de cours et concevoir sa fiche de cours.",
"Ce service consiste à vous rédiger la clé et grille de correction d'une épreuve que nous reçevont de vous."

]

const letterMaker = ()=>{
 const span = document.createElement("span")
 screen.appendChild(span)
 span.textContent = array[wordId][letterId]
 setTimeout(()=>{
  span.remove()
 },3000)

}

let letterId=0
let wordId = 0

 const boucle = ()=>{
  setTimeout(()=>{
       if(wordId >= array.length){
        letterId=0
        wordId=0
        boucle()

       }
    else if (letterId<array[wordId].length ){
     letterMaker()
     letterId++;
     boucle()
  }
  else{
     wordId++
     letterId=0
     setTimeout(()=>{
boucle()
 },3000)

     

  }}
  ,60)
  
}
boucle()

const changePage=(title,desc)=>{

     main.innerHTML =`
       <div class="service-more">
                <h1>${title}</h1>  
             <div class="serv-descr"> 
             ${desc}
             </div>
             <div class="how-odered"> 
                    <h2>Comment se passe la commande ?</h2>
                  <p>
                    Nous travailllons principalement avec l'application Whatsapp.
                    Une fois vous cliquez sur le boutton 'Acheter', vous allez vous 
                    rétrouvez sur notre compte Whatsapp. Vous allez parcourir
                    maintenant notre cathalogue et nous éccris si vous vous intéressé à
                    l'un de nos services.
                    Après ceci, vous aurez les Tarifs sur ce service et commencer 
                    maintenant le precesus de commande.
                  </p>
             </div>
             <button id='pay-btn'>
             <a href="https://wa.me/message/ZIKH52MPC554H1">Acheter ce service</a>
             
             </button>

       </div>

     `
  
}

 let id=""
 let desc=""
linkeds.forEach((linked)=>{
       linked.addEventListener('click',(e)=>{
            id =e.target.id
          
           if (id=='1') {
            changePage("Convertissez PDF en Word",arrayDesc[0])
           }
           else if (id=='2') {
             changePage("Concevez vos supports et fiches de cours",arrayDesc[1])
           }
            else if (id=='3') {
             changePage("Rédigez la clé et grille de correction d'une épreuve de Maths",arrayDesc[2])
           }
           
           else{
                  changePage("Service Non disponible","Veuillez revenir après")
           }
       })
       

})


const counter = async()=>{
	const data = await fetch('https://api.countapi.xyz/hit/Natihoster/visiteurs')
    const compter = await data.json()
  visitor.innerHTML+=compter.value;
   

}
counter();

