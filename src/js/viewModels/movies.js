define(['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
  function MoviesViewModel() {
    var self = this

    self.searchTerm = ko.observable('')
    self.categories = ko.observableArray([
      {
        name: 'Food',
        cards: [
          {
            name: 'Pizza',
            picture:
              'https://prd-images.trentapizza.ro/Products/Original/Diavola_-_Homepage_B-3224.jpg',
          },
          {
            name: 'Hamburger',
            picture:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoFa5LjBkFgL2XdA3-FF-iqwOumsq5HGOfg&usqp=CAU',
          },
          {
            name: 'Hotdog',
            picture:
              'https://www.quiktrip.com/app/uploads/2021/10/MicrosoftTeams-image-5.jpg',
          },
        ],
      },
      {
        name: 'Drinks',
        cards: [
          {
            name: 'Coca Cola',
            picture:
              'data:image/jpeg;base64,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',
          },
          {
            name: 'Pepsi',
            picture:
              'https://gomagcdn.ro/domains/cheffa.ro/files/product/original/pepsi-761286.png',
          },
        ],
      },
    ])

    self.filteredCategories = ko.computed(function () {
      var search = self.searchTerm().toLowerCase()
      if (!search) {
        return self.categories()
      } else {
        return ko.utils.arrayFilter(self.categories(), function (category) {
          return ko.utils.arrayFilter(category.cards, function (card) {
            return card.name.toLowerCase().indexOf(search) >= 0
          }).length
        })
      }
    })

    self.viewCard = function (card) {
      // Navigate to a separate page to view the details of the card
    }
  }

  return new MoviesViewModel()
})
