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

  return (
    <ul>
      {people.map((person) => {
        const shouldShow = searchString ? person.name.toLowerCase().includes(searchString.toLowerCase()): true;
          return <PeopleListItem
            key={person.id}
            person={person}
            hide={!shouldShow}
          />
      }
      )
      }
    </ul>
  );
};
