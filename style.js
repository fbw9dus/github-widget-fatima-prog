class myglobal{
constructor(){
    this.button = document.querySelector("button");
    this.button.addEventListener("click",this.getData.bind(this));
  this.user =document.querySelector(".user")
} 
    
    async getData() {
        let value = this.user.value
        
        var userName = document.querySelector(".form-control");
         await fetch(`https://api.github.com/users/${value}/repos`)
        .then(data => data.json())
         .then(e => {
          console.log(e); // JSON data parsed by `response.json()` call
          
          $("#liste").empty();

          for(let i = 0; i< e.length; i++){
             
              var newListe=`
              <a href="${e[i].html_url}" target="_blank">
              <div> <li class="list-group-item text-white bg-dark">${e[i].name}<span class="spandes">${e[i].created_at.slice(8,10)}.${e[i].created_at.slice(5,7)}.${e[i].created_at.slice(0,4)}</span></li>
              <span class="list-group-item text-white bg-dark" >${e[i].description}</span><br>
              </div> </a>
          
            `
           
              document.querySelector("#liste").insertAdjacentHTML('afterbegin',newListe)
           
          }
        });
        
    }




}

new myglobal()
