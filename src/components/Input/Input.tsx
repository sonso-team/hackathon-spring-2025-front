import React, {
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import type { Validation } from '../../utils/validator';
import { Validator } from '../../utils/validator';
import './input.scss';

export interface InputPropsI {
  initialValue: string;
  type: string;
  validations: [Validation] | [];
  name: string;
  placeholder: string;
  className?: string;
  onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputRef {
  value: string;
  isDirty: boolean;
  isValueHidden: boolean;
  isError: boolean;
}

export const Input = forwardRef<InputRef, InputPropsI>((props, ref) => {
  const {
    initialValue,
    type,
    className,
    validations,
    name,
    placeholder,
    onChange,
  } = props;
  console.log(props);
  // Служебный ref для самого <input/>
  const inputEl = useRef<HTMLInputElement | null>(null);

  const [value, setValue] = useState<string>(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isValueHidden, setIsValueHidden] = useState<boolean>(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useImperativeHandle(
    ref,
    () => ({
      isDirty,
      isError: Object.values(errors).length !== 0,
      value,
      isValueHidden,
    }),
    [value],
  );

  useEffect(() => {
    setErrors({});
    validations.forEach((validation: Validation) => {
      const isError = Validator[validation.name](...[value, validation.params]);
      if (isError) {
        setErrors((prev) => ({
          ...prev,
          [validation.name]: validation.message,
        }));
      }
    });
  }, [value, validations]);

  const dynamicType = useMemo(() => {
    if (type !== 'password') {
      return type;
    }
    return isValueHidden ? 'password' : 'text';
  }, [type, isValueHidden]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsDirty(true);
    onChange(e);
    setValue(e.target.value);
  };

  // Пробрасываем наружу наш реальный input + дополнительные поля
  useImperativeHandle(ref, () => {
    // Если инпута ещё нет, вернём null (или можно выбросить ошибку)
    if (!inputEl.current) {
      return null;
    }

    // Объединяем всё: сам DOM-элемент + нужные нам поля
    return Object.assign(inputEl.current, {
      // «Дополняем» его любыми своими свойствами
      isDirty,
      isValueHidden,
      isError: Object.values(errors).length !== 0,
    });
  }, [isDirty, isValueHidden, errors]);

  return (
    <div className={`inputWrapper ${className || ''}`}>
      <input
        ref={inputEl}
        type={dynamicType}
        name={name}
        placeholder={placeholder}
        className="inputWrapper__input input"
        value={value}
        onChange={changeHandler}
      />
      {isDirty && (
        <div className="inputWrapper__errors">{Object.values(errors)?.[0]}</div>
      )}
    </div>
  );
});
