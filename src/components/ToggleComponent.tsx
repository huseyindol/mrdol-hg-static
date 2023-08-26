import React from "react";

interface ToggleComponentProps {
  label: string;
  value: boolean;
  onChange: (newValue: boolean) => void;
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({
  label,
  value,
  onChange,
}) => {
  const handleToggle = () => {
    onChange(!value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" checked={value} onChange={handleToggle} />
    </div>
  );
};

export default ToggleComponent;
