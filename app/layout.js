"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import HeaderNavBar from "@/components/HeaderNavBar";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [userLocation, setUserLocation] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState([]);

  useEffect(() => {
    getUserLocation();
    console.log(userLocation);
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return (
    <html lang="ja">
      <Provider>
        <SelectedBusinessContext.Provider
          value={{ selectedBusiness, setSelectedBusiness }}
        >
          <UserLocationContext.Provider
            value={{ userLocation, setUserLocation }}
          >
            <body className={inter.className}>
              <HeaderNavBar />
              {children}
            </body>
          </UserLocationContext.Provider>
        </SelectedBusinessContext.Provider>
      </Provider>
    </html>
  );
}
