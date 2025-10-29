import books from "./books.json";
import React from "react";

const markRead = title => alert(`${title} marked as read`);

const findBook = id => books.find((book) => book.id === id);

export const Book = (props) => {
  const { img, title, author, rank, markRead } = props;

  return (
    <article className='book'>
      <div className='bookrank'>#{rank}</div>
      <img className='bookcover' src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <div align="center">
        <button onClick={() => markRead(title)}>Read</button>
      </div>
    </article>
  );
};


export const BookList = () => {
    const sortedBooks = books.sort((a, b) => a.rank - b.rank);
    return (
        <>
            <h1>amazon best sellers</h1>
            <section className='booklist'>
                {sortedBooks.map((book) => {
                    return <Book {...book} key={book.id} markRead={markRead} />;
                })}
            </section>
        </>
    );
}

