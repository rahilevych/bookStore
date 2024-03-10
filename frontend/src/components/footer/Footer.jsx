import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__social'>
        <div className='footer__circle'>
          <LinkedinLogo className='footer__icon' size={32} />
        </div>
        <div className='footer__circle'>
          <InstagramLogo className='footer__icon' size={32} />
        </div>
        <div className='footer__circle'>
          <FacebookLogo className='footer__icon' size={32} />
        </div>
        <div className='footer__circle'>
          <GithubLogo className='footer__icon' size={32} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
