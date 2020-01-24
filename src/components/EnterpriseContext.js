import React, { createContext, useState } from 'react';

const EnterpriseContext = createContext();

const EnterpriseProvider = ({ children }) => {
  const [energyGauge, setEnergyGauge] = useState(0);

  const context = {
    energyGauge,
  };

  return (
    <EnterpriseContext.Provider value={context}>{children}</EnterpriseContext.Provider>
  );
};

export { EnterpriseContext, EnterpriseProvider as Provider };
