import { classNames, Mods } from 'shared/lib/helpers/classNames';
import React, { FC, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  value?: string | number;
  onChange?: (v: string) => void;
  readonly?: boolean;
}

export const Input: FC<InputProps> = memo(
  ({ value, onChange, type = 'text', readonly, ...props }: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const mods: Mods = {
      [cls.readonly]: readonly || false,
    };

    return (
      <div className={classNames(cls.Input, mods)}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          readOnly={readonly}
          {...props}
        />
      </div>
    );
  }
);
