
import { useCallback, useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(3);
  const [isShow, setIsShow] = useState(false);

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

  return { count, isShow, handleAddClick, handleDeductClick, handleDisplay };
};
