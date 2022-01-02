import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

import bookClass from "../../../styles/Book.module.css";

const Book = (props) => {
  const book = useRef();
  const pages = [props.BookPages];

  const onInit = () => {
    book.current.pageFlip().turnToPage(pages[0].length - 1);
    console.log(pages[0].length);
  };

  return (
    <div className={bookClass.maincontainer}>
      <div className={bookClass.container}>
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          ref={book}
          onInit={onInit}
        >
          {pages[0]
            .slice(0)
            .reverse()
            .map((i, k) => {
              return (
                <div key={k}>
                  <img src={i} className={bookClass.page} alt={"bookPage"} />
                </div>
              );
            })}
        </HTMLFlipBook>
        <div className={bookClass.btn_container}>
          <button
            className={bookClass.btn}
            onClick={() => {
              book.current.pageFlip().flipPrev();
            }}
          >
            صفحه بعد &#8250;
          </button>
          <button
            className={bookClass.btn}
            onClick={() => book.current.pageFlip().flipNext()}
          >
            &#8249; صفحه قبل
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
