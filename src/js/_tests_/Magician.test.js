import Magician from '../Magician';

// eslint-disable-next-line no-undef
test('Верный ввод Magician', () => {
    const received = new Magician('Roma', 'Magician');
    const expected = {
        name: 'Roma',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    // eslint-disable-next-line no-undef
    expect(received).toEqual(expected);
});