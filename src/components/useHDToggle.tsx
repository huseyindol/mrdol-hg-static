import React, { useState } from "react";

type ToggleHook = {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

const useHDToggle = (initialValue: boolean): ToggleHook => {
  const [value, setValue] = useState<boolean>(initialValue);

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

export default useHDToggle;
