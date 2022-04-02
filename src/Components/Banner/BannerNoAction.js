import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import bannerimage from "../../assets/image/banner-04.jpg";
import bannerImage768 from "../../assets/image/banner-768x520-04.jpg";
import bannerImage1140 from "../../assets/image/banner-1140x640-02.jpg";

function BannerNoAction() {
  const [img, setImg] = useState(bannerimage);
  useEffect(() => {
    const handleResize = () => {
      const checkWidth = window.innerWidth
      console.log(checkWidth)
      if (checkWidth > 1140) {
        setImg(bannerimage)
      } else if (checkWidth <= 1140 && checkWidth > 768) {
        setImg(bannerImage1140)
      } else {
        setImg(bannerImage768)
      }
    }
    window.addEventListener('load', () => {
      handleResize()
      window.addEventListener('resize', handleResize)
    })
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: "url(" + img + ")" }}
    >
    </div>
  );
}

export default BannerNoAction;
