import { v4 as uuidv4 } from "uuid";

export const BookReducer=(state,action)=>{
    switch(action.type){
        case "ADD_BOOK":
            return [...state,{
                ad:action.book.ad,
                yazar:action.book.yazar,
                id:uuidv4()
            }]
        case "REMOVE_BOOK":
            return state.filter(book=>book.id !== action.id);
        default:
            return state;
    }
}