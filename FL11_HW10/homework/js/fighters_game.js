function Fighter(profile) {

    const name = profile.name;
    let damage = profile.damage;
    let hp = profile.hp;
    let agility = profile.agility;

    let win = 0;
    let loss = 0;
    let hpTotal = 0;
    let hundred = 100;



    this.getName = () => name;

    this.getDamage = () => damage;

    this.getAgility = () => agility;

    this.getHealth = () => hp;


    function random (min, max) {
        return Math.round(min + Math.random() * (max - min));
    }


    this.dealDamage = defenderDamage => {
        if (defenderDamage > hp) {
            hp = 0;
        } else {
            hp -= defenderDamage;
        }
    }
    this.attack = defender => {
        let success = random(0, hundred);
        console.log(success);
        if (success >= defender.getAgility()) {
            defender.dealDamage(damage);
            console.log(`${name} make damage to ${defender.getName()}`)
        } else {
            console.log(`${name}  attack missed`)
        }


    }
    this.heal = (healthPoints) => {
        hp += healthPoints;
        if (hp > hpTotal) {
            hp = hpTotal;
        }

    }
    this.logCombatHistory = () => {
        console.log(`Name: ${name} , Wins: ${win}, Losses: ${loss}`);
    }

    this.addLoss = () => loss++;

    this.addWin = () => win++;
}


function battle(fighter1, fighter2) {

    let flag = true;

    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is already dead`)
    }

    if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is already dead`)
    }


    if (fighter1.getHealth() === 0) {
        fighter1.addLoss();
        fighter2.addWin();
    }

    if (fighter2.getHealth() === 0) {
        fighter2.addLoss();
        fighter1.addWin();
    }

    while (fighter1.getHealth() > 0 && fighter1.getHealth() > 0) {

        if (flag) {
            fighter1.attack(fighter2);
            flag = !flag;
        } else {
            fighter2.attack(fighter1);
            flag = !flag;
        }
    }
}


const myFighter1 = new Fighter({ name: 'John', damage: 20, hp: 100, agility: 25 });

const myFighter2 = new Fighter({ name: 'Jim', damage: 10, hp: 120, agility: 40 });

battle(myFighter1, myFighter2);