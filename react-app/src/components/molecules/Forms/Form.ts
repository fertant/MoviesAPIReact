import styled from 'styled-components';
import Select from 'react-select'

import { ITheme } from '../../theme/ITheme';

export const FormElement = styled.form`
  width: 80%;
`;

export const FormTitle = styled.h2`
  margin: 60px 0 20px 0;
  font-size: 24px;
  font-weight: 100;
  text-transform: uppercase;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
  margin: 20px 0 60px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const FieldLabel = styled.label`
  color: ${(props: ITheme) => props.theme.color_a};
  padding-bottom: 10px;
  text-transform: uppercase;
`;

export const FieldText = styled.input`
  background-color: ${(props: ITheme) => props.theme.color_b};
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 20px;
  padding: 10px;
`;

export const FieldError = styled.span`
  color: ${(props: ITheme) => props.theme.color_a};
`;

export const StyledSelect = styled(Select)`
  div:nth-child(2) :active {
    background-color: ${(props: ITheme) => props.theme.color_c};
  }

  > div {
    background-color: ${(props: ITheme) => props.theme.color_b};
    border: none;
  }
`;

export default FormFooter;
