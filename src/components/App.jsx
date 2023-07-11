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

  // Добавить контакт
  addContact = ({ name, number }) => {
    const unit = {
      id: nanoid(),
      name,
      number,
    };

    // Проверка повтора имени контакта
    this.state.phonebook.find(
      unit => unit.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contact list.`)
      : this.setState(({ phonebook }) => ({ phonebook: [...phonebook, unit] }));
  };

  // Изменение набoра строки фильтра
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // Показать контакты согласно поиска фильтра
  getVisibleContacts = () => {
    const { filter, phonebook } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return phonebook.filter(unit =>
      unit.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Удалить контакт 
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