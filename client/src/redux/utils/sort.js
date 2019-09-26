export const doSort = data => {
  if(data.length > 2) return data.sort((a, b) => a.position - b.position); 
  return data;
}