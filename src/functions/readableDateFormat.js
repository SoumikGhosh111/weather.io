export const readableDateFormat = (data) => { 
    const date = new Date(data * 1000); 
    return date.toDateString(); 
}