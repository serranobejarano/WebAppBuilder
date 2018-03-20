define([
    'dojo/_base/declare',
    'jimu/BaseWidgetSetting'
  ],
  function(declare, BaseWidgetSetting) {

    return declare([BaseWidgetSetting], {
      baseClass: 'jimu-widget-configurable-setting',

      postCreate: function() {

        this.setConfig(this.config);
      },

      setConfig: function(config) {
        this.textNode.value = config.configText;
      },

      getConfig: function() {

        return {
          configText: this.textNode.value
        };
      }
    });
  });