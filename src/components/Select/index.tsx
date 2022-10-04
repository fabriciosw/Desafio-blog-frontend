/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-arrow-callback */
import * as React from 'react';
import SelectUnstyled, { SelectUnstyledProps, selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { alpha, styled } from '@mui/material';

const inputColor = '#17171A';
const textsColor = '#EAEAEA';
const focusColor = '#4b5efb';

const StyledButton = styled('button')(
  () => `
  font-family: Nunito, IBM Plex Sans, sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  min-height: 58px;
  min-width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: #2e373f 2px solid;
  text-align: left;
  line-height: 1.5;
  background: ${inputColor};
  color: ${textsColor};

  &.${selectUnstyledClasses.expanded}{
    outline: 2px solid ${focusColor};
    box-shadow: ${alpha(focusColor, 0.25)} 0 0 0 0.4rem;
    border-color: focusColor;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    box-shadow: #2e373f 0 0 0 2px;

  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${focusColor};
    outline: 1px solid ${focusColor};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled('ul')(
  () => `
  font-family: Nunito,IBM Plex Sans, sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  max-height: 320px;
  border-radius: 8px;
  overflow: auto;
  background: ${inputColor};
  color: ${textsColor};

  &:focus {
    box-shadow: #2e373f 0 0 0 2px;
  }
  `
);

const StyledOption = styled(OptionUnstyled)(
  () => `
  list-style: none;
  padding: 12px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 8px;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: #3C4AC7;
    color: ${textsColor};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #2e373f;
    color: ${textsColor};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #3C4AC7;
    color: ${textsColor};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${textsColor};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #2e373f;
    color: ${textsColor};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  width: 100%;
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect<TValue extends {}>(
  props: SelectUnstyledProps<TValue>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const components: SelectUnstyledProps<TValue>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
}) as <TValue extends {}>(props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLButtonElement>) => JSX.Element;

interface IOption {
  name: string;
  value: string | number;
}

interface Props {
  selectOptions: IOption[];
  defaultValue?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<EventTarget> | null, newValue: string | number | null) => void;
}

const Select: React.FunctionComponent<Props> = ({
  selectOptions,
  defaultValue,
  onChange,
  value,
}: Props): React.ReactElement => (
  <div style={{ position: 'relative' }}>
    <CustomSelect defaultValue={defaultValue || ''} value={value} onChange={onChange}>
      <StyledOption value="">Selecione uma opção</StyledOption>

      {React.Children.toArray(
        [...selectOptions].map(({ name: optName, value: optValue }) => (
          <StyledOption value={optValue}>{optName}</StyledOption>
        ))
      )}
    </CustomSelect>
  </div>
);

export default Select;
