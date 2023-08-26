import React from "react";

interface ToggleHook {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

const useToggle = (initialValue: boolean): ToggleHook => {
  const [value, setValue] = React.useState<boolean>(initialValue);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
};

export default useToggle;
