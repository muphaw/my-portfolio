import { createContext, useState, useContext, type ReactNode, useEffect } from 'react';

interface VisibilityContextType {
  isWhiteDiv: boolean;
  setIsWhiteDiv: (visible: boolean) => void;
}



const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

export function VisibilityProvider({ children }: { children: ReactNode }) {
  const [isWhiteDiv, setIsWhiteDiv] = useState(false);
   useEffect(() => {
    console.log('isWhiteDiv changed:', isWhiteDiv);
  }, [isWhiteDiv]);
  return (
    <VisibilityContext.Provider value={{ isWhiteDiv, setIsWhiteDiv }}>
      {children}
    </VisibilityContext.Provider>
  );
}

export function useVisibility() {
  const context = useContext(VisibilityContext);
  if (context === undefined) {
    throw new Error('useVisibility must be used within a VisibilityProvider');
  }
  return context;
}
