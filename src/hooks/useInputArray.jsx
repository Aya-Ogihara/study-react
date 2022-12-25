import { useCallback, useState } from 'react';

export const useInputArray = () => {
  const [text, setText] = useState('');
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('Too long!');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAddItem = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert('Already exist, please enter different value');
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAddItem}
}
