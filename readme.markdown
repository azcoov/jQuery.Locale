#jQuery.Locale

jQuery.Locale is a jQuery based way to render a select list of countries that will render the country flag next to the selected country. The flags used in this plugin are from [Mark James and his FAMFAMFAM site](http://www.famfamfam.com/lab/icons/flags).

##Usage

Include jQuery and `src/jquery.locale.js`.

	$('#mydiv').locale();

If you only want to render a specific list of flags, you can pass a list of flags in as an argument

	$('#mydiv').locale({
            'flags' : [{'name' : 'United States', 'code': 'us'}, {'name' : 'Mexico', 'code': 'mx'}]
        });

###Events

You can also trigger an event when a flag has been selected

	$(document).bind('change.locale', function() { alert('locale select changed'); });

##Options

The following options are available:
-`showFlag` - Default is true. Set to false if you don't want to render the flag.
-`selectedFlag` - Set the selected flag in the select list. Default is U.S.
-`emptyIndex` - Add an empty item to the select list as the first item.
-`flags` - You can narrow down the number of flags by providing only the ones you want.

## Known Bugs
The image used to display the tag is not unique per instance. So, if you have multiple locale select lists and you change any one of the selected locals, the first flag will change, regardless of which select list was used.