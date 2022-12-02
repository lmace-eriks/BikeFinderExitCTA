import React, { useEffect, useMemo, useRef, useState } from "react";
import { canUseDOM } from "vtex.render-runtime";

import styles from "./styles.css";

interface BikeFinderExitCTAProps {

}

declare global {
  interface Window {
    PREEZIE_GUIDE: any;
  }
}

const BikeFinderExitCTA: StorefrontFunctionComponent<BikeFinderExitCTAProps> = ({ }) => {

  useEffect(() => {

    window.PREEZIE_GUIDE.render([
      {
        guideKey: "EPO-c136a9e9-eb32-4ac5-2e7a-08daa6730d52",
        version: "1.0.0",
        renderTo: "preezie-widget-div-id-popup",
      },
    ]);

    window.PREEZIE_GUIDE.render([
      {
        guideKey: "EPO-c136a9e9-eb32-4ac5-2e7a-08daa6730d52",
        version: "1.0.0",
        renderTo: "preezie-widget-div-id-exit",
      },
    ]);

    return () => { };
  }, []);

  return (<>
    <div id="preezie-widget-div-id-popup"></div>
    <div id="preezie-widget-div-id-exit"></div>
  </>)
}

BikeFinderExitCTA.schema = {
  title: "Bike Finder Exit and Popup",
  type: "object",
  properties: {}
}

export default BikeFinderExitCTA;
