import classes from './css/Footer.module.css';
import { SiNaver } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';

export const Footer = srollY => {
  return (
    <>
      {scrollY > 1800 && (
        <footer className={classes.footer}>
          <a
            href='https://map.naver.com/p/search/%EB%B2%94%EC%83%81/place/1111530355?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh'
            target='blnk'
          >
            <SiNaver />
          </a>
          <a href='https://www.instagram.com/bumsang_songdo?igsh=YnBsYXJmcmJlb2s3'>
            <FaInstagram />
          </a>
        </footer>
      )}
    </>
  );
};
