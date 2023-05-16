import { useState, createContext, useContext, PropsWithChildren } from 'react'

interface CollectedData {
  firstName: string,
  lastName: string,
  email: string,
  age: number
}

interface CollectedDataProviderProps {
  children: PropsWithChildren<JSX.Element>
}

const emptyCollectedData = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
};

const CollectedDataContext = createContext({collectedData: emptyCollectedData, updateCollectedData: (field: string, value: string | number) => {} });
export const useCollectedData = () => useContext(CollectedDataContext);

export default function CollectedDataProvider({children}: CollectedDataProviderProps) {
  const [collectedData, updateData] = useState<CollectedData>(emptyCollectedData);

  const handleUpdateData = (field: string, value: string | number) => {
    updateData({ ...collectedData, [field]: value });
  };

  return (
    <CollectedDataContext.Provider value={{collectedData, updateCollectedData: handleUpdateData}}>
      {children}
    </CollectedDataContext.Provider>
  )
}