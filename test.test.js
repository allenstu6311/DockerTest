const {sum ,reduce}= require('./count');


test('sum', () => {
    expect(sum(1, 2)).toBe(3);
    
});

test('reduce',()=>{
    expect(reduce(5, 2)).toBe(3);
})


