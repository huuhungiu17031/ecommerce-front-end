import styles from './banner.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
import { A11y } from 'swiper/modules';
import images from '~/assets/images'
import { Swiper, SwiperSlide } from 'swiper/react';
const listBanner = [
  { link: images.banner_1 },
  { link: images.banner_2 },
  { link: images.banner_3 },
]

function Banner() {
  return <div className={cx("banner-top-head")}>
    <div className={cx("cps-container")}>
      <Swiper
        modules={[A11y]}
        spaceBetween={50}
        slidesPerView={3}
      >
        {listBanner.map((banner, index) => <SwiperSlide key={index}>
          <img className={cx('banner')} src={banner.link} alt={index} />
        </SwiperSlide>
        )}
      </Swiper>
    </div>
  </div>
}

export default Banner
