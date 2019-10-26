class Arena { 
    constructor(name) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiators = [] ; 
    
    }
    addGladiator(gladiator){
        if(this.gladiators.length < 2){
          this.gladiators.push(gladiator)
        } else {
          console.log("you can NOT have more thean two Arena!")
        }
      }
    
    
    fight() {
        const [gladiator1, gladiator2] = this.gladiators
        const [weapon1, weapon2] = [gladiator1.weapon, gladiator2.weapon]
    
        if(weapon1 === "spear"){  // If gladiator1's weapon is a spear...
          switch(weapon2){  // ...compare to gladiator2's weapon
                case "spear":
                this.gladiators = [] 
                 break
                case "club":
                this.gladiators.pop()
                break
                case "trident":
                this.gladiators.shift() 
          }
        } else if(weapon1 === "club"){
          switch(weapon2){
               case "spear":
               this.gladiators.shift()
               break
               case "club":
               this.gladiators = []
               break
              case "trident":
              this.gladiators.pop()
          }
        } else if(weapon1 === "trident"){
          switch(weapon2){
               case "spear":
               this.gladiators.pop()
               break
               case "club":
               this.gladiators.shift()
               break
               case "trident":
              this.gladiators = []
          }
        }
      } } 