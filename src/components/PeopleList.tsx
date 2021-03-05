import { FC, useMemo } from 'react';
import { PeopleListItem } from './PeopleListItem';
import { Person } from '../types';

// TODO: improve performance using `react-window` for a recycled list:
// https://github.com/bvaughn/react-window

type PeopleListProps = {
  people: Array<Person>;
  searchString: string;
};

const fastFilter = (arr: Array<any>, condition: Function) => {
  const ret = []
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      ret.push(arr[i])
    }
  }
  return ret;
}
const createFilterPeople = () => {
  const memoLookup: {
    [key: string]: Array<Person>,
  } = {

  };
  return (people: Array<Person>, searchString: string) => {
    if (searchString === '') {
      return people;
    }
    if (memoLookup[searchString]){
      return memoLookup[searchString]
    }
    if (searchString.length === 1) {
      const re = new RegExp(`\\b${searchString}\\b`, 'gi');
      const result = fastFilter(people, (person: Person) => person.name.match(re))

      memoLookup[searchString] = result;
      return result;
    }
    if (searchString.length > 1) {
      const previousResult = memoLookup[searchString.slice(0, -1)];
      const re = new RegExp(`/(.*)${searchString}(.*)/`, 'gi');
      const matchFn = (person: Person) => person.name.match(re)
      let result;
      if (!previousResult) {
        // weird, should have it
        result = fastFilter(people, matchFn)

        memoLookup[searchString] = result;
        return result;
      }
      else {
        result = fastFilter(previousResult, matchFn);
      }
      memoLookup[searchString] = result;
      return result;
    }
    return people;
  }
}
    // return person.name.toLowerCase().includes(searchString.toLowerCase());

export const PeopleList : FC<PeopleListProps> = ({ people, searchString }) => {
  const filterPeople = useMemo(() => createFilterPeople(), [])
  const filteredPeople = filterPeople(people, searchString);

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
