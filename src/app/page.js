"use client";
import { useDispatch, useSelector } from "react-redux";
import { Event, Footer, Header, Hero, Testimonials } from "./_components";
import { handleDecoded } from "./_utils/functions/functions";
import { setJwtAuth, setUserAuth } from "./_utils/store/auth.slice";
import * as UserService from "./_utils/services/user.api";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.auth.userAuth);
  useEffect(() => {
    const { decoded, accessToken, refreshToken } = handleDecoded();
    if (decoded?.id && !userAuth?.email) {
      handleGetDetailsUser(decoded?.id, accessToken, refreshToken);
    }
  }, []);
  const handleGetDetailsUser = async (id, accessToken, refreshToken) => {
    const res = await UserService.getDetailUserAPI(id, accessToken);
    dispatch(setUserAuth(res?.data));
    dispatch(
      setJwtAuth({
        access_token: accessToken,
        refresh_token: refreshToken,
      })
    );
  };
  return (
    <>
      <Header />
      <div className="container flex flex-col">
        <Hero />
        <Event />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
