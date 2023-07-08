import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Btn } from './ContactForm.styled';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid(8);
  numberId = nanoid(8);

  handelChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handelSubmit}>

        <Label htmlFor={this.nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          id={this.nameId}
          value={name}
          onChange={this.handelChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor={this.numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          id={this.numberId}
          value={number}
          onChange={this.handelChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Btn type="submit">Add contact</Btn>

      </Form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};