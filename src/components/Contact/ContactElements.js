import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem;
    width: 100%;
  }

  input:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (min-width: 576px) {
    label {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 992px) {
    label {
      font-size: 1.5rem;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
