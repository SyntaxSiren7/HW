function customFilter(nums, isPositive) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (isPositive(nums[i])) {
            arr.push(nums[i]);
        }
    }
    console.log(arr);
    return arr;

}

let isPositive = x => x > 0;

const nums = [-1, 1, -2, 3, 4];
customFilter(nums, isPositive)
