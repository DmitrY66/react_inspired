import { Container } from '../Layout/Container/Container';
import st from './ErrorPage.module.scss';
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className={st.error}>
      <Container>
        <p>{error?.message ?? 'Неопознанный летающий объект'}</p>
      </Container>

      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495 694">
        <path className={st.cls_1} d="M378.5,102.5c-27.24,120.32,82.18,194.69,45,268-19.85,39.14-69.06,53.48-67,97a55.48,55.48,0,0,0,9,28c22.5,33.22,77.85,27.21,89,26,7.34-.8,61.47-7.42,92-47,40-51.83,14.66-128-33-265-28.37-81.56-61.65-177.22-95-174C394,37.86,380.81,92.3,378.5,102.5Z" transform="translate(-71.19 -35.42)" />
        <path className={st.cls_2} d="M217.5,286.5c-115.57,233.74-173.35,350.61-134,402,72.21,94.29,367.93,4.1,370-54,1.12-31.43-84.46-31.79-118-106-23.53-52.08,5.74-80.39,7-196,.19-17.75,1.09-166.46-34-174C289.57,154.43,264.09,192.27,217.5,286.5Z" transform="translate(-71.19 -35.42)" />
        <path className={st.cls_3} d="M1211.5,397.5" transform="translate(-71.19 -35.42)" />
      </svg>
    </section>
  )
};
