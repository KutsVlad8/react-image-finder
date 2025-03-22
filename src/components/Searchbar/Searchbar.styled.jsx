import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 600px;

  padding: 10px 20px;
  margin: 0 auto;
  margin-top: 20px;

  background-color: #3f51b5;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease-in-out;

  &:focus-within {
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);
  }
`;

export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin-right: 8px;
  border: none;

  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  width: 100%;
  font: inherit;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  background-color: #fff;
  transition:
    border-color 0.3s ease,
    padding-left 0.3s ease;

  &::placeholder {
    font-size: 16px;
    color: #aaa;
  }

  &:focus {
    border-color: #007bff;
    padding-left: 12px; /* Расширение при фокусе */
  }
`;
