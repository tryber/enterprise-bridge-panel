import React, { createContext, useState } from 'react';

const EnterpriseContext = createContext();

const EnterpriseProvider = ({ children }) => {
  const [energyGauge, setEnergyGauge] = useState(0);
  const [warpSpeed, setWarpSpeed] = useState(false);

  const engageWarpSpeed = () => {
    if (weaponsEnabled || shieldsOnline || energyGauge > 2) return undefined;

    setWarpSpeed(true);
    setEnergyGauge(2);
  };

  const disengageWarpSpeed = () => {
    if (!warpSpeed) return undefined;

    setWarpSpeed(false);
    setEnergyGauge(energyGauge - 2);
  };

  const context = {
    energyGauge,
    warpSpeed,
    engageWarpSpeed,
    disengageWarpSpeed,
  };

  return (
    <EnterpriseContext.Provider value={context}>{children}</EnterpriseContext.Provider>
  );
};

export { EnterpriseContext, EnterpriseProvider as Provider };
