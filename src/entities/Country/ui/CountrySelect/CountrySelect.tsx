import { Select } from 'shared/ui/Select/Select';
import { FC, memo, useCallback } from 'react';
import { Country } from 'entities/Country';

const options = [
  {
    value: Country.Russia,
    content: Country.Russia,
  },
  {
    value: Country.USA,
    content: Country.USA,
  },
  {
    value: Country.Kazakhstan,
    content: Country.Kazakhstan,
  },
  {
    value: Country.Turkey,
    content: Country.Turkey,
  },
];

interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect: FC<CountrySelectProps> = memo(
  ({ value, onChange, readonly }) => {
    const onChangeHandler = useCallback(
      (val: string) => {
        onChange?.(val as Country);
      },
      [onChange]
    );

    return (
      <Select
        label="Specify country"
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  }
);
