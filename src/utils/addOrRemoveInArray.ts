export default function addOrRemoveInArray(
  val: string, arr: string[]
) {
  const index = arr.indexOf(val);
  if(index > -1) {
    return arr.filter((_, i) => i !== index)
  } else { return [...arr, val] }
}