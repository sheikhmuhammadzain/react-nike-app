
const Carousel = () => {
  return (
    <>
      <div className="carousel w-full h-[30vh] lg:h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/pair-shoes-wooden-deck-with-landscape-background_777078-2046.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://media.gq.com/photos/63eba1b2275d2fef78a425c2/master/pass/nike-running-shoes-streakfly-invincible.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.rei.com/dam/up_2018-02-c01_2972_running_shoes_fit.jpg?t=ea16by9xs"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBuq45S5LSxXYoSC0CxvkYLhlFkO5NaUUMA&s"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel