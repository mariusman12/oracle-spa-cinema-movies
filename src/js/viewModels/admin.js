define([
  '../accUtils',
  'knockout',
  'ojs/ojarraydataprovider',
  'ojs/ojbufferingdataprovider',
  'ojs/ojkeyset',
  'text!../movieList.json',
  'ojs/ojknockout',
  'ojs/ojinputtext',
  'ojs/ojinputnumber',

  'ojs/ojformlayout',
  'ojs/ojtoolbar',
  'ojs/ojtable',
], function (
  accUtils,
  ko,
  ArrayDataProvider,
  BufferingDataProvider,
  ojkeyset_1,
  movieListData
) {
  function adminViewModel() {
    self = this

    self.moviewListArray = JSON.parse(movieListData)
    self.movieObservableArray = ko.observableArray(self.moviewListArray)
    self.dataprovider = new BufferingDataProvider(
      new ArrayDataProvider(self.movieObservableArray, {
        keyAttributes: 'id',
      })
    )
    self.isEmptyTable = ko.observable(false)

    self.inputID = ko.observable()
    self.inputName = ko.observable()
    self.inputLongDescription = ko.observable()
    self.inputShortDescription = ko.observable()
    self.inputRating = ko.observable()
    self.inputPrice = ko.observable()
    self.inputCategory = ko.observable()
    self.inputStock = ko.observable()

    // Add a new row
    self.addRow = () => {
      const movie = {
        id: self.inputID(),
        name: self.inputName(),
        longDescription: self.inputLongDescription(),
        shortDescription: self.inputShortDescription(),
        rating: self.inputRating(),
        price: self.inputPrice(),
        category: self.inputCategory(),
        stock: self.inputStock(),
      }
      self.dataprovider.addItem({
        metadata: { key: movie.id },
        data: movie,
      })
    }
    // Update the selected row
    self.updateRow = () => {
      const element = document.getElementById('table')
      const currentRow = element.currentRow
      if (currentRow != null) {
        const key = self.inputID()
        const newData = {
          id: self.inputID(),
          name: self.inputName(),
          longDescription: self.inputLongDescription(),
          shortDescription: self.inputShortDescription(),
          rating: self.inputRating(),
          price: self.inputPrice(),
          category: self.inputCategory(),
          stock: self.inputStock(),
        }
        self.dataprovider.updateItem({
          metadata: { key: key },
          data: newData,
        })
      }
    }
    // Remove the selected row
    self.removeRow = () => {
      const element = document.getElementById('table')
      const currentRow = element.currentRow
      if (currentRow != null) {
        const dataObj = element.getDataForVisibleRow(currentRow.rowIndex)
        self.dataprovider.removeItem({
          metadata: { key: dataObj.key },
          data: dataObj.data,
        })
        self.dataprovider.getTotalSize().then(
          function (value) {
            if (value == 0) {
              self.isEmptyTable(true)
            }
          }.bind(this)
        )
        // Clear the table selection
        element.selected = {
          row: new ojkeyset_1.KeySetImpl(),
          column: new ojkeyset_1.KeySetImpl(),
        }
      }
    }

    // Listener for updating the form when row selection changes in the table
    self.firstSelectedRowChangedListener = (event) => {
      const itemContext = event.detail.value
      if (itemContext && itemContext.data) {
        const movie = itemContext.data
        self.inputID(movie.id)
        self.inputName(movie.name)
        self.inputLongDescription(movie.longDescription)
        self.inputShortDescription(movie.shortDescription)
        self.inputRating(movie.rating)
        self.inputPrice(movie.price)
        self.inputCategory(movie.category)
        self.inputStock(movie.stock)
      }
    }

    self.isEmptyTable(self.dataprovider.isEmpty() === 'yes')

    self.connected = () => {
      accUtils.announce('Movie admin loaded.', 'assertive')
      document.title = 'Movie Admin'
      // Implement further logic if needed
    }

    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    self.disconnected = () => {
      // Implement if needed
    }

    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    self.transitionCompleted = () => {
      // Implement if needed
    }
  }

  /*
   * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
   * return a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.
   */
  return adminViewModel
})
