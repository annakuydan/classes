const typePlayers = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie'
];

class Character {
    constructor(name, type) {
        if(name.length < 2 || type.length > 10) {
            throw new Error ('Ошибка. Допускается только имена длиной от 2 символов до 10');
        }
        if(typePlayers.includes(type) === false) {
            throw new Error('Неверное значение типа персонажа!');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }
}
export default Character;