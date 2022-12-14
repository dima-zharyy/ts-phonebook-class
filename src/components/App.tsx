import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css";
import { nanoid } from "nanoid";
import { IAppState, IFormState } from "../types/appTypes";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
export class App extends Component<{}, IAppState> {
  state = {
    contacts: initialContacts,
    filter: "",
  };

  onSubmit = (data: IFormState) => {
    const isAlreadyInContacts = this.state.contacts.some(
      ({ name }) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );

    if (isAlreadyInContacts) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const id = nanoid(5);
    const newContact = { id, ...data };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: event.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  handleClickDel = (id: string) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filteredContacts();

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2 className={css.title}>Contacts</h2>
        <div className={css.contactsWrap}>
          <Filter onChange={this.handleFilterChange} value={filter} />
          <ContactList
            contacts={filteredContacts}
            onClick={this.handleClickDel}
          />
        </div>
      </div>
    );
  }
}
