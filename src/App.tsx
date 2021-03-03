import React, { useState } from 'react';
import data from './assets/mockData.json';
import { Header } from './components/Header';
import { PeopleList } from './components/PeopleList';
import { PageDescription } from './components/PageDescription';
import { PageTitle } from './components/PageTitle';
import { Search } from './components/Search';
import styled from '@emotion/styled';

// TODO: write tests for filter behavior

const PAGE_MARGIN = 132;
const LIST_MARGIN = 290;

// NOTE: using `padding` instead of `margin` so the top border is full-width.
const StyledApp = styled.div`
  border-top: 3px solid #33DBDB;
  padding: 0 ${PAGE_MARGIN}px;
`;

const Main = styled.main`
  margin: 0 ${LIST_MARGIN}px;
`;

function App() {
  const [searchString, setSearchString] = useState('');

  // TODO: memoize `Search` callback for perf optimization?
  // There's currently some input lag, likely due to rerender on every change.

  return (
    <StyledApp>
      <Header />

      <Main>
        <PageTitle />
        <PageDescription />
        <Search
          value={searchString}
          onChange={setSearchString}
        />
        <PeopleList
          people={data}
          searchString={searchString}
        />
      </Main>

    </StyledApp>
  );
}

export default App;
