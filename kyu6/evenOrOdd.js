// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the
// array as an argument and returns this "outlier" N.

function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}

arr = [1, 4, 7]
console.log(findOutlier(arr));
