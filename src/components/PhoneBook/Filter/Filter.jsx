import { StyledInput, StyledForm } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <StyledForm action="#">
      <StyledInput
        onChange={onChange}
        value={filter}
        name="filter"
        type="text"
      />
    </StyledForm>
  );
};

export default Filter;
