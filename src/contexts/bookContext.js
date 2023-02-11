import React,{createContext,useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export const BookContext=createContext();

const BookContextProvider=(props)=>{

    const [books,setBooks]=useState([
        {ad:'Sefiller',yazar:"Victor Hugo",id:1},
        {ad:'Yaban',yazar:"Yakup Kadri Karaosmanoğlu",id:2}
    ]);

    const addBook=(ad,yazar)=>{
        setBooks([...books,{ad:ad,yazar:yazar,id:uuidv4()}])
    }

    const removeBook=(id)=>{
        setBooks(books.filter(book=>book.id!==id));

    }

    return(
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider