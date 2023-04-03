import "./LazyLoader.css"
const LazyLoader = () => {
  return (
    // <div className="preloader-wrap preloader-wrap-animation">
    //   <div className="circle" />
    //   <div className="logo-wrap">
    //     <img
    //       src={require('assets/images/text-logo.png').default}
    //       alt="Netflix"
    //       className="img-responsive"
    //     />
    //   </div>
    // </div>
    <div id="loader" className="nfLoader"></div>
  );
};

export default LazyLoader;
