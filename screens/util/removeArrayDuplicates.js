export default function removeArrayDuplicates(arr = null) {
  if(!arr) throw "no array submitteed to removeArrayDuplicates";
  
  return arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
}