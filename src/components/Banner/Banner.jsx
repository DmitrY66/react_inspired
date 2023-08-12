import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import st from './Banner.module.scss';
import { API_URL } from '../../consts';
import { useMedia } from 'react-use';
import { useEffect } from 'react';
import { useState } from 'react';

export const Banner = ({ data }) => {

  const isMobile = useMedia('(max-width: 540px)');
  const isTablet = useMedia('(max-width: 768px)');
  const isLaptop = useMedia('(max-width: 1024px)');
  const [bgUrl, setBgUrl] = useState('');

  useEffect(() => {

    if (isMobile) {
      setBgUrl(`${API_URL}${data?.bg.mobile}`);
    } else if (isTablet) {
      setBgUrl(`${API_URL}${data?.bg.tablet}`);
    } else if (isLaptop) {
      setBgUrl(`${API_URL}${data?.bg.laptop}`);
    } else {
      setBgUrl(`${API_URL}${data?.bg.desktop}`);
    }

  }, [data, isMobile, isTablet, isLaptop])

  return (
    data &&
    <section
      className={st.banner}
      style={{
        backgroundImage: `url(${bgUrl})`
      }}
    >
      <Container>
        <div className={st.content}>
          <h2 className={st.title}>{data.description}</h2>
          <NavLink className={st.link} to={`/product/${data.id}`}>Перейти</NavLink>
        </div>
      </Container>
    </section>
  );
};
