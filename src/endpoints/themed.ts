import { Themed } from "./interfaces"




export const themed = async (): Promise<Themed> => {
  return await fetch('/api/colorsThemed', {
    method: 'GET',
    headers: {  }}).then( response => { return response.json() })
}