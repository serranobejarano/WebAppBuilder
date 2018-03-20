define(['dojo/_base/declare', 'jimu/BaseWidget'],


  function(declare, BaseWidget) {
    var contadorAperturas = 0;
    var contadorCierres = 0;

    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-ciclovida',


      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {
        this.inherited(arguments);
        console.log('postCreate');

        alert("Estado postCreate");
      },

      startup: function() {
        this.inherited(arguments);

        console.log('startup');

        alert("Estado startup");
      },

      onOpen: function() {
        console.log('onOpen');

        contadorAperturas = contadorAperturas + 1;
        alert("Estado de Open\n" + "Número de aperturas: " + contadorAperturas);
      },

      onClose: function() {
        console.log('onClose');
        contadorCierres = contadorCierres + 1;
        alert("Estado de Open\n" + "Número de cierres: " + contadorCierres);
      },

      onMinimize: function() {
        console.log('onMinimize');

        alert("Estado onMinimize");
      },

      onMaximize: function() {
        console.log('onMaximize');
        alert("Estado onMaximize");
      },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      resize: function() {
        console.log('resize');
        alert("Estado resize");
      }

      //methods to communication between widgets:

    });
  });