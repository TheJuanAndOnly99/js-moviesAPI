const { createAutoComplete } = require('../autocomplete');

it('Shows an autocomplete', () => {
  createAutoComplete({
    root         : document.querySelector('#target'),
    fetchData() {
      return [ { Title: 'Avengers' }, { Title: 'The Dark Knight' }, { Title: 'Kung Fu Panda' } ];
    },
    renderOption(movie) {
      return movie.Title;
    }
  });

  const dropdown = document.querySelector('.dropdown');

  expect(dropdown.className).not.to.include('is-active');
});
