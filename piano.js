for (var i = 0; i < document.querySelectorAll(".piano").length; i++) {
    
    document.querySelectorAll(".piano")[i].addEventListener("click", handleClick );
    function handleClick(){
       var buttonInnerHTML = this.innerHTML;
   
       switch (buttonInnerHTML) {
           case "q":
               var c3 = new Audio("/sounds/c3.mp3");
               c3.play();
               break;
           
           case "w":
               var tom2 = new Audio("/sounds/d3.mp3");
               tom2.play();
               break;
   
           case "e":
               var tom3 = new Audio("/sounds/e3.mp3");
               tom3.play();
               break;    
   
           case "r":
               var snare = new Audio("/sounds/f3.mp3");
               snare.play();
               break;
   
           case "t":
               var kickBass = new Audio("/sounds/g3.mp3");
               kickBass.play();
               break;
   
           case "y":
               var tom4 = new Audio("/sounds/a4.mp3");
               tom4.play();
               break;
   
            case "u":
               var tom1 = new Audio("/sounds/b4.mp3");
               tom1.play();
               break;

            case "i":
                var tom1 = new Audio("/sounds/c4.mp3");
                tom1.play();
                break;
           default: console.log(buttonInnerHTML)
       }}        
   
   
   
   
   }
   // document.addEventListener("keydown", function(event){
   //     pressedKey(event.key);});
   // function pressedKey(key){
       document.onkeydown = (event) => {
        switch (event.key) {
            case "q":
                var c3 = new Audio("/sounds/c3.mp3");
                c3.play();
                break;
            
            case "w":
                var tom2 = new Audio("/sounds/d3.mp3");
                tom2.play();
                break;
    
            case "e":
                var tom3 = new Audio("/sounds/e3.mp3");
                tom3.play();
                break;    
    
            case "r":
                var snare = new Audio("/sounds/f3.mp3");
                snare.play();
                break;
    
            case "t":
                var kickBass = new Audio("/sounds/g3.mp3");
                kickBass.play();
                break;
    
            case "y":
                var tom4 = new Audio("/sounds/a4.mp3");
                tom4.play();
                break;
    
             case "u":
                var tom1 = new Audio("/sounds/b4.mp3");
                tom1.play();
                break;
 
             case "i":
                 var tom1 = new Audio("/sounds/c4.mp3");
                 tom1.play();
                 break;
            default: console.log(event)
        }}        
   // function HouseKeeper(name,age,yearsOfExperience ,cleaningRepetoire){
   //     this.name = name;
   //     this.age = age;
   //     this.yearsOfExperience = yearsOfExperience;
   //     this.cleaningRepetoire = cleaningRepetoire;
   //     this.clean = function cleanHouse(){
   //         alert("cleaning in progress");
   //     }
   // }
   
   // var houseKeeper1 = new HouseKeeper("jane", 19, 12, ["English", "French"] );