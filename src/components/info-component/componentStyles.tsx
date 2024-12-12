const styles = {
  advisorContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    maxWidth: '1024px',
    margin: 'auto',
    padding: '20px',
    fontFamily: "'Arial', sans-serif",
    backgroundSize: '290px',
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
    position: 'relative' as const,
  },
  details: {
    position: 'absolute',
    right: '13%',
    top: '-90px',
    '@media (max-width: 992px)': {
      width: '160px',
      right: 'auto',
      left: '20px',
    },
  },
  detailsImg: {
    maxWidth: '100%',
  },
  advisorHeader: {
    borderBottom: '3px solid #fa3200',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  advisorHeaderH1: {
    fontSize: '24px',
    color: '#000000',
    fontWeight: 'bold',
  },
  advisorContent: {
    marginBottom: '20px',
  },
  paragraph: {
    color: '#333333',
    lineHeight: 1.6,
    marginBottom: '20px',
  },
};
export default styles;