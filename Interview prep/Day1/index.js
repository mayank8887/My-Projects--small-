// //Fibonacchi

// function fibonacchi(n){
//     if(n==0 || n==1){
//         return n
//     }
//     else {
//         return (fibonacchi(n-1)+fibonacchi(n-2))
//     }
// }

// console.log(fibonacchi(4));

// function fibo(n){
//     if(n==0 || n==1){
//         return n;
//     }
//     else {
//         return (fibo(n-1) + fibo(n-2))
//     }
// }


// //Factorial

// function factorial(n){
//     if(n==0 || n==1){
//         return 1;
//     }
//     else {
//         return n*factorial(n-1)
//     }
// }

// console.log(factorial(4))
// console.log(factorial(5))


// //no of ways to make a given sum

// let n= 5;
// let sum=0;
// function noofWays(n,sum){
//    if(sum==n){
//     return 1
//    }
//    if(sum>n){
//     return 0
//    }
//    else {
//     return noofWays(n,sum+1)+noofWays(n,sum+2)+noofWays(n,sum+3)
//    }
// }

// console.log(noofWays(n,sum))



// Merge Sort


let arr= [6,1,8,9,4,4,2,3,10];
let low = 0;
let high= arr.length-1;


function mergeSort(arr,low,high){
     if(low==high){
        return;
     }
     let mid= Math.floor((low+high)/2);
     mergeSort(arr,low,mid);
     mergeSort(arr,mid+1,high);
     Merge(arr,low,high,mid);
    
    }

      function Merge(arr,low,high,mid){
        let arr1=[];
        let arr2=[];

        for(let i=low;i<=mid;i++){
            arr1.push(arr[i])
        }
        for(let j=mid+1;j<=high;j++){
            arr2.push(arr[j])
        }

        let index=low;
        let left=0;
        let right=0;
        
        while(left<arr1.length && right<arr2.length){
            if(arr1[left]<=arr2[right]){
                arr[index]==arr1[left]
                left++;
            }
            else{
                arr[index]=arr2[right]
                right++;
            }
            index++;
        }
    
        while(left<arr1.length){
            arr[index]=arr1[left];
            left++;
            index++;
        }

        while(right<arr2.length){
            arr[index]=arr2[right];
            right++;
            index++;
        }
 }
 mergeSort(arr,low,high);
 console.log(arr)

     
