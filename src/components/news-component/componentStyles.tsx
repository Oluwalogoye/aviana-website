import styled from 'styled-components'

export const MainContainer = styled.div`
  position: relative;
  padding: 50px 0;

  font-family: 'Arial', sans-serif;

  @media (min-width: 768px) {
    &::before {
      top: 20px;
      width: 30%;
    }  
  
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 120px;
    left: 0;
    width: 40%;
    height: 60%;
    background-image: -webkit-linear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: -moz- oldlinear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: -o-linear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: linear-gradient(50deg, #6b3170 0%, #ff0a00 100%);
  }

  &:: after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-color: #242525;
  }

  & .dots {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: rotate(-90deg) translate(20%, -50%);
    -moz-transform: rotate(-90deg) translate(20%, -50%);
    -ms-transform: rotate(-90deg) translate(20%, -50%);
    -o-transform: rotate(-90deg) translate(20%, -50%);
    transform: rotate(-90deg) translate(20%, -50%);

  
  }

  & h3 {
    font-weight: 600;
  }
  
  & h3 {
    margin-bottom: 70px;
    width: 100%;
    color: #242525;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
  }

  @media (max-width: 992px) {
    & h3 {
      font-size: 35px;
      margin-bottom: 20px;
    }
  }

  @media (min-width: 768px) {
    & h3 {
      font-size: 36px;
    }
  }

  & h3 {
    font-size: 35px;
    margin-bottom: 20px;
  }

  .news-container {
    max-width: 1200px;
    padding: 0 20px;
    margin: auto;

    position: relative;
    z-index: 2;
  }

  @media (min-width: 768px) {
    .news-container {
      display: flex;
      flex-wrap: wrap;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -moz-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  }

  
`