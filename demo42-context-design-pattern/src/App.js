import React from "react";
import DeviceProvider from "./shared/contexts/device/provider";
import ComponentWithDeviceInfo from "./componentWithDeviceInfo";

function App() {
  return (
    <DeviceProvider>
      <ComponentWithDeviceInfo />
    </DeviceProvider>
  );
}

export default App;
