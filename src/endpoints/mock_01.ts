import { Mock01Data } from "./interfaces"




export const getMock01 = async (): Promise<Mock01Data> => {
  let mock01 = await fetch('/api/mock01', {
    method: 'GET',
    headers: {  }}).then( response => { return response.json() })

  return mock01
}