import React, { useEffect, useMemo, useRef, useState } from "react";
import { canUseDOM } from "vtex.render-runtime";

import styles from "./styles.css";

interface BikeFinderExitCTAProps {
  popupGuideKey: string
  exitGuideKey: string
}

declare global {
  interface Window {
    PREEZIE_GUIDE: any;
  }
}

const BikeFinderExitCTA: StorefrontFunctionComponent<BikeFinderExitCTAProps> = ({ popupGuideKey, exitGuideKey }) => {

  useEffect(() => {

    window.PREEZIE_GUIDE.render([
      {
        guideKey: popupGuideKey,
        version: "1.0.0",
        renderTo: "preezie-widget-div-id-popup",
      },
    ]);

    window.PREEZIE_GUIDE.render([
      {
        guideKey: exitGuideKey,
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
  properties: {
    popupGuideKey: {
      title: "Popup Guide Key",
      type: "string"
    },
    exitGuideKey: {
      title: "Exit Intent Guide Key",
      type: "string"
    }
  }
}

export default BikeFinderExitCTA;
