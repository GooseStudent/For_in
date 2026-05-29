export function orderByProps(obj, order = []) {
  const result = [];
  const allKeys = Object.keys(obj);
  
  for (const key of order) {
    if (obj.hasOwnProperty(key)) {
      result.push({ key, value: obj[key] });
    }
  }
  
  const remainingKeys = allKeys.filter(key => !order.includes(key));
  remainingKeys.sort();
  
  for (const key of remainingKeys) {
    result.push({ key, value: obj[key] });
  }
  
  return result;
}