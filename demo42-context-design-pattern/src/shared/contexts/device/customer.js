import React from "react";
import { DeviceContext } from "./provider";

const withDeviceContext = Component => {
  return props => (
    <DeviceContext.Consumer>
      {device => <Component device={device} {...props} />}
    </DeviceContext.Consumer>
  );
};

export default withDeviceContext;
