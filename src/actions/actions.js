import { NAME } from "./actionsTypes"

export const setName = (payload) =>
{
    return{
        type : NAME,
        value : payload,
    }
}