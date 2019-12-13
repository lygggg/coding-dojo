
const upper = (a,b) => a-b;
const getMaxSupportDepartment = (input, budget) => {
    let sum = 0;
    let count = 0;
    input.sort(upper).forEach(element => {
        sum += element; 
        if(sum <= budget) {
        count += 1;
        }
    })
    return count;
}

// [1,3,2,5,4].sort((a,b) => a-b).slice(0,3).length
;
test('getMaxSupportDepartment',() => {
    expect(getMaxSupportDepartment([1,3,2,5,4],9)).toBe(3);
    expect(getMaxSupportDepartment([2,2,3,3],10)).toBe(4);
} )
