import Bowerman from '../Bowerman';

// eslint-disable-next-line no-undef
test('Верный ввод Bowman', () => {
    const received = new Bowerman('Roma', 'Bowman');
    const expected = {
        name: 'Roma',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    // eslint-disable-next-line no-undef
    expect(received).toEqual(expected);
});