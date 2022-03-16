import {types} from 'mobx-state-tree';
import {Platform} from 'react-native';

// Define a couple models
const Author = types.model({
  Title: types.string,
});

// Define a store just like a model
const RootStore = types.model({
  authors: types.array(Author),
});

// Instantiate a couple model instances
const jamon = Author.create({
  Title: 'Spiderman1',
});
const jamon1 = Author.create({
  Title: 'Spiderman2',
});

// Now instantiate the store!
export const rootStore = RootStore.create({
  authors: [jamon, jamon1],
});
