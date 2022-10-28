import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/slice';
import { StyledList, StyledItem, StyledIconSpan } from './Contacts.styled';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Contacts() {
  // достаем из store массив контактов
  const contacts = useSelector(state => state.contacts);

  //достаем из сторе значение фильтра
  const filter = useSelector(state => state.filter);

  //инициализируем доставщика экшОна
  const dispatch = useDispatch();

  //нормализуем к нижнему регистру значение фильтра
  let normalizeFilter = filter.toLowerCase();

  // фильтруем контакты по фильтру
  let filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <StyledList>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <StyledItem key={id}>
            {name} : {number}
            <StyledIconSpan onClick={() => dispatch(removeContact(id))}>
              <FaRegTrashAlt />
            </StyledIconSpan>
          </StyledItem>
        );
      })}
    </StyledList>
  );
}
