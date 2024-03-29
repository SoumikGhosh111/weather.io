// const time5 = new Date(1706764037 * 1000).toLocaleTimeString();  
// 10:37:17 AM

export const redableTimeFormat = (data) => { 
    const timeArr = new Date(data * 1000).toLocaleTimeString().split(" "); 
    const temp = timeArr[0].split(":"); 
    const amPm = typeof timeArr[1] !== 'undefined' ? timeArr[1] : '';
    return `${temp[0]}:${temp[1]} ${amPm}`;  
    // return `${temp[0]}:${temp[1]} ${timeArr[1] ? (timeArr[1]):("")}`; 
}
