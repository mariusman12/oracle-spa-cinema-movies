/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define([
  '../accUtils',
  'knockout',
  'text!../movieList.json',
  'ojs/ojarraydataprovider',
  'ojs/ojknockout',
  'ojs/ojchart',
], function (accUtils, ko, data, ArrayDataProvider) {
  function StatisticsViewModel() {
    self = this

    self.threeDValue = ko.observable('off')
    /* chart data */
    self.dataProvider = new ArrayDataProvider(JSON.parse(data), {
      keyAttributes: 'id',
    })

    this.connected = () => {
      accUtils.announce('Customers page loaded.', 'assertive')
      document.title = 'Customers'
      // Implement further logic if needed
    }

    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    this.disconnected = () => {
      // Implement if needed
    }

    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    this.transitionCompleted = () => {
      // Implement if needed
    }
  }

  /*
   * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
   * return a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.
   */
  return StatisticsViewModel
})
