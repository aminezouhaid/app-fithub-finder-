
const urlApi = "https://api.github.com/users/"
const repos = "/repos"


  const contaner = document.querySelector("#contaner")
  const btn = document.querySelector("#btn")
  const view = document.querySelector("#view")
  const view1 = document.querySelector("#view h2")
  const img = document.querySelector("#avatar_url")


contaner.btn= '';
data=""

 
                     async function getva(username){
                      
                        const response1 = await  fetch(urlApi +username  )
                        const data1 = await response1.json()
                        console.log(data1.login)
                        view1.innerHTML =data1.login

                        img.src=data1.avatar_url
                       

                      
                      const response = await  fetch(urlApi +username + repos )
                        const data = await response.json()
                        
                        
                        for (let i = 0; i < data.length; i++){
                
                          view.innerHTML +=`<ul><li> NAME REPOS : ${data[i].name}</li></ul>`
                         
                        }
                        













                        // for(const val of data){
                         
                        //   console.log(val.name)
                          
                        //   view.innerHTML += val.name

                        // }
                        
                        // data.forEach( loop => {

                        //   console.log(loop.name);

                        //   view.innerHTML+= loop.name;
                          
                        // }); 





















                        // async function getinfo(){
//     const repo = await fetch("https://api.github.com/users/zakaria444/repos")
//     const data = await repo.json()
//     console.log(data)
//     document.querySelector("#contaner h1").innerHTML = data.login
//     document.querySelector("#contaner img").src=data.avatar_url
//      document.querySelector("#contaner h2").src=data[0]


   
// }  
// const api =fetch(`${urlApi} ${value}`)
//   .then(resp => resp.json())
//   .then(json => console.log(json));
// getinfo()
                        
                        
                        
                        // getva(e)

                      }
                      

 
                      // contaner.innerHTML = 
                      
                      // `<input type="search"  style="" class="form-control me-sm-2" placeholder="Search" onchange="getva(this.value)" >  </input>`;
                      // btn.innerHTML =  `    <button> serach</button>
                      // `;


                    //   contaner.innerHTML = 
                      
                      
                    //   ` <form class="d-flex">
                    //   <input class="form-control me-sm-2" type="text" onchange="getva(this.value)"  placeholder="Search">
                    //   <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    // </form>`;
                    
                   
  
 


//smiit repo 
//must follwers
//resulta liste
//Application Programming Interface
