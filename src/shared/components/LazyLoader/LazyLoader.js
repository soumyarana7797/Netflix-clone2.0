const LazyLoader = () => {
  return (
    <div className="preloader-wrap preloader-wrap-animation">
      <div className="circle" />
      <div className="logo-wrap">
        <img
          src={require('assets/images/text-logo.png').default}
          alt="toolo"
          className="img-responsive"
        />
      </div>
    </div>
  );
};

export default LazyLoader;
