import { months } from "./Contstants";

export const dateDisplayFormat = (date:string) => {
    let current_datetime = new Date(date)
    return current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
}