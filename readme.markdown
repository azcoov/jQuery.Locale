#jQuery.Locale

jQuery.Locale is a jQuery based way to render a select list of countries that will render the country flag next to the selected country. The flags used in this plugin are from [Mark James and his FAMFAMFAM site](http://www.famfamfam.com/lab/icons/flags).

[working example](http://c9.io/azcoov/jquery_locale/workspace/Example.html) shows simple selects with change flags.
[working example](http://c9.io/azcoov/jquery_locale/workspace/Example_es.html) shows a select with a callback that sets a datepicker locate based on callback data.

##Usage

Include jQuery and `src/jquery.locale.js`.

	$('#mydiv').locale();

If you only want to render a specific list of flags, you can pass a list of flags in as an argument

	$('#mydiv').locale({
        'flags' : [{'name' : 'United States', 'code': 'us', 'region': 'en'}, {'name' : 'Mexico', 'code': 'mx', 'region': 'es'}]
    });

###Events

You can also trigger an event when a flag has been selected

    $('#mydiv').locale({
        callback: function(flag) {
            console.log(flag["name"]);
            console.log(flag["code"]);
            console.log(flag["region"]);
        }
    });

##Options

The following options are available:
-`showFlag` - Default is true. Set to false if you don't want to render the flag.
-`selectedFlag` - Set the selected flag in the select list. Default is U.S.
-`emptyIndex` - Add an empty item to the select list as the first item.
-`flags` - You can narrow down the number of flags by providing only the ones you want.
-`region` - The default language for use in things like a datepicker.
-`callback` - A funtction you want to call when the locale select has been changed. The selected flag is passed to your function.