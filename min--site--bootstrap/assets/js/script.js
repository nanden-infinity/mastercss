import { api } from "./apis.js";
const container = document.querySelector(".wrapper--cards");
async function getAPI(date) {
    const items = await (await fetch(date)).json()
  const {results} = items

  results.map(async({url}) =>{
      const AllImgaes = await (await fetch(url)).json()
      const {
        name,
        sprites: { front_default },
        stats,
      } = AllImgaes;
      console.log(front_default);
     
        container.innerHTML += `
            <h1 class="destaque-h1">THE MOST POPULAR</h1>
        <div class="card--01 card--default p-2">
          <div class="box--image">
            <img class="img-pok" src="${front_default}"  alt="">
          </div>

          <div class="content-text">
            <div class="info-mal">
              <p class="text-p">New</p>
              <p class="text-p">Sale</p>
              <p class="text-p">Hot</p>
            </div>
            <h2>${name}</h2>
            <p>Pokemon mais carro da loja <br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis quos rerum.</p>
            <a href="#">Find more</a>
          </div>
          <button class="btn--vamos">Comprar</button>
        </div>
        `;
   
      stats.map((el) =>{
    
        const { base_stat, effort, stat:{name:nome} } = el;
        
      })
  })

}



getAPI(api)
