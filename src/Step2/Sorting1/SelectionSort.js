  const prompt = require('prompt-sync')();

  const n = Number(prompt('Enter N: '));
  const arr=[];

  for(let i=0;i<n;i++){
    arr[i]= Number(prompt(''));    
  }


  function swap(i,j,arr){
     const temp = arr[i];
     arr[i]=arr[j];
     arr[j]=temp;
  }

  // 13,46,24,52,20,9
  // find the min and place it i'th position
  function selectionSort(arr){
      for(let i=0;i<n-1;i++){
        let minimum = i;
        for(let j=i+1;j<n;j++){       
           if(arr[j] < arr[minimum]){
              minimum = j;
           }
        }
        swap(i,minimum,arr);
      }  
  }


  // call the sort function
  selectionSort(arr);

  // print the array
  console.log(arr);
  