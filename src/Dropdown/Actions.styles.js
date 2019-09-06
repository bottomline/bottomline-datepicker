export default {
  applyButton: {
    backgroundColor: '#0070B9',
    borderColor: '#0070B9',
    borderRadius: 40,
    borderStyle: 'solid',
    color: '#FFFFFF',
    cursor: 'pointer',
    fontFamily: 'Roboto Condensed, Roboto, Helvetica, Arial, sans-serif',
    fontSize: 16,
    lineHeight: 1,
    outlineOffset: -2,
    padding: [5, 25],
    '&:hover': {
      backgroundColor: '#20A2FF',
      borderColor: '#20A2FF'
    },
    '&:disabled': {
      backgroundColor: '#7EB8DD',
      borderColor: '#7EB8DD',
      color: '#FFFFFF',
      cursor: 'not-allowed'
    }
  },
  cancelButton: {
    background: 'transparent',
    border: 'none',
    color: '#0070B9',
    cursor: 'pointer',
    fontFamily: 'Roboto Condensed, Roboto, Helvetica, Arial, sans-serif',
    fontSize: 16,
    height: 22,
    lineHeight: '22px',
    margin: [0, 0, 0, 10],
    padding: [0, 10],
    '&:hover': {
      textDecoration: 'underline'
    },
    '&:disabled': {
      background: '#e0e0e0'
    },
    '&:disabled:hover': {
      background: '#20A2FF',
      cursor: 'default'
    }
  }
};
