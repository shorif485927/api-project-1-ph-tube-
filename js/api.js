
//    load data

  const loadData = ()=>{
      fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
      .then(response => response.json() )
      .then(data => display(data.categories)      )
      .catch(err => console.log(err)
      )
  }

// button
const  display = (categories)=>{

       categories.forEach(item => {

    
          
        // creat button
        let bannerBtn = document.getElementById('banner_btn');
        let makeButtonDiv  =  document.createElement('div');
        makeButtonDiv.innerHTML =  `
              <button  class = "btn" onclick = 'catagoryVedios(${item.category_id})'>
              ${item.category}
              </button>
        `

         makeButtonDiv.className = `
            btn ml-4 mt-8    
         `
         

         bannerBtn.append(makeButtonDiv);

// item.category

        
       });
       
}

const loadVedios = () =>{
 
    
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(responseVedios => responseVedios.json())
    .then(getVedios => displayVedios(getVedios.videos))
    .catch(err => console.log(err))
}


const catagoryVedios = (id) =>{

  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then(getResponseVedios => getResponseVedios.json())
  .then(getData => displayVedios(getData.category))
  .catch(err => console.log(err))
}



/*

 "videos": [
    {
      "category_id": "1001",
      "video_id": "aaaa",
      "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
      "title": "Shape of You",
      "authors": [
        {
          "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
          "profile_name": "Olivia Mitchell",
          "verified": ""
        }
      ],
      "others": {
        "views": "100K",
        "posted_date": "16278"
      },
      "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
    },


*/

const displayVedios = (showVedios) =>{


       
  const  vedioSection =  document.getElementById('ph_tube_vedios');
  vedioSection.innerHTML = ''

         showVedios.forEach(showVedio => {


            
            const card = document.createElement('div');
             card.className = `card card-compact bg-base-100 w-full h-4/5 shadow-xl `;


            let remainingHour = parseInt(showVedio.others.posted_date / 3600) ;
          
            let remainingSecond = parseInt(showVedio.others.posted_date % 3600) ;

            let remainingMinit = parseInt(remainingSecond / 60)
            

             card.innerHTML =  
             `
            
                 <figure class = "h-[300px] relative">
    <img class = "w-full h-full  object-cover "
      src="${showVedio.thumbnail}"
      alt="Shoes" />


      
     ${showVedio.others.posted_date.length === 0 ?  "" : ` <div class=" absolute bg-black text-white p-1 right-2  bottom-2">
                ${remainingHour} hour ${remainingMinit} minit ago

                </div>`}
         
    


  </figure>



  <div class="mx-3 my-2 flex justify-between">
                <img class =" w-14 h-14  rounded-full " src="${showVedio.authors[0].profile_picture}" alt="profile picture">

                 <div class="card-details">
          <h1 class =" text-xl font-bold">  ${showVedio.title} </h1>

       <div class="varify flex">
    
          <p> ${showVedio.authors[0].profile_name}</p>

            ${showVedio.authors[0].verified === true? `<img class =" w-5 h-5 " src="https://img.icons8.com/?size=48&id=70yRC8npwT3d&format=png" alt="varification symbol">` : ""}


    </div>


         
          <p>${showVedio.others.views}</p>
    </div>
  </div> 
             `
            //  append element
             vedioSection.append(card)

         });


       
}
// call function
  loadData();
  loadVedios()

//   ! creat videos section



