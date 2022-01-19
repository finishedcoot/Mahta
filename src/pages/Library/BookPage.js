import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import { motion } from "framer-motion";
import { Loader } from "../../Components/Loader/Loader";
import Header from "../../Components/Main/Header/Header";
import Book from "../../Components/Main/Library/Book";
import data from "../../assets/data/books.json";

const BookPage = () => {
  const { bookName } = useParams();

  const book = data.find((book) => {
    return bookName === `${book.url}`;
  });

  const [bookIsReady, setBookIsReady] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading((prev) => (prev = false));
      setBookIsReady((prev) => (prev = true));
    }, 6000);
    return () => {
      setBookIsReady((prev) => (prev = false));
      setLoading((prev) => (prev = true));
    };
  }, []);

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: "8rem",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={divStyle}
    >
      <Header
        topicTitle={book.title}
        topicDescribtion={book.desc}
        linkback={"/library"}
        linkname={"کتابخانه"}
      />
      {loading && <Loader />}
      {bookIsReady && <Book BookPages={book.img} />}
    </motion.div>
  );
};

export default BookPage;
