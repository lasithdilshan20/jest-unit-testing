const sum = require('./sum')

test('Adds 1+2 to eq 3', () =>{
    expect(sum(1,2)).toBe(3)
})