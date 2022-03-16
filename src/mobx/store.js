import {types} from 'mobx-state-tree';

const Author = types.model({
  Title: types.string,
  About: types.string,
});

const RootStore = types.model({
  authors: types.array(Author),
});

const movie = Author.create({
  Title: 'Spiderman',
  About:
    'After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.',
});
const movie2 = Author.create({
  Title: 'The Great Hack',
  About:
    'The Cambridge Analytica scandal is examined through the roles of several affected persons.',
});

export const rootStore = RootStore.create({
  authors: [movie, movie2],
});
