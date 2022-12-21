import PropTypes from 'prop-types';
import { ListContact, ListItem, Button } from './ContactList.styled';

export default function ContactList({ listContacts, deleteContact }) {
  return (
    <ListContact>
      {listContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </ListContact>
  );
}

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  listContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
