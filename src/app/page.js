"use client";
import { useDispatch, useSelector } from "react-redux";
import { Event, Footer, Header, Hero, Testimonials } from "./_components";
import { handleDecoded } from "./_utils/functions/functions";
import { setJwtAuth, setUserAuth } from "./_utils/store/auth.slice";
import * as UserService from "./_utils/services/user.api";
import { useEffect } from "react";
import { getAllClubPublicAPI } from "./_utils/services/club.api";
import { setClubPublicList } from "./_utils/store/club.slice";
import { setEventPublicList } from "./_utils/store/event.slice";
import { getAllEventPublicAPI } from "./_utils/services/event.api";

export default function Home() {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.auth.userAuth);
  const eventPublicList = useSelector((state) => state.event.eventPublicList);

  useEffect(() => {
    const { decoded, accessToken, refreshToken } = handleDecoded();
    if (decoded?.id && !userAuth?.email) {
      handleGetDetailsUser(decoded?.id, accessToken, refreshToken);
    }
  }, []);

  useEffect(() => {
    getAllEventPublic();
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

  const getAllClubPublic = async () => {
    const res = await getAllClubPublicAPI();
    if (res?.status == 200) {
      dispatch(setClubPublicList(res?.data));
    }
  };
  const getAllEventPublic = async () => {
    const res = await getAllEventPublicAPI();
    if (res?.status == 200) {
      dispatch(setEventPublicList(res?.data));
    }
  };

  return (
    <>
      <Header />
      <div className="container flex flex-col">
        <Hero />
        <Event eventList={eventPublicList} />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
