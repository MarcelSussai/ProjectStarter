import { StatusType } from "./interfaces";

export const changeStatusToColorName = (status: StatusType, color: string) => {
  switch (status) {
    case 'normal': return color
    case 'ok': return 'green'
    case 'warn': return 'orange'
    case 'alert': return 'red'
    case 'info': return 'teal'
    default: return color
  }
}