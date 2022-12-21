import { InputFilter } from './FilterContacts.styled';

export default function FilterContacts({ textTitel, filterData, onChange }) {
  return (
    <>
      <h2>{textTitel}</h2>
      <InputFilter
        type="text"
        name="filter"
        value={filterData}
        onChange={onChange}
      />
    </>
  );
}
