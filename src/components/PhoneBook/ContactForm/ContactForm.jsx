import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledInput,
  Styledlabel,
  StyledButton,
} from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerSubmitForm = e => {
    const id = nanoid();
    e.preventDefault();
    onSubmit({ name, number, id });
    resetForm();
  };

  const handlerChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }

    // this.setState({ [name]: value });
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <StyledForm onSubmit={handlerSubmitForm}>
        <Styledlabel htmlFor="name">Name</Styledlabel>
        <StyledInput
          onChange={handlerChange}
          type="text"
          value={name}
          id="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Styledlabel htmlFor="number">Number</Styledlabel>
        <StyledInput
          type="tel"
          onChange={handlerChange}
          value={number}
          id="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
};

export default ContactForm;

// class oldContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handlerChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handlerSubmitForm = e => {
//     const { name, number } = this.state;
//     const id = nanoid();
//     e.preventDefault();
//     this.props.onSubmit({ name, number, id });
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     const { handlerSubmitForm, handlerChange } = this;
//     return (
//       <>
//         <StyledForm onSubmit={handlerSubmitForm}>
//           <Styledlabel htmlFor="name">Name</Styledlabel>
//           <StyledInput
//             onChange={handlerChange}
//             type="text"
//             value={name}
//             id="name"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <Styledlabel htmlFor="number">Number</Styledlabel>
//           <StyledInput
//             type="tel"
//             onChange={handlerChange}
//             value={number}
//             id="number"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <StyledButton type="submit">Add contact</StyledButton>
//         </StyledForm>
//       </>
//     );
//   }
// }
