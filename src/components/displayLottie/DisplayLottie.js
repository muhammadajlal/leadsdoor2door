import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const { animationData, isStaticImage } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        {isStaticImage ? (
          <img src={animationData} alt="Static representation" />
        ) : (
          <Lottie
            animationData={defaultOptions.animationData}
            loop={defaultOptions.loop}
          />
        )}
      </Suspense>
    );
  }
}
