import PropTypes from 'prop-types';
import { Finder, Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Finder>
      <Label htmlFor="filterId">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        id="filterId"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Finder>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};