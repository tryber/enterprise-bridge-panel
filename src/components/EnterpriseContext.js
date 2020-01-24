import React, { createContext, useState } from 'react';

const EnterpriseContext = createContext();

const EnterpriseProvider = ({ children }) => {
  const [energyGauge, setEnergyGauge] = useState(0);
  const [warpSpeed, setWarpSpeed] = useState(false);
  const [weaponsLevel, setWeaponsLevel] = useState(0);
  const [weaponsEnabled, setWeaponsEnabled] = useState(true);
  const [shieldsOnline, setShieldsOnline] = useState(false);

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

  const weaponsOffline = () => {
    if (warpSpeed || !weaponsEnabled) return undefined;

    setWeaponsEnabled(false);
    setWeaponsLevel(0);
    setEnergyGauge(energyGauge - weaponsLevel);
  };

  const weaponsOnline = () => {
    if (warpSpeed || weaponsEnabled) return undefined;

    setWeaponsEnabled(true);
  };

  const increaseFirepower = () => {
    if (warpSpeed || weaponsLevel === 3 || energyGauge === 4 || !weaponsEnabled)
      return undefined;

    setEnergyGauge(energyGauge + 1);
    setWeaponsLevel(weaponsLevel + 1);
  };

  const decreaseFirepower = () => {
    if (warpSpeed || weaponsLevel === 0 || energyGauge === 0) return undefined;

    setEnergyGauge(energyGauge - 1);
    setWeaponsLevel(weaponsLevel - 1);
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
    weaponsOffline,
    weaponsOnline,
    weaponsLevel,
    weaponsEnabled,
    shieldsOnline,
    engageWarpSpeed,
    disengageWarpSpeed,
    increaseFirepower,
    decreaseFirepower,
    raiseShields,
    lowerShields,
  };

  return (
    <EnterpriseContext.Provider value={context}>{children}</EnterpriseContext.Provider>
  );
};

export { EnterpriseContext, EnterpriseProvider as Provider };
