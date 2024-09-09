import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface InterviewContextType {
  creatingInterview: boolean;
  setCreatingInterview: Dispatch<SetStateAction<boolean>>;
  part: number;
  setPart: Dispatch<SetStateAction<number>>;
  close: () => void;
}

const defaultContext: InterviewContextType = {
  creatingInterview: false,
  setCreatingInterview: () => { },
  part: 1,
  setPart: () => { },
  close: () => { },
};

const InterviewContext = createContext<InterviewContextType>(defaultContext);

export const InterviewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [creatingInterview, setCreatingInterview] = useState(false);
  const [part, setPart] = useState(1);
  const close =()=>{
    setCreatingInterview(false);
    setPart(1);
  }

  return (
    <InterviewContext.Provider value={{ creatingInterview, setCreatingInterview, part, setPart, close }}>
      {children}
    </InterviewContext.Provider>
  );
};

// Create a custom hook to use the context
export const useInterviewsContext = () => useContext(InterviewContext);
