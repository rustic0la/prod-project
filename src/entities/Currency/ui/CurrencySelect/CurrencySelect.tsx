import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { FC, memo, useCallback } from 'react';

const options = [
  {
    value: Currency.RUB,
    content: Currency.RUB,
  },
  {
    value: Currency.EUR,
    content: Currency.EUR,
  },
  {
    value: Currency.USD,
    content: Currency.USD,
  },
];

interface CurrencySelectProps {
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({ value, onChange, readonly }) => {
    const onChangeHandler = useCallback(
      (val: string) => {
        onChange?.(val as Currency);
      },
      [onChange]
    );

    return (
      <Select
        label="Specify currency"
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  }
);
