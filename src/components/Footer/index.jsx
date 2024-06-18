  import logofooter from '../../assets/logo-footer.png'
  import './footer.css'

  function Footer() {
    return (
      <div className='footer'>
          <img src={ logofooter } alt="Logo footer" className="logo-footer" />
          <p>© 2024 Kasa. All rights reserved</p>
      </div>
    )
  }

  export default Footer;