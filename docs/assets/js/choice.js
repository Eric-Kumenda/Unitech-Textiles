document.addEventListener('DOMContentLoaded', function () {
    new Choices('#subject', {
      classNames: {
        containerInner: ['form-select', , 'rounded-pill']
      },
      placeholder: true,
      searchEnabled: false // optional: disable search for short lists
    });
  });