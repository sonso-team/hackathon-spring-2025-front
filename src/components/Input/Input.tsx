import React, { useEffect, useMemo, useState } from 'react';
import type { Validation } from '../../utils/validator';
import { Validator } from '../../utils/validator';

export interface InputPropsI {
  initialValue: string | number;
  type: string;
  validations: [Validation];
  name: string;
  placeholder: string;
  className: string;
  onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputPropsI> = ({ ...props }) => {
  const {
    initialValue,
    type,
    className,
    validations,
    name,
    placeholder,
    onChange,
  } = props;

  const [value, setValue] = useState<string | number>(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isValueHidden, setIsValueHidden] = useState<boolean>(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsDirty(true);
    setErrors({});
    validations.forEach((validation, index) => {
      const isError = Validator[validation.name](
        ...[validation.value, validation.params],
      );
      if (isError) {
        setErrors((errors) => ({
          ...errors,
          [validation.name]: validation.message,
        }));
      }
    });
  }, [value]);

  const dynamicType = useMemo(() => {
    if (type !== 'password') {
      return type;
    }
    return isValueHidden ? 'password' : 'text';
  }, [type, isValueHidden]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e);
    setValue(e.target.value);
  };

  return (
    <div className={`inputWrapper ${className}}`}>
      <input
        type={dynamicType}
        name={name}
        placeholder={placeholder}
        className="inputWrapper__input input"
        value={value}
        onChange={changeHandler}
      />
      {isDirty && <div className="inputWrapper__errors"></div>}
    </div>
  );
};
