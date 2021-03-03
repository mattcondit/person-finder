import styled from '@emotion/styled';
import { FC } from 'react';

// TODO:: comply with a11y standards
// https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-text-fields

const PLACEHOLDER_TEXT = 'Type a name...';

const StyledSearchInput = styled.input`
  line-height: 1.5rem;
  letter-spacing: -0.015rem;
  width: 100%;
  height: 40px;
  margin-bottom: 43px;
  padding: 10px 16px;
  background-color: #EFEFEF;
  color: #393939;
  outline: none;
  border: none;
  border-radius: 4px;

  &::placeholder {
    color: #393939;
  }
`;

type SearchProps = {
  value: string;
  onChange: (str: string) => void;
};

export const Search : FC<SearchProps> = ({ value, onChange }) => (
  <div>
    <StyledSearchInput
      type="text"
      placeholder={PLACEHOLDER_TEXT}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);