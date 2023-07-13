import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle } from './App.styled';

export class App extends Component {
  state = {
    phonebook: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contactList');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ phonebook: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.phonebook !== prevState.phonebook) {
      localStorage.setItem('contactList', JSON.stringify(this.state.phonebook));
    }
  }

  addContact = ({ name, number }) => {
    const unit = {
      id: nanoid(),
      name,
      number,
    };

    this.state.phonebook.find(
      unit => unit.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contact list.`)
      : this.setState(({ phonebook }) => ({ phonebook: [...phonebook, unit] }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, phonebook } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return phonebook.filter(unit =>
      unit.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(({ phonebook }) => ({
      phonebook: phonebook.filter(unit => unit.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contactsList={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}