import { useDispatch } from 'react-redux';
import { Container } from '../../Layout/Container/Container';
import { Category } from './Category/Category';
import { Gender } from './Gender/Gender';
import { useEffect } from 'react';
import { setActiveGender } from '../../../features/navigationSlice.js';
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';

  useEffect(() => {

    dispatch(setActiveGender(gender));
  }, [gender, dispatch])

  return (
    <nav>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  );
};
