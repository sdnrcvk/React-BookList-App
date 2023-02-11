import React,{useContext} from 'react'
import { BookContext } from '../contexts/bookContext'
import BookDetails from './BookDetails'; 

export default function BookList() {

  const {books}=useContext(BookContext);

  return books.length ? (
    <div className='book-list'>
        <ul>
            {books.map(book=>{
                return (
                    <BookDetails book={book} key={book.id}/>
                )
            })}
        </ul>
    </div>
  ) : (
    <div className='empty'>
        Henüz kitap eklemediniz
    </div>
  )
}
