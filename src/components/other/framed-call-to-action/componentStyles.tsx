const styles = {
  framedCallToAction: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflowY: 'auto' as const,
  },
  ctaItem: {
    textAlign: 'center' as const,
    margin: '20px',
    color: '#fff',
    minHeight: '33%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
  },
  ctaTitle: {
    fontSize: '1.5em',
  },
  ctaDescription: {
    fontSize: '1.2em',
    fontWeight: 700,
  }
}

export default styles;