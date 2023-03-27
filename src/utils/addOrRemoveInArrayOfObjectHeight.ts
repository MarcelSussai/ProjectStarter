export interface IObj {
  id: string;
  rawEditHeigh: number | undefined;
}
export default function addOrRemoveInArrayOfObjectHeight(
  val: IObj, arr: IObj[]
) {
  const index = arr.indexOf(val);
  if(index > -1) {
    return arr.filter((_, i) => i !== index)
  } else { return [...arr, val] }
}