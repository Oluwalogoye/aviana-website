import styled from 'styled-components';

// Styled components for media queries
export const ImagesContainer = styled.div`

  @media (min-width: 768px) {
    display: flex;
    flexWrap: wrap;
    justify-content: space-between;
  }

  & img {
    box-sizing: border-box;
    width: 100%;
    object-fit: contain;
    height: auto;
  }

`;

export const ImageWrapper = styled.div`

  @media (min-width: 768px) {
    width: calc(33% - 20px);
    margin: 10px;
  }

  & h2 {
    font-size: 1.5em;
    margin-top: 0.5em;

    color: #771800;
  }

  & p {
    font-size: 0.9em;
    font-weight: 700!important;
  }



`;

const styles = {
  frameContainer: {
    position: 'relative' as const,
    padding: '50px 0',
    background: 'linear-gradient(rgb(240, 242, 246), rgb(187, 217, 236))',
  },
  imagesContainer: {
    maxWidth: '1200px',
    padding: '0 20px',
    margin: 'auto',
    position: 'relative' as const,
    zIndex: 2,
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between',

    img: {
      boxSizing: 'border-box',
      width: '100%',
      objectFit: 'contain',
      height: 'auto',
    },
  },
  imageWrapper: {
    boxSizing: 'border-box' as const,
    width: '100%',
    padding: '10px',
    textAlign: 'left' as const,

    h2: {
      fontSize: '1.5em',
      marginTop: '0.5em',
      color: '#771800',
    },

    p: {
      fontSize: '0.9em',
      fontWeight: '700 !important',
    },
  },
};

export default styles;
