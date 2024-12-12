const styles = {
  pageContainer: {
    fontFamily: '"Arial", sans-serif',
    color: '#ffffff',
    // backgroundImage: 'url("https://rccgjesushouseny.org/wp-content/uploads/2018/07/breadcrumb1_bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column' as const, // Specify the flex direction as a constant
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'auto',
    padding: '80px 50px',
  },
  mainContent: {
    // Add your main content styles here
    width: '100%'
  },
  pageFooter: {
    // Add your footer styles here
    width: '100%'
  },
  faIcon: {
    marginRight: '10px'
  },
  pageFooterP: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px'
    // Add any additional styling for <p> in footer
  },
  pageFooterLink: {
    textDecoration: 'none',
    alignItems: 'center',
    color: 'inherit'
  }
}

export default styles;