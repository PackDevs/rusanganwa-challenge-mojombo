
const main=document.querySelector("body")


const photos=(src,name)=>{

    const card=`
    
    <div class="main">

    <div class="image">
   
      <img  src=${src}>

    </div>
    <div class="midle">
    
     <a href="#">${name}</a><br><br>
     <p>our Equibrium collection<br> promotes balance and calm</p><br>
     <div class="one">1</div>
     
     <br>
     
     
     <br><br>


    </div>
   
    <div class="line"><hr></div>
    <div class="last">
    
      <img  src=${src}>
  </div>
  <div class="link">
        ${name}
      <a href="#"> ${name}</a>

  </div>

  </div>   `

  main.innerHTML+=card;
}
const res=fetch("https://api.github.com/users")
    
.then(res=>res.json())
.then(data=>{
 console.log(data)
 data.map(item=>{
     photos(item.avatar_url,item.login)
     
 })
})