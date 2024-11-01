import Carousel from 'react-bootstrap/Carousel';

 export function Carus() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://i.pinimg.com/564x/66/9b/49/669b4981a0c59f926bf806620e3fbb49.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Красивая толстовка №1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://i.pinimg.com/564x/35/91/f4/3591f4ce013edebfa9ff06d2464191e4.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Красивая толстовка №1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://i.pinimg.com/564x/d9/96/9f/d9969ff27cbfadd87b1eb77467468e5a.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>Красивая толстовка №1</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
