import { classNames } from 'shared/lib/helpers/classNames';
import React, { FC, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  value?: string;
  onChange?: (v: string) => void;
}

export const Input: FC<InputProps> = memo(
  ({ value, onChange, type = 'text', ...props }) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={classNames(cls.Input)}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          {...props}
        />
      </div>
    );
  }
);
