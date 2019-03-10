class Pokemon {
    constructor(name, attack, defense, health, type) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.health = health;
      this.type = type;
      this.og_health = health;
    }
    takeDamage(dmg){
        this.health = this.health - dmg < 0? 0: this.health - dmg;
    };
    attackOpponent(opnt){
        const dmg = this.attack - opnt.defense > 1? this.attack - opnt.defense: 1;
        opnt.takeDamage(dmg);
    };
    display(){
        return `${this.name.toUpperCase()} (${this.type.toUpperCase()}) ${this.health}/${this.og_health}`
    };
}