import React, {
  useEffect,
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
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
  // и, если надо, ещё какие-то методы: focus(): void;
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

  // Служебный ref для самого <input/>
  const inputEl = useRef<HTMLInputElement | null>(null);

  const [value, setValue] = useState<string>(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isValueHidden, setIsValueHidden] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setIsDirty(true);
    setErrors({});
    validations.forEach((validation) => {
      const isError = Validator[validation.name](
        ...[validation.value, validation.params],
      );
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
      {isDirty && <div className="inputWrapper__errors"></div>}
    </div>
  );
});
