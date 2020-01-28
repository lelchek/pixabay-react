import React, { Component } from 'react';
import Searchbar from './components/searchbar/Searchbar';
import ImageGallery from './components/imageGallery/ImageGallery';
import Button from './components/button/Button';
import Modal from './components/modal/Modal';
import { urlPictures } from './services/pixabay-api';
import Loader from 'react-loader-spinner';
import './app.css';

const mapper = pictures => {
  return pictures.map(picture => {
    return {
      id: picture.id,
      webformatURL: picture.webformatURL,
      largeImageURL: picture.largeImageURL,
    };
  });
};

class App extends Component {
  state = {
    gallery: [],
    search: '',
    page: 1,
    idLageImage: '',
    urlLageImage: '',
    activeModal: false,
    activeLoader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchPictures(this.state.search, this.state.page);
    }
  }
  componentDidMount() {
    this.fetchPictures(this.state.search, this.state.page);
  }

  searchToFetch = value => {
    this.setState({ search: value, page: 1 });
  };

  fetchPictures = (search, page) => {
    this.setState({ activeLoader: true });
    urlPictures(search, page).then(({ data }) => {
      this.setState({
        gallery: mapper(data.hits),
        activeLoader: false,
      });
    });
  };

  loadMorePicture = () => {
    try {
      this.setState({ activeLoader: true });
      urlPictures(this.state.search, this.state.page + 1).then(({ data }) => {
        const addMorePicture = mapper(data.hits);
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...addMorePicture],
          page: prevState.page + 1,
          activeLoader: false,
        }));
      });
    } catch (error) {
      console.log('error');
    }

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 800);
  };

  openModal = (id, url) => {
    this.setState({
      idLageImage: id,
      urlLageImage: url,
      activeModal: true,
    });
  };

  closeModal = e => {
    if (e.target.className === 'Overlay isOpen' || e.keyCode === 27) {
      this.setState({
        activeModal: false,
      });
    }
  };

  render() {
    const {
      gallery,
      idLageImage,
      urlLageImage,
      activeModal,
      activeLoader,
    } = this.state;
    return (
      <div className="appClass">
        <Searchbar onSearch={this.searchToFetch}></Searchbar>
        <ImageGallery
          gallery={gallery}
          onOpenModal={this.openModal}
        ></ImageGallery>
        <Button onLoadMore={this.loadMorePicture}></Button>
        <Modal
          id={idLageImage}
          url={urlLageImage}
          active={activeModal}
          onCloseModal={this.closeModal}
        ></Modal>
        {activeLoader && (
          <Loader
            className="loader"
            type="ThreeDots"
            color="#00BFFF"
            height={500}
            width={500}
            timeout={3000}
            //3 secs
          />
        )}
      </div>
    );
  }
}

export default App;
