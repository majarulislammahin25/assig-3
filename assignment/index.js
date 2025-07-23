function secondLargest(arr) {
    let num = arr[0];
    let marks = Number;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            marks = num;
            num = arr[i];
        } else if (arr[i] > marks && arr[i] < num) {
            marks = arr[i];
        }
    }

    return marks;
}

let numbers = [56,42,90,68,54,8];
console.log(secondLargest(numbers)); 