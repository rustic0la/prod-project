import { classNames, Mods } from 'shared/lib/helpers/classNames';
import { ChangeEvent, FC, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  label: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = ({
  label,
  options,
  onChange,
  value,
  readonly,
}) => {
  const optionsList = useMemo(
    () =>
      options?.map((option) => (
        <option className={cls.option} value={option.value} key={option.value}>
          {option.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {};

  return (
    <div className={classNames(cls.wrapper, mods, [])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        disabled={readonly || false}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};
