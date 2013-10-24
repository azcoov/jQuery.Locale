/*
 * Locale jQuery plugin
 * version 0.0.1
 *
 * Copyright ARE LAME, Billy Coover (coovtech.com)
 *
 */
 
(function($){
    
        var locale_idx = 0;
         
        $.fn.locale = function(options) {
        
            var flags = [
                {'name' : 'United States', 'code': 'us', 'region': 'en'}, 
                {'name' : 'Andorra', 'code': 'ad', 'region': ''},
                {'name' : 'United Arab Emirates', 'code': 'ae', 'region': ''},
                {'name' : 'Afghanistan', 'code': 'af', 'region': ''},
                {'name' : 'Antigua and Barbuda', 'code': 'ag', 'region': ''},
                {'name' : 'Anguilla', 'code': 'ai', 'region': ''},
                {'name' : 'Albania', 'code': 'al', 'region': ''},
                {'name' : 'Armenia', 'code': 'am', 'region': ''},
                {'name' : 'Netherlands Antilles', 'code': 'an', 'region': ''},
                {'name' : 'Angola', 'code': 'ao', 'region': ''},
                {'name' : 'Argentina', 'code': 'ar', 'region': ''}, 
                {'name' : 'American Samoa', 'code': 'as', 'region': ''},
                {'name' : 'Austria', 'code': 'at', 'region': ''},
                {'name' : 'Australia', 'code': 'au', 'region': ''},
                {'name' : 'Aruba', 'code': 'aw', 'region': ''},
                {'name' : 'Aland Islands', 'code': 'ax', 'region': ''},
                {'name' : 'Azerbaijan', 'code': 'az', 'region': ''},
                {'name' : 'Bosnia and Herzegovina', 'code': ''},
                {'name' : 'Barbados', 'code': 'bb', 'region': ''},
                {'name' : 'Bangladesh', 'code': 'bd', 'region': ''},
                {'name' : 'Belgium', 'code': 'be', 'region': ''},
                {'name' : 'Burkina Faso', 'code': 'bf', 'region': ''},
                {'name' : 'Bulgaria', 'code': 'bg', 'region': ''},
                {'name' : 'Bahrain', 'code': 'bh', 'region': ''},
                {'name' : 'Burundi', 'code': 'bi', 'region': ''},
                {'name' : 'Benin', 'code': 'bj', 'region': ''},
                {'name' : 'Bermuda', 'code': 'bm', 'region': ''},
                {'name' : 'Brunei Darussalam', 'code': 'bn', 'region': ''},
                {'name' : 'Bolivia', 'code': 'bo', 'region': ''},
                {'name' : 'Brazil', 'code': 'br', 'region': ''},
                {'name' : 'Bahamas', 'code': 'bs', 'region': ''},
                {'name' : 'Bhutan', 'code': 'bt', 'region': ''},
                {'name' : 'Bouvet Island', 'code': 'bv', 'region': ''},
                {'name' : 'Botswana', 'code': 'bw', 'region': ''},
                {'name' : 'Belarus', 'code': 'by', 'region': ''},
                {'name' : 'Belize', 'code': 'bz', 'region': ''},
                {'name' : 'Canada', 'code': 'ca', 'region': ''},
                {'name' : 'Catalonia', 'code': 'catalonia', 'region': ''},
                {'name' : 'Cocos (Keeling) Islands', 'code': 'cc', 'region': ''},
                {'name' : 'Congo, Democratic Republic', 'code': 'cd', 'region': ''},
                {'name' : 'Central African Republic', 'code': 'cf', 'region': ''},
                {'name' : 'Congo', 'code': 'cg', 'region': ''},
                {'name' : 'Switzerland', 'code': 'ch', 'region': ''},
                {'name' : "Cote D'Ivoire (Ivory Coast)", 'code': 'ci', 'region': ''},
                {'name' : 'Cook Islands', 'code': 'ck', 'region': ''},
                {'name' : 'Chile', 'code': 'cl', 'region': ''},
                {'name' : 'Cameroon', 'code': 'cm', 'region': ''},
                {'name' : 'China', 'code': 'cn', 'region': ''},
                {'name' : 'Colombia', 'code': 'co', 'region': ''},
                {'name' : 'Costa Rica', 'code': 'cr', 'region': ''},
                {'name' : 'Czechoslovakia (former)', 'code': 'cs', 'region': ''},
                {'name' : 'Cuba', 'code': 'cu', 'region': ''},
                {'name' : 'Cape Verde', 'code': 'cv', 'region': ''},
                {'name' : 'Christmas Island', 'code': 'cx', 'region': ''},
                {'name' : 'Cyprus', 'code': 'cy', 'region': ''},
                {'name' : 'Czech Republic', 'code': 'cz', 'region': ''},
                {'name' : 'Germany', 'code': 'de', 'region': ''},
                {'name' : 'Djibouti', 'code': 'dj', 'region': ''},
                {'name' : 'Denmark', 'code': 'dk', 'region': ''},
                {'name' : 'Dominica', 'code': 'dm', 'region': ''},
                {'name' : 'Dominican Republic', 'code': 'do', 'region': ''},
                {'name' : 'Algeria', 'code': 'dz', 'region': ''},
                {'name' : 'Ecuador', 'code': 'ec', 'region': ''},
                {'name' : 'Estonia', 'code': 'ee', 'region': ''},
                {'name' : 'Egypt', 'code': 'eg', 'region': ''},
                {'name' : 'Western Sahara', 'code': 'eh', 'region': ''},
                {'name' : 'Eritrea', 'code': 'er', 'region': ''},
                {'name' : 'Spain', 'code': 'es', 'region': ''},
                {'name' : 'Ethiopia', 'code': 'et', 'region': ''},
                {'name' : 'European Union', 'code': 'eu', 'region': ''},
                //{'name' : 'Mexico', 'code': 'fam'},
                {'name' : 'Finland', 'code': 'fi', 'region': ''},
                {'name' : 'Fiji', 'code': 'fj', 'region': ''},
                {'name' : 'Falkland Islands (Malvinas)', 'code': 'fk', 'region': ''},
                {'name' : 'Micronesia', 'code': 'fm', 'region': ''},
                {'name' : 'Faroe Islands', 'code': 'fo', 'region': ''},
                {'name' : 'France', 'code': 'fr', 'region': ''},
                {'name' : 'Gabon', 'code': 'ga', 'region': ''},
                {'name' : 'Great Britain (UK)', 'code': 'gb', 'region': ''},
                {'name' : 'Grenada', 'code': 'gd', 'region': ''},
                {'name' : 'Georgia', 'code': 'ge', 'region': ''},
                {'name' : 'French Guiana', 'code': 'gf', 'region': ''},
                {'name' : 'Ghana', 'code': 'gh', 'region': ''},
                {'name' : 'Gibraltar', 'code': 'gi', 'region': ''},
                {'name' : 'Greenland', 'code': 'gl', 'region': ''},
                {'name' : 'Gambia', 'code': 'gm', 'region': ''},
                {'name' : 'Guinea', 'code': 'gn', 'region': ''},
                {'name' : 'Guadeloupe', 'code': 'gp', 'region': ''},
                {'name' : 'Equatorial Guinea', 'code': 'gq', 'region': ''},
                {'name' : 'Greece', 'code': 'gr', 'region': ''},
                {'name' : 'S. Georgia and S. Sandwich Isls.', 'code': 'gs', 'region': ''},
                {'name' : 'Guatemala', 'code': 'gt', 'region': ''},
                {'name' : 'Guam', 'code': 'gu', 'region': ''},
                {'name' : 'Guinea-Bissau', 'code': 'gw', 'region': ''},
                {'name' : 'Guyana', 'code': 'gy', 'region': ''},
                {'name' : 'Hong Kong', 'code': 'hk', 'region': ''},
                {'name' : 'Heard and McDonald Islands', 'code': 'hm', 'region': ''},
                {'name' : 'Honduras', 'code': 'hn', 'region': ''},
                {'name' : 'Croatia (Hrvatska)', 'code': 'hr', 'region': ''},
                {'name' : 'Haiti', 'code': 'ht', 'region': ''},
                {'name' : 'Hungary', 'code': 'hu', 'region': ''},
                {'name' : 'Indonesia', 'code': 'id', 'region': ''},
                {'name' : 'Ireland', 'code': 'ie', 'region': ''},
                {'name' : 'Israel', 'code': 'il', 'region': ''},
                {'name' : 'India', 'code': 'in', 'region': ''},
                {'name' : 'British Indian Ocean Territory', 'code': 'io', 'region': ''},
                {'name' : 'Iraq', 'code': 'iq', 'region': ''},
                {'name' : 'Iran', 'code': 'ir', 'region': ''},
                {'name' : 'Iceland', 'code': 'is', 'region': ''},
                {'name' : 'Italy', 'code': 'it', 'region': ''},
                {'name' : 'Jamaica', 'code': 'jm', 'region': ''},
                {'name' : 'Jordan', 'code': 'jo', 'region': ''},
                {'name' : 'Japan', 'code': 'jp', 'region': ''},
                {'name' : 'Kenya', 'code': 'ke', 'region': ''},
                {'name' : 'Cambodia', 'code': 'kh', 'region': ''},
                {'name' : 'Kiribati', 'code': 'ki', 'region': ''},
                {'name' : 'Comoros', 'code': 'km', 'region': ''},
                {'name' : 'Saint Kitts and Nevis', 'code': 'kn', 'region': ''},
                {'name' : 'Korea (North)', 'code': 'kp', 'region': ''},
                {'name' : 'Korea (South)', 'code': 'kr', 'region': ''},
                {'name' : 'Kuwait', 'code': 'kw', 'region': ''},
                {'name' : 'Cayman Islands', 'code': 'ky', 'region': ''},
                {'name' : 'Kazakhstan', 'code': 'kz', 'region': ''},
                {'name' : 'Laos', 'code': 'la', 'region': ''},
                {'name' : 'Lebanon', 'code': 'lb', 'region': ''},
                {'name' : 'Saint Lucia', 'code': 'lc', 'region': ''},
                {'name' : 'Liechtenstein', 'code': 'li', 'region': ''},
                {'name' : 'Sri Lanka', 'code': 'lk', 'region': ''},
                {'name' : 'Liberia', 'code': 'lr', 'region': ''},
                {'name' : 'Lesotho', 'code': 'ls', 'region': ''},
                {'name' : 'Lithuania', 'code': 'lt', 'region': ''},
                {'name' : 'Luxembourg', 'code': 'lu', 'region': ''},
                {'name' : 'Latvia', 'code': 'lv', 'region': ''},
                {'name' : 'Libya', 'code': 'ly', 'region': ''},
                {'name' : 'Morocco', 'code': 'ma', 'region': ''},
                {'name' : 'Monaco ', 'code': 'mc', 'region': ''},
                {'name' : 'Moldova', 'code': 'md', 'region': ''},
                {'name' : 'Montenegro', 'code': 'me', 'region': ''},
                {'name' : 'Madagascar', 'code': 'mg', 'region': ''},
                {'name' : 'Marshall Islands', 'code': 'mh', 'region': ''},
                {'name' : 'F.Y.R.O.M. (Macedonia)', 'code': 'mk', 'region': ''},
                {'name' : 'Mali', 'code': 'ml', 'region': ''},
                {'name' : 'Myanmar', 'code': 'mm', 'region': ''},
                {'name' : 'Mongolia', 'code': 'mn', 'region': ''},
                {'name' : 'Macau', 'code': 'mo', 'region': ''},
                {'name' : 'Northern Mariana Islands', 'code': 'mp', 'region': ''},
                {'name' : 'Martinique', 'code': 'mq', 'region': ''},
                {'name' : 'Mauritania', 'code': 'mr', 'region': ''},
                {'name' : 'Montserrat', 'code': 'ms', 'region': ''},
                {'name' : 'Malta', 'code': 'mt', 'region': ''},
                {'name' : 'Mauritius', 'code': 'mu', 'region': ''},
                {'name' : 'Maldives', 'code': 'mv', 'region': ''},
                {'name' : 'Malawi', 'code': 'mw', 'region': ''},
                {'name' : 'Mexico', 'code': 'mx', 'region': 'en'},
                {'name' : 'Malaysia', 'code': 'my', 'region': ''},
                {'name' : 'Mozambique', 'code': 'mz', 'region': ''},
                {'name' : 'Namibia', 'code': 'na', 'region': ''},
                {'name' : 'New Caledonia', 'code': 'nc', 'region': ''},
                {'name' : 'Niger', 'code': 'ne', 'region': ''},
                {'name' : 'Norfolk Island', 'code': 'nf', 'region': ''},
                {'name' : 'Nigeria', 'code': 'ng', 'region': ''},
                {'name' : 'Nicaragua', 'code': 'ni', 'region': ''},
                {'name' : 'Netherlands', 'code': 'nl', 'region': ''},
                {'name' : 'Norway', 'code': 'no', 'region': ''},
                {'name' : 'Nepal', 'code': 'np', 'region': ''},
                {'name' : 'Nauru', 'code': 'nr', 'region': ''},
                {'name' : 'Niue', 'code': 'nu', 'region': ''},
                {'name' : 'New Zealand (Aotearoa)', 'code': 'nz', 'region': ''},
                {'name' : 'Oman ', 'code': 'om', 'region': ''},
                {'name' : 'Panama', 'code': 'pa', 'region': ''},
                {'name' : 'Peru', 'code': 'pe', 'region': ''},
                {'name' : 'French Polynesia', 'code': 'pf', 'region': ''},
                {'name' : 'Papua New Guinea', 'code': 'pg', 'region': ''},
                {'name' : 'Philippines', 'code': 'ph', 'region': ''},
                {'name' : 'Pakistan', 'code': 'pk', 'region': ''},
                {'name' : 'Poland', 'code': 'pl', 'region': ''},
                {'name' : 'St. Pierre and Miquelon', 'code': 'pm', 'region': ''},
                {'name' : 'Pitcairn', 'code': 'pn', 'region': ''},
                {'name' : 'Puerto Rico', 'code': 'pr', 'region': ''},
                {'name' : 'Palestinian Territory', 'code': 'ps', 'region': ''},
                {'name' : 'Portugal', 'code': 'pt', 'region': ''},
                {'name' : 'Palau', 'code': 'pw', 'region': ''},
                {'name' : 'Paraguay', 'code': 'py', 'region': ''},
                {'name' : 'Qatar', 'code': 'qa', 'region': ''},
                {'name' : 'Reunion', 'code': 're', 'region': ''},
                {'name' : 'Romania ', 'code': 'ro', 'region': ''},
                {'name' : 'Rwanda ', 'code': 'rw', 'region': ''},
                {'name' : 'Serbia ', 'code': 'rs', 'region': ''},
                {'name' : 'Russian Federation', 'code': 'ru', 'region': ''},
                {'name' : 'Saudi Arabia', 'code': 'sa', 'region': ''},
                {'name' : 'Seychelles ', 'code': 'sc', 'region': ''},
                {'name' : 'Sudan', 'code': 'sd', 'region': ''},
                {'name' : 'Sweden', 'code': 'se', 'region': ''},
                {'name' : 'Singapore', 'code': 'sg', 'region': ''},
                {'name' : 'St. Helena', 'code': 'sh', 'region': ''},
                {'name' : 'Slovenia', 'code': 'si', 'region': ''},
                {'name' : 'Svalbard & Jan Mayen Islands', 'code': 'sj', 'region': ''},
                {'name' : 'Slovak Republic', 'code': 'sk', 'region': ''},
                {'name' : 'Sierra Leone', 'code': 'sl', 'region': ''},
                {'name' : 'San Marino', 'code': 'sm', 'region': ''},
                {'name' : 'Senegal', 'code': 'sn', 'region': ''},
                {'name' : 'Somalia', 'code': 'so', 'region': ''},
                {'name' : 'Suriname', 'code': 'sr', 'region': ''},
                {'name' : 'Sao Tome and Principe', 'code': 'st', 'region': ''},
                {'name' : 'El Salvador', 'code': 'sv', 'region': ''},
                {'name' : 'Syria', 'code': 'sy', 'region': ''},
                {'name' : 'Swaziland', 'code': 'sz', 'region': ''},
                {'name' : 'Turks and Caicos Islands', 'code': 'tc', 'region': ''},
                {'name' : 'Chad ', 'code': 'td', 'region': ''},
                {'name' : 'French Southern Territories', 'code': 'tf', 'region': ''},
                {'name' : 'Togo', 'code': 'tg', 'region': ''},
                {'name' : 'Thailand', 'code': 'th', 'region': ''},
                {'name' : 'Tajikistan', 'code': 'tj', 'region': ''},
                {'name' : 'Tokelau', 'code': 'tk', 'region': ''},
                {'name' : 'Turkmenistan', 'code': 'tm', 'region': ''},
                {'name' : 'Tunisia', 'code': 'tn', 'region': ''},
                {'name' : 'Tonga', 'code': 'to', 'region': ''},
                {'name' : 'Turkey', 'code': 'tr', 'region': ''},
                {'name' : 'Trinidad and Tobago', 'code': 'tt', 'region': ''},
                {'name' : 'Tuvalu', 'code': 'tv', 'region': ''},
                {'name' : 'Taiwan', 'code': 'tw', 'region': ''},
                {'name' : 'Tanzania', 'code': 'tz', 'region': ''},
                {'name' : 'Ukraine', 'code': 'ua', 'region': ''},
                {'name' : 'Uganda', 'code': 'ug', 'region': ''},
                {'name' : 'US Minor Outlying Islands', 'code': 'um', 'region': ''},
                {'name' : 'Uruguay', 'code': 'uy', 'region': ''},
                {'name' : 'Uzbekistan', 'code': 'uz', 'region': ''},
                {'name' : 'Vatican City State (Holy See)', 'code': 'va', 'region': ''},
                {'name' : 'Saint Vincent & the Grenadines', 'code': 'vc', 'region': ''},
                {'name' : 'Venezuela', 'code': 've', 'region': ''},
                {'name' : 'British Virgin Islands', 'code': 'vg', 'region': ''},
                {'name' : 'Virgin Islands (U.S.)', 'code': 'vi', 'region': ''},
                {'name' : 'Viet Nam', 'code': 'vn', 'region': ''},
                {'name' : 'Vanuatu', 'code': 'vu', 'region': ''},
                {'name' : 'Wales', 'code': 'wales', 'region': ''},
                {'name' : 'Wallis and Futuna Islands', 'code': 'wf', 'region': ''},
                {'name' : 'Samoa', 'code': 'ws', 'region': ''},
                {'name' : 'Yemen', 'code': 'ye', 'region': ''},
                {'name' : 'Mayotte', 'code': 'yt', 'region': ''},
                {'name' : 'South Africa', 'code': 'za', 'region': ''},
                {'name' : 'Zambia', 'code': 'zm', 'region': ''},
                {'name' : 'Zimbabwe', 'code': 'zw', 'region': ''}
            ];
        
            var settings = {
                showFlag: true,
                selectedFlag: 'us',
                emptyIndex: false,
                flags: flags,
                region: 'en'
            }
            
            var options = $.extend({
                    callback: function() {}
                }, 
                settings, 
                options
            );
 
            return this.each(function() {
                
                locale_idx ++;
             
                var o = options;
                    
                var object = $(this);
                
                if(o.showFlag) {
                    var img = document.createElement('img');
                    img.src = 'images/us.png';
                    img.id = 'locale-image_' + locale_idx;
                    $(this).append(img);
                }
                
                var select = document.createElement('select');
                select.name = 'locale';
                select.id = 'locale-select_' + locale_idx;
                $(this).append(select);
                
                if(o.emptyIndex) {
                    var empty = document.createElement('option');
                    empty.text = '';
                    empty.value = '';
                    select.options.add(empty);
                }
                
                for(f in o.flags) {
                    var option = document.createElement('option');
                    option.text = o.flags[f].name;
                    option.value = o.flags[f].code;
                    option.className = "flag";
                    select.options.add(option);
                }
                
                $(select).bind('change', function() {
                    if(o.showFlag) {
                        var idx = this.id.substring(14,this.id.length);
                        var image = $("#locale-image_" + idx);
                        var selectedLocale = $(this).val();
                        var i = ArrayIndexOf(o.flags, function(obj) {
                            return obj.code == selectedLocale;
                        });
                        var flag = o.flags[i];
                        $(image).attr('src', "images/" + selectedLocale + ".png");
                        options.callback.call(this, flag);
                    }
                });
             
            });
 		};
         
        function ArrayIndexOf(a, fnc) {
            if (!fnc || typeof (fnc) != 'function') {
                return -1;
            }
            if (!a || !a.length || a.length < 1) return -1;
            for (var i = 0; i < a.length; i++) {
                if (fnc(a[i])) return i;
            }
            return -1;
        };
     
})(jQuery);
