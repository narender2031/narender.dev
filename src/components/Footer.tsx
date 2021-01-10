import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      marginTop: `2rem`,
      textAlign: 'center'
    }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer;


