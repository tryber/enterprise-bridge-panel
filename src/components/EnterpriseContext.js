import React, { createContext, useState } from 'react';

const EnterpriseContext = createContext();

const EnterpriseProvider = ({ children }) => {
  const [energyGauge, setEnergyGauge] = useState(0);
  const [warpSpeed, setWarpSpeed] = useState(false);
  const [shieldsOnline, setShieldsOnline] = useState(false);

  const engageWarpSpeed = () => {
    if (shieldsOnline || energyGauge > 2) return undefined;

    setWarpSpeed(true);
    setEnergyGauge(2);
  };

  const disengageWarpSpeed = () => {
    if (!warpSpeed) return undefined;

    setWarpSpeed(false);
    setEnergyGauge(energyGauge - 2);
  };

  const raiseShields = () => {
    if (warpSpeed || energyGauge > 2) return undefined;

    setEnergyGauge(energyGauge + 2);
    setShieldsOnline(true);
  };

  const lowerShields = () => {
    if (warpSpeed || energyGauge === 0) return undefined;

    setEnergyGauge(energyGauge - 2);
    setShieldsOnline(false);
  };

  const context = {
    energyGauge,
    warpSpeed,
    shieldsOnline,
    engageWarpSpeed,
    disengageWarpSpeed,
    raiseShields,
    lowerShields,
  };

  return (
    <EnterpriseContext.Provider value={context}>{children}</EnterpriseContext.Provider>
  );
};

export { EnterpriseContext, EnterpriseProvider as Provider };
