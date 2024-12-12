import Character from '../Character';

const player = new Character('Roma', 'Daemon');

// eslint-disable-next-line no-undef
test('class Character', () => {
    // eslint-disable-next-line no-undef
    expect(player).toEqual({
        name: 'Roma',
        type: 'Daemon',
        health: 100,
        level: 1
    });
});

// eslint-disable-next-line no-undef
test('Неверное имя', () => {
    // eslint-disable-next-line no-undef
    expect(() => new Character('R', 'Undead')).toThrow();
});

// eslint-disable-next-line no-undef
test('Неверный тип', () => {
    // eslint-disable-next-line no-undef
    expect(() => new Character('Mark', 'noType')).toThrow();
});