import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";
import Modal from "react-modal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";
Modal.setAppElement("#root");

function App() {
  const [query, setQuery] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalImagesCount, setTotalImagesCount] = useState(0);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=lvmCbBIDvWBQ84eVaCxLsu-dA0JkL1dORXNXMJFSIKA`
      );
      setTotalImagesCount(response.data.total);
      const newImages = response.data.results;
      if (newImages.length === 0) {
        throw new Error("No images found");
      }
      setImages([...images, ...newImages]);
      setPage(page + 1);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError("Error fetching images");
    }
  };
  const handleSearch = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    fetchImages();
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (query !== "") {
      fetchImages();
    }
  }, [query]);

  useEffect(() => {
    if (query !== "" && query !== lastQuery) {
      fetchImages();
      setLastQuery(query);
    }
  }, [query, lastQuery]);

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length < totalImagesCount && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
