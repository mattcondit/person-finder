import { FC } from 'react';
import { PeopleListItem } from './PeopleListItem';
import { Person } from '../types';

// TODO: improve performance using `react-window` for a recycled list:
// https://github.com/bvaughn/react-window

type PeopleListProps = {
  people: Array<Person>;
  searchString: string;
};

export const PeopleList : FC<PeopleListProps> = ({ people, searchString }) => {
  const filteredPeople = people.filter((person) => {
    return person.name.toLowerCase().includes(searchString.toLowerCase());
  });

  return (
    <ul>
      {filteredPeople.map((person) => (
        <PeopleListItem
          key={person.id}
          person={person}
        />
      ))}
    </ul>
  );
};