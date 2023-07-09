import PropTypes from 'prop-types';
import { Stats, StatsItem, Item, Btn } from './ContactList.styled';

const ContactList = ({ contactsList, onDeleteContact }) => (
  <Stats>
    {contactsList.map(({ id, name, number }) => (
      <StatsItem key={id}>
        <Item>{name}:</Item>
        <Item>{number}</Item>
        <Btn type="button" onClick={() => onDeleteContact(id)}>Delete</Btn>
      </StatsItem>
    ))}
  </Stats>
);

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};