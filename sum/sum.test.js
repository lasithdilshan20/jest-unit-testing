const sum = require('./sum')

test('Adds 1+2 to eq 3', () =>{
    expect(sum(1,2)).toBe(3)
})

test('Adds 2+2 to eq 2', () =>{
    expect(sum(2,2)).toBe(4)
})