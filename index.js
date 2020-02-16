var showpic = document.getElementById("slideshowimgcontainer");

var accowords = document.getElementById("accowords");
var next = document.getElementById("go");
var back = document.getElementById("back");
var favshowlist=["izombie","sexed","janethevirgin","breakingbad","mrrobot","policestory","you"]
var wheretheshowpicr = "favmovie"
var i=0;
var w=0;





go.addEventListener("click",()=>{
    
    
    
    
    if(i<favshowlist.length){
        console.log(i)
    
    showpic.style.backgroundImage=`url(./${wheretheshowpicr}/${favshowlist[i]}.jpg)`;

    
    i++;
    console.log(i)
    
    }
    else if(i==favshowlist.length){
        console.log("reset")
        i= 0;
        console.log(i)
        
        showpic.style.backgroundImage="url(./favmovie/lucifier.jpg)";
        
       
        
    }
    
})

back.addEventListener("click",()=>{
    
    i--;
    console.log(i)
    if(i>=0){
        showpic.style.backgroundImage=`url(./${wheretheshowpicr}/${favshowlist[i]}.jpg)`;
        console.log(i)
        console.log("change")

    }
    else if(i==0){
        showpic.style.backgroundImage="url(./favmovie/lucifier.jpg)";
    }
    else if(i<0){
        i=favshowlist.length;
        console.log(i)
        showpic.style.backgroundImage="url(./favmovie/lucifier.jpg)";
    

    }
    
})


//srolldown
var setting= document.getElementById("setting");
setting.addEventListener("click",()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


//portfolio

var portfoliobox = document.getElementsByClassName("portfolio")
var portfolioclick = document.getElementsByClassName("modalcontainer")
var mask = document.getElementById("modalbackgrond");
var closebuu = document.getElementsByClassName("closebuttmodal");


console.log(portfoliobox)


for(let i=0; i<portfoliobox.length; i++){
    portfoliobox[i].addEventListener("mouseover",()=>{
        console.log("jijji");
        console.log(portfoliobox[i].firstChild.nextSibling.id)
        
        console.log(portfoliobox[i].lastChild.previousSibling)
        let mask = portfoliobox[i].lastChild.previousSibling;
        console.log(mask.textContent)
       console.log( mask.firstChild.textContent)
       mask.firstChild.textContent=portfoliobox[i].firstChild.nextSibling.id;
        
       mask.style.display="grid";
       

        
        

    })
    portfoliobox[i].addEventListener("mouseout",()=>{
        
        
       
        let mask = portfoliobox[i].lastChild.previousSibling;
        
       mask.firstChild.textContent=portfoliobox[i].firstChild.nextSibling.id;
        
       mask.style.display="none";
       

        
        

    })
    portfoliobox[i].addEventListener("click",()=>{
        document.body.classList.add("stop-scrolling");
        portfolioclick[i].classList.add("active");
        
        setting.style.display="none";
        console.log(setting)
        
        setTimeout(function(){portfolioclick[i].classList.add("smaller")  }, 40);
        
        
        mask.style.display="block";
        closebuu[i].addEventListener("click",()=>{
            portfolioclick[i].classList.remove("smaller")
           

    
            portfolioclick[i].classList.remove("active")
            mask.style.display="none";
            document.body.classList.remove("stop-scrolling")
            setting.style.display="block";
            
            console.log(setting)
           
            console.log("butt")
        })


    })

}




//intro
var introaccor = document.getElementsByClassName("acco");
var intr = document.getElementsByClassName("intro");

for (let i=0 ; i<introaccor.length; i++){
    intr[i].addEventListener("click",()=>{
        if(introaccor[i].style.maxHeight){
            introaccor[i].style.maxHeight =null;

        }
        else{
            introaccor[i].style.maxHeight= introaccor[i].scrollHeight+"px"

        }
        
    })
}




   



