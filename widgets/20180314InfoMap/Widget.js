define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-infomap',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {
        this.inherited(arguments);
        console.log('postCreate');
      },

      startup: function() {
        this.inherited(arguments);
        console.log('startup');

        console.log(this.map);
        this.infoTitle.innerHTML = "<p>Titulo</p>" + this.map.itemInfo.item.title;
        this.infoDescription.innerHTML = "<p>Description</p>" + this.map.itemInfo.item.description;

        var longitud = this.map.itemInfo.itemData.operationalLayers.length;
        if (longitud == 0) {
          this.infoLayers.innerHTML = "There are no Operational Layers on this map.";
        } else {
          for (var i = 0; i < longitud; i++) {
            this.infoLayers.innerHTML += "Layer " + i + ": " + this.map.itemInfo.itemData.operationalLayers[i].title + "<br>"
          }
        }


      },

      onOpen: function() {
        console.log('onOpen');

        console.log(this.map);
      },

      // onClose: function(){
      //   console.log('onClose');
      // },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

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

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });