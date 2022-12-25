
import { useCallback, useMemo, useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(3);
  const [isShow, setIsShow] = useState(false);
  
  const doubleCount = useMemo(() => {
    return count * 2;
  },[count])

  const handleAddClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDeductClick = useCallback(() => {
    if (count > 3) {
      setCount((prevCount) => prevCount - 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count,doubleCount, isShow, handleAddClick, handleDeductClick, handleDisplay };
};
