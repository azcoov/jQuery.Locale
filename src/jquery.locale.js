/*
 * Locale jQuery plugin
 * version 0.0.1
 *
 * Copyright ARE LAME, Billy Coover (coovtech.com)
 *
 */
 
(function($){
         
        $.fn.locale = function(options) {
        
            //var flags = new Array();
            var flags = [
                {'name' : 'United States', 'code': 'us'}, 
                {'name' : 'Andorra', 'code': 'ad'},
                {'name' : 'United Arab Emirates', 'code': 'ae'},
                {'name' : 'Afghanistan', 'code': 'af'},
                {'name' : 'Antigua and Barbuda', 'code': 'ag'},
                {'name' : 'Anguilla', 'code': 'ai'},
                {'name' : 'Albania', 'code': 'al'},
                {'name' : 'Armenia', 'code': 'am'},
                {'name' : 'Netherlands Antilles', 'code': 'an'},
                {'name' : 'Angola', 'code': 'ao'},
                {'name' : 'Argentina', 'code': 'ar'}, 
                {'name' : 'American Samoa', 'code': 'as'},
                {'name' : 'Austria', 'code': 'at'},
                {'name' : 'Australia', 'code': 'au'},
                {'name' : 'Aruba', 'code': 'aw'},
                {'name' : 'Aland Islands', 'code': 'ax'},
                {'name' : 'Azerbaijan', 'code': 'az'},
                {'name' : 'Bosnia and Herzegovina', 'code': 'ba'},
                {'name' : 'Barbados', 'code': 'bb'},
                {'name' : 'Bangladesh', 'code': 'bd'},
                {'name' : 'Belgium', 'code': 'be'},
                {'name' : 'Burkina Faso', 'code': 'bf'},
                {'name' : 'Bulgaria', 'code': 'bg'},
                {'name' : 'Bahrain', 'code': 'bh'},
                {'name' : 'Burundi', 'code': 'bi'},
                {'name' : 'Benin', 'code': 'bj'},
                {'name' : 'Bermuda', 'code': 'bm'},
                {'name' : 'Brunei Darussalam', 'code': 'bn'},
                {'name' : 'Bolivia', 'code': 'bo'},
                {'name' : 'Brazil', 'code': 'br'},
                {'name' : 'Bahamas', 'code': 'bs'},
                {'name' : 'Bhutan', 'code': 'bt'},
                {'name' : 'Bouvet Island', 'code': 'bv'},
                {'name' : 'Botswana', 'code': 'bw'},
                {'name' : 'Belarus', 'code': 'by'},
                {'name' : 'Belize', 'code': 'bz'},
                {'name' : 'Canada', 'code': 'ca'},
                {'name' : 'Catalonia', 'code': 'catalonia'},
                {'name' : 'Cocos (Keeling) Islands', 'code': 'cc'},
                {'name' : 'Congo, Democratic Republic', 'code': 'cd'},
                {'name' : 'Central African Republic', 'code': 'cf'},
                {'name' : 'Congo', 'code': 'cg'},
                {'name' : 'Switzerland', 'code': 'ch'},
                {'name' : "Cote D'Ivoire (Ivory Coast)", 'code': 'ci'},
                {'name' : 'Cook Islands', 'code': 'ck'},
                {'name' : 'Chile', 'code': 'cl'},
                {'name' : 'Cameroon', 'code': 'cm'},
                {'name' : 'China', 'code': 'cn'},
                {'name' : 'Colombia', 'code': 'co'},
                {'name' : 'Costa Rica', 'code': 'cr'},
                {'name' : 'Czechoslovakia (former)', 'code': 'cs'},
                {'name' : 'Cuba', 'code': 'cu'},
                {'name' : 'Cape Verde', 'code': 'cv'},
                {'name' : 'Christmas Island', 'code': 'cx'},
                {'name' : 'Cyprus', 'code': 'cy'},
                {'name' : 'Czech Republic', 'code': 'cz'},
                {'name' : 'Germany', 'code': 'de'},
                {'name' : 'Djibouti', 'code': 'dj'},
                {'name' : 'Denmark', 'code': 'dk'},
                {'name' : 'Dominica', 'code': 'dm'},
                {'name' : 'Dominican Republic', 'code': 'do'},
                {'name' : 'Algeria', 'code': 'dz'},
                {'name' : 'Ecuador', 'code': 'ec'},
                {'name' : 'Estonia', 'code': 'ee'},
                {'name' : 'Egypt', 'code': 'eg'},
                {'name' : 'Western Sahara', 'code': 'eh'},
                {'name' : 'Eritrea', 'code': 'er'},
                {'name' : 'Spain', 'code': 'es'},
                {'name' : 'Ethiopia', 'code': 'et'},
                {'name' : 'European Union', 'code': 'eu'},
                //{'name' : 'Mexico', 'code': 'fam'},
                {'name' : 'Finland', 'code': 'fi'},
                {'name' : 'Fiji', 'code': 'fj'},
                {'name' : 'Falkland Islands (Malvinas)', 'code': 'fk'},
                {'name' : 'Micronesia', 'code': 'fm'},
                {'name' : 'Faroe Islands', 'code': 'fo'},
                {'name' : 'France', 'code': 'fr'},
                {'name' : 'Gabon', 'code': 'ga'},
                {'name' : 'Great Britain (UK)', 'code': 'gb'},
                {'name' : 'Grenada', 'code': 'gd'},
                {'name' : 'Georgia', 'code': 'ge'},
                {'name' : 'French Guiana', 'code': 'gf'},
                {'name' : 'Ghana', 'code': 'gh'},
                {'name' : 'Gibraltar', 'code': 'gi'},
                {'name' : 'Greenland', 'code': 'gl'},
                {'name' : 'Gambia', 'code': 'gm'},
                {'name' : 'Guinea', 'code': 'gn'},
                {'name' : 'Guadeloupe', 'code': 'gp'},
                {'name' : 'Equatorial Guinea', 'code': 'gq'},
                {'name' : 'Greece', 'code': 'gr'},
                {'name' : 'S. Georgia and S. Sandwich Isls.', 'code': 'gs'},
                {'name' : 'Guatemala', 'code': 'gt'},
                {'name' : 'Guam', 'code': 'gu'},
                {'name' : 'Guinea-Bissau', 'code': 'gw'},
                {'name' : 'Guyana', 'code': 'gy'},
                {'name' : 'Hong Kong', 'code': 'hk'},
                {'name' : 'Heard and McDonald Islands', 'code': 'hm'},
                {'name' : 'Honduras', 'code': 'hn'},
                {'name' : 'Croatia (Hrvatska)', 'code': 'hr'},
                {'name' : 'Haiti', 'code': 'ht'},
                {'name' : 'Hungary', 'code': 'hu'},
                {'name' : 'Indonesia', 'code': 'id'},
                {'name' : 'Ireland', 'code': 'ie'},
                {'name' : 'Israel', 'code': 'il'},
                {'name' : 'India', 'code': 'in'},
                {'name' : 'British Indian Ocean Territory', 'code': 'io'},
                {'name' : 'Iraq', 'code': 'iq'},
                {'name' : 'Iran', 'code': 'ir'},
                {'name' : 'Iceland', 'code': 'is'},
                {'name' : 'Italy', 'code': 'it'},
                {'name' : 'Jamaica', 'code': 'jm'},
                {'name' : 'Jordan', 'code': 'jo'},
                {'name' : 'Japan', 'code': 'jp'},
                {'name' : 'Kenya', 'code': 'ke'},
                {'name' : 'Cambodia', 'code': 'kh'},
                {'name' : 'Kiribati', 'code': 'ki'},
                {'name' : 'Comoros', 'code': 'km'},
                {'name' : 'Saint Kitts and Nevis', 'code': 'kn'},
                {'name' : 'Korea (North)', 'code': 'kp'},
                {'name' : 'Korea (South)', 'code': 'kr'},
                {'name' : 'Kuwait', 'code': 'kw'},
                {'name' : 'Cayman Islands', 'code': 'ky'},
                {'name' : 'Kazakhstan', 'code': 'kz'},
                {'name' : 'Laos', 'code': 'la'},
                {'name' : 'Lebanon', 'code': 'lb'},
                {'name' : 'Saint Lucia', 'code': 'lc'},
                {'name' : 'Liechtenstein', 'code': 'li'},
                {'name' : 'Sri Lanka', 'code': 'lk'},
                {'name' : 'Liberia', 'code': 'lr'},
                {'name' : 'Lesotho', 'code': 'ls'},
                {'name' : 'Lithuania', 'code': 'lt'},
                {'name' : 'Luxembourg', 'code': 'lu'},
                {'name' : 'Latvia', 'code': 'lv'},
                {'name' : 'Libya', 'code': 'ly'},
                {'name' : 'Morocco', 'code': 'ma'},
                {'name' : 'Monaco ', 'code': 'mc'},
                {'name' : 'Moldova', 'code': 'md'},
                {'name' : 'Montenegro', 'code': 'me'},
                {'name' : 'Madagascar', 'code': 'mg'},
                {'name' : 'Marshall Islands', 'code': 'mh'},
                {'name' : 'F.Y.R.O.M. (Macedonia)', 'code': 'mk'},
                {'name' : 'Mali', 'code': 'ml'},
                {'name' : 'Myanmar', 'code': 'mm'},
                {'name' : 'Mongolia', 'code': 'mn'},
                {'name' : 'Macau', 'code': 'mo'},
                {'name' : 'Northern Mariana Islands', 'code': 'mp'},
                {'name' : 'Martinique', 'code': 'mq'},
                {'name' : 'Mauritania', 'code': 'mr'},
                {'name' : 'Montserrat', 'code': 'ms'},
                {'name' : 'Malta', 'code': 'mt'},
                {'name' : 'Mauritius', 'code': 'mu'},
                {'name' : 'Maldives', 'code': 'mv'},
                {'name' : 'Malawi', 'code': 'mw'},
                {'name' : 'Mexico', 'code': 'mx'},
                {'name' : 'Malaysia', 'code': 'my'},
                {'name' : 'Mozambique', 'code': 'mz'},
                {'name' : 'Namibia', 'code': 'na'},
                {'name' : 'New Caledonia', 'code': 'nc'},
                {'name' : 'Niger', 'code': 'ne'},
                {'name' : 'Norfolk Island', 'code': 'nf'},
                {'name' : 'Nigeria', 'code': 'ng'},
                {'name' : 'Nicaragua', 'code': 'ni'},
                {'name' : 'Netherlands', 'code': 'nl'},
                {'name' : 'Norway', 'code': 'no'},
                {'name' : 'Nepal', 'code': 'np'},
                {'name' : 'Nauru', 'code': 'nr'},
                {'name' : 'Niue', 'code': 'nu'},
                {'name' : 'New Zealand (Aotearoa)', 'code': 'nz'},
                {'name' : 'Oman ', 'code': 'om'},
                {'name' : 'Panama', 'code': 'pa'},
                {'name' : 'Peru', 'code': 'pe'},
                {'name' : 'French Polynesia', 'code': 'pf'},
                {'name' : 'Papua New Guinea', 'code': 'pg'},
                {'name' : 'Philippines', 'code': 'ph'},
                {'name' : 'Pakistan', 'code': 'pk'},
                {'name' : 'Poland', 'code': 'pl'},
                {'name' : 'St. Pierre and Miquelon', 'code': 'pm'},
                {'name' : 'Pitcairn', 'code': 'pn'},
                {'name' : 'Puerto Rico', 'code': 'pr'},
                {'name' : 'Palestinian Territory', 'code': 'ps'},
                {'name' : 'Portugal', 'code': 'pt'},
                {'name' : 'Palau', 'code': 'pw'},
                {'name' : 'Paraguay', 'code': 'py'},
                {'name' : 'Qatar', 'code': 'qa'},
                {'name' : 'Reunion', 'code': 're'},
                {'name' : 'Romania ', 'code': 'ro'},
                {'name' : 'Serbia ', 'code': 'rs'},
                {'name' : 'Russian Federation', 'code': 'ru'},
                {'name' : 'Saudi Arabia', 'code': 'rw'},
                {'name' : 'Seychelles ', 'code': 'sc'},
                {'name' : 'Sudan', 'code': 'sd'},
                {'name' : 'Sweden', 'code': 'se'},
                {'name' : 'Singapore', 'code': 'sg'},
                {'name' : 'St. Helena', 'code': 'sh'},
                {'name' : 'Slovenia', 'code': 'si'},
                {'name' : 'Svalbard & Jan Mayen Islands', 'code': 'sj'},
                {'name' : 'Slovak Republic', 'code': 'sk'},
                {'name' : 'Sierra Leone', 'code': 'sl'},
                {'name' : 'San Marino', 'code': 'sm'},
                {'name' : 'Senegal', 'code': 'sn'},
                {'name' : 'Somalia', 'code': 'so'},
                {'name' : 'Suriname', 'code': 'sr'},
                {'name' : 'Sao Tome and Principe', 'code': 'st'},
                {'name' : 'El Salvador', 'code': 'sv'},
                {'name' : 'Syria', 'code': 'sy'},
                {'name' : 'Swaziland', 'code': 'sz'},
                {'name' : 'Turks and Caicos Islands', 'code': 'tc'},
                {'name' : 'Chad ', 'code': 'td'},
                {'name' : 'French Southern Territories', 'code': 'tf'},
                {'name' : 'Togo', 'code': 'tg'},
                {'name' : 'Thailand', 'code': 'th'},
                {'name' : 'Tajikistan', 'code': 'tj'},
                {'name' : 'Tokelau', 'code': 'tk'},
                {'name' : 'Turkmenistan', 'code': 'tm'},
                {'name' : 'Tunisia', 'code': 'tn'},
                {'name' : 'Tonga', 'code': 'to'},
                {'name' : 'Turkey', 'code': 'tr'},
                {'name' : 'Trinidad and Tobago', 'code': 'tt'},
                {'name' : 'Tuvalu', 'code': 'tv'},
                {'name' : 'Taiwan', 'code': 'tw'},
                {'name' : 'Tanzania', 'code': 'tz'},
                {'name' : 'Ukraine', 'code': 'ua'},
                {'name' : 'Uganda', 'code': 'ug'},
                {'name' : 'US Minor Outlying Islands', 'code': 'um'},
                {'name' : 'Uruguay', 'code': 'uy'},
                {'name' : 'Uzbekistan', 'code': 'uz'},
                {'name' : 'Vatican City State (Holy See)', 'code': 'va'},
                {'name' : 'Saint Vincent & the Grenadines', 'code': 'vc'},
                {'name' : 'Venezuela', 'code': 've'},
                {'name' : 'British Virgin Islands', 'code': 'vg'},
                {'name' : 'Virgin Islands (U.S.)', 'code': 'vi'},
                {'name' : 'Viet Nam', 'code': 'vn'},
                {'name' : 'Vanuatu', 'code': 'vu'},
                {'name' : 'Wales', 'code': 'wales'},
                {'name' : 'Wallis and Futuna Islands', 'code': 'wf'},
                {'name' : 'Samoa', 'code': 'ws'},
                {'name' : 'Yemen', 'code': 'ye'},
                {'name' : 'Mayotte', 'code': 'yt'},
                {'name' : 'South Africa', 'code': 'za'},
                {'name' : 'Zambia', 'code': 'zm'},
                {'name' : 'Zimbabwe', 'code': 'zw'}
            ];
        
            var settings = {
                showFlag: true,
                selectedFlag: 'us',
                emptyIndex: false,
                flags: flags
            }
            
            var options =  $.extend(settings, options);
 
            return this.each(function() {
             
                var o = options;
                    
                var object = $(this);
                
                if(o.showFlag) {
                    var img = document.createElement('img');
                    img.src = 'images/us.png';
                    img.id = 'locale-image';
                    $(this).append(img);
                }
                
                var select = document.createElement('select');
                select.name = 'locale'; 
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
                        var image = $("#locale-image");
                        var selectedLocale = $(this).val();
                        $("#locale-image").attr('src', "images/" + selectedLocale + ".png");
                    }
                });
             
            });
            
            $.extend($.locale, {
                change: function() {
                    $(document).trigger('change.locale');
                }
            });
 		};
     
})(jQuery);