// COMPONENTS
import PropTypes from 'prop-types';
// STYLES
import './style.scss';
// ASSETS
import defaultBannerImg from '../../assets/images/paint-banner.jpg';

function Banner({ children, bannerImg, altText }) {
  return (
    <section className="banner-section">
      <div className="banner-left">
        {children}
      </div>
      <div className="banner-right">
        <img
          src={bannerImg}
          alt={altText}
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1516962080544-eac695c93791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'; }}
        />
      </div>
    </section>
  );
}

Banner.defaultProps = {
  bannerImg: defaultBannerImg,
  altText: 'placeholder'
};

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  bannerImg: PropTypes.string,
  altText: PropTypes.string
};

export default Banner;
