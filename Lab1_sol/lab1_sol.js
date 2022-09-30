// STUDENT NAME - RAVKEERAT SINGH 
// STUDENT ID - 101344680



console.log("--------------EXERCISE 1-----------------------")
//EXERCISE  1 - Capitalize 1st letter of string
const str = 'its a hot day';
const arr = str.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str2 = arr.join(" ");
console.log(str2);


//finding the largest number - EX2

console.log("--------------EXERCISE 2-----------------------")
function largest_number(x,y,z){

    max_no = 0; 
    if(x > y){
        max_no = x;
    }
    else{
        max_no = y;
    }
    if(z > max_no){
        max_no = z;
    }
    return max_no;
}

console.log(largest_number(10,15,50))
console.log(largest_number(0,010,100))
console.log(largest_number(5,-10,-20))

//EXERCISE 4 - finding type of angle
console.log("--------------EXERCISE 4-----------------------")
function  find_angle(angle){
    if(angle == 90){
        return "Right angle";
    }

    if(angle <= 90){
        return "Acute angle";
    }

    if( angle < 180){
        return "Obtuse angle";
    }

    else if (angle ==180){
        return "Straight angle";
    }
}


//testing out function 4

console.log(find_angle(47))
console.log(find_angle(90))
console.log(find_angle(150))
console.log(find_angle(180))

console.log("--------------EXERCISE 5-----------------------")
// finding the sum of numbers in array 
function array_max_sum(nums, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) {
      temp_sum += nums[i];
    }
    for (var i = k - 1; i < nums.length; i++) {
      temp_sum += nums[i];
      if (temp_sum > result) {
        result = temp_sum;
      }
      temp_sum -= nums[i - k + 1];
    }
    return result;
  }
  
  console.log(array_max_sum([1, 2, 3, 14, 5], 2))
  console.log(array_max_sum([2, 3, 5, 1, 6], 3))
  console.log(array_max_sum([-9, 3, -5, 1, 7], 2))
