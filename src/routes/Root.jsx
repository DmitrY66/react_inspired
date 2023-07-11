import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Layout/Main/Main";
import { Footer } from "../components/Footer/Footer";

export const Root = () => {

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}