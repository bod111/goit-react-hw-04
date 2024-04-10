import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { getPhotosByQuery } from "../../service/api";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pictures, setPictures] = useState([]);
  const [allPages, setAllPages] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [modal, setModal] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        const data = await getPhotosByQuery(topic, page);
        setPictures((prevPictures) => [...prevPictures, ...data.results]);
        setAllPages(data.total_pages);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [topic, page]);

  useEffect(() => {
    modal !== "" && setIsOpen(true);
  }, [modal]);

  const onSubmitForm = (nameOnForm) => {
    setTopic(nameOnForm);
    setPage(1);
    setPictures([]);
    setAllPages(1);
  };

  const onClickLoadMoreBtn = () => {
    setPage((prev) => prev + 1);
  };

  const handleClick = (card) => setModal(card);

  const onClose = (e) => {
    e.target === e.currentTarget && (setIsOpen(false), setModal(""));
  };

  return (
    <>
      <SearchBar onSubmit={onSubmitForm} />
      {!!pictures.length && (
        <>
          <ImageGallery
            handleClick={handleClick}
            pictures={pictures}
            isloading={loading}
          />
          {allPages > page && (
            <LoadMoreBtn onClickLoadMoreBtn={onClickLoadMoreBtn} />
          )}
        </>
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {modalIsOpen && (
        <ImageModal onClose={onClose} card={modal} modalIsOpen={modalIsOpen} />
      )}
    </>
  );
}

export default App;
