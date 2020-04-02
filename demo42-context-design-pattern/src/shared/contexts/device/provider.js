import React from "react";
import PropTypes from "prop-types";

const DEVICE_BREAK_POINTS = {
  S: 574,
  M: 742,
  L: 1024
};

const initialData = {
  isSmallScreen: false,
  isMediumScreen: false,
  isLargeScreen: false,
  isIE11: false
};

const getMediaMatches = query => {
  const mediaQuery = window.matchMedia(query);
  return mediaQuery && mediaQuery.matches;
};

export const DeviceContext = React.createContext(initialData);

class DeviceContextProvider extends React.Component {
  propTypes = {
    children: PropTypes.any
  };
  state = { ...initialData };

  onResize = () => {
    this.setState(() => ({
      isSmallScreen: getMediaMatches(`(min-width: ${DEVICE_BREAK_POINTS.S}px)`),
      isMediumScreen: getMediaMatches(
        `(min-width: ${DEVICE_BREAK_POINTS.M}px)`
      ),
      isLargeScreen: getMediaMatches(`(min-width: ${DEVICE_BREAK_POINTS.L}px)`),
      isIE11:
        !!window &&
        !!document &&
        !!window.MSInputMethodContext &&
        !!document.documentMode
    }));
  };

  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    return (
      <DeviceContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </DeviceContext.Provider>
    );
  }
}

export default DeviceContextProvider;
