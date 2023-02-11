import React,{useContext} from 'react'
import { BookContext } from '../contexts/bookContext'

export default function BookDetails({book}) {

  const {removeBook}=useContext(BookContext);

  return (
    <li>
        <div className='title'>{book.ad}</div>
        <div className='author'>{book.yazar}</div>
        <div style={{textAlign:"end"}}>
            <button type='button' onClick={()=>removeBook(book.id)}>Sil</button>
        </div>
    </li>
  )
}
