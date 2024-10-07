
// function defination
  const loadCatagoryBtn = ()=>{
        fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(loadCatagoryResponse => loadCatagoryResponse.json())
        .then(loadCatagoryData => showCatagoryBtn(loadCatagoryData.categories) )
        .catch(err => console.log(err))
  }



  const loadVedios = () =>{
      fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
      .then(getVedios => getVedios.json())
      .then(getVedioData => showVedios(getVedioData.videos))
      .catch(err => console.log(err))
      
  }


  const catagoryBased = (catagoryId) =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${catagoryId}`)
    .then(catagoryBasedVedios => catagoryBasedVedios.json())


    .then(catagoryBasedData => {

      const activeBtn = document.getElementById(catagoryId);

         if(activeBtn.classList.add('active') === true){
          activeBtn.classList.remove('active')

         }else{

           activeBtn.classList.add('active')
         }
      
      showVedios(catagoryBasedData.category)
    })
    .catch(err => console.error(err))

  }




  // function declare

  loadCatagoryBtn();
  loadVedios();
  catagoryBased()









  // arry iteration section


  
  
  const  showCatagoryBtn = (showCatagoryBtn)=>{
    const catagoryBtnSection =  document.getElementById('catagory_btns');


    showCatagoryBtn.forEach(catagory => {
       
                

                  const DynamicCatagoryBtn =  document.createElement('div');
                  DynamicCatagoryBtn.innerHTML = `<button   id="${catagory.category_id}" class = "btn catagory ml-4 mt-8 mb-10" onclick = "catagoryBased(${catagory.category_id})"> ${catagory.category}  </button>`


                catagoryBtnSection.append(DynamicCatagoryBtn)


     });
            
    
       }

       const showVedios = (videos) => {



        const cardSection = document.getElementById('dynamic_cards');
        cardSection.innerHTML = ''

        
              videos.forEach(video => {
          
                  const card = document.createElement('div');
                  card.innerHTML = 
                   `
                   <div class="card bg-base-100 w-full shadow-xl">
  <figure>
    <img  class = "w-full h-40"
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                   
                   
                   `   ;
                   
      cardSection.append(card)             
                
              });
       }








