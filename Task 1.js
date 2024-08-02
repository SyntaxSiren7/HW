
function customMap(nums, square) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        newArr.push(square(nums[i]));
    }
    console.log(newArr);
    return newArr;
}

let square = x => x * x;

const nums = [1, 2, 3, 4];
customMap(nums, square)

