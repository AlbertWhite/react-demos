import React from "react";
import withDeviceContext from "./shared/contexts/device/customer";

const ComponentWithDeviceInfo = ({
  device: { isSmallScreen, isMediumScreen, isLargeScreen, isIE11 }
}) => (
  <>
    <div>isSmallScreen: {`${isSmallScreen}`}</div>
    <div>isMediumScreen: {`${isMediumScreen}`}</div>
    <div>isLargeScreen: {`${isLargeScreen}`}</div>
    <div>isIE11: {`${isIE11}`}</div>
  </>
);

export default withDeviceContext(ComponentWithDeviceInfo);
