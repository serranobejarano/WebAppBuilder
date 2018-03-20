define(['dojo/_base/declare', 'jimu/LayerStructure', 'jimu/BaseWidget'],
  function(declare, LayerStructure, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-customwidget',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      // postCreate: function() {
      //   this.inherited(arguments);
      //   console.log('postCreate');
      // },

      startup: function() {
        this.inherited(arguments);
        _mapa = this.map;
        _titulo = this.tituloDinamico;
        _tablaInformacion = this.tablaInformacionTabla;
        _tablaCapas = this.tablaListadoCapas;
        _longitud = this.map.itemInfo.itemData.operationalLayers.length;
        _subBloqueCapas = this.subBloqueCapas

      },

      onOpen: function() {
        _titulo.innerHTML = _mapa.itemInfo.item.title;
        _tablaInformacion.innerHTML += "<tr><td><p>Identificator: </p>" + _mapa.itemInfo.item.id + "</td></tr>"
        _tablaInformacion.innerHTML += "<tr><td><p>Type: </p>" + _mapa.itemInfo.item.type + "</td></tr>"
        _tablaInformacion.innerHTML += "<tr><td><p>Access: </p>" + _mapa.itemInfo.item.access + "</td></tr>"
        _tablaInformacion.innerHTML += "<tr><td><p>Tags: </p>" + _mapa.itemInfo.item.tags + "</td></tr>"

        if (_longitud != 0) {
          var layerStructure = LayerStructure.getInstance();
          layerStructure.traversal(function(layerNode) {
            console.log(layerNode);
            _tablaCapas.innerHTML += "<tr><td>" + layerNode.title + "</td><td>" + layerNode._layerInfo.id + "</td></tr>"
          });
        } else {
          _subBloqueCapas.style.display = "none";
        };

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