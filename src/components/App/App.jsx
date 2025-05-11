import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";

import { fetchGallery } from "../../fetchGallery-api";

import "./App.module.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (modalIsOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [modalIsOpen]);

  function openModal(imageURL) {
    setCurrentImage(imageURL);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleSearch = async (topic, page = 1) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const data = await fetchGallery(topic, page);

      if (page === 1) {
        setQuery(topic);
        setPhotos(data.results);
        if (data.results.length === 0) {
          toast.error("No results found for your search. Please try again!");
        }
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      }

      setTotalPages(data.total_pages);
      setCurrentPage(page);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const hasPhotos = photos.length > 0;
  const isNotLastPage = currentPage < totalPages;

  const handleLoadMore = () => {
    if (isNotLastPage) {
      const nextPage = currentPage + 1;
      handleSearch(query, nextPage);
      setCurrentPage(nextPage);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch}></SearchBar>
      {isError && <ErrorMessage />}
      {hasPhotos && <ImageGallery items={photos} onImageClick={openModal} />}
      {isLoading && <Loader loadingState={isLoading} />}
      {hasPhotos && !isLoading && isNotLastPage && (
        <LoadMoreBtn nextPage={handleLoadMore} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        image={currentImage}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
