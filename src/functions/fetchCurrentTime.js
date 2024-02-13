// 9:22:24 PM
export const fetchCurrentTime = ()=> { 
    const arr = [23,2,5,8,11,14,17,20]; 
    const options = {hour: "numeric", minute: "numeric", hour12: false}; 
    let date = new Date().toLocaleTimeString('en-US',options); 
    
    const tempArr = date.split(":"); 
    let temp = parseInt(tempArr[0], 10); 
    console.log("time finc", temp); 
    if(temp === 0){ 
        temp = 24; 
    }
    let valMinus = temp-1; 
    let valPlus = temp+1
    let timeToReturn = 0; 
    for(let i = 0; i<arr.length; i++){ 
        if(temp === arr[i]){ 
            timeToReturn = arr[i]; 
        }
        else if(valMinus === arr[i]){ 
            timeToReturn= arr[i]; 
        }else if(valPlus === arr[i]){ 
            timeToReturn= arr[i]; 
        }
    }; 
    return timeToReturn; 
}