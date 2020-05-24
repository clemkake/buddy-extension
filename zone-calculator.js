
    function get_bs_time(a){
        var BusinessTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
        BusinessTime = new Date(BusinessTime);
        return BusinessTime.toLocaleString();
    }

    function timeZone(a){
        var aryIannaTimeZones =
        [{
            '0':'Europe/Andorra',
            'GMT (UTC +0:00)':'Asia/Dubai',
            '0':'Asia/Kabul',
            '0':'Europe/Tirane',
            '0':'Asia/Yerevan',
            '0':'Antarctica/Casey',
            '0':'Antarctica/Davis',
            '0':'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
            '0':'Antarctica/Mawson',
            '0':'Antarctica/Palmer',
            '0':'Antarctica/Rothera',
            '0':'Antarctica/Syowa',
            '0':'Antarctica/Troll',
            '0':'Antarctica/Vostok',
            '0':'America/Argentina/Buenos_Aires',
            '0':'America/Argentina/Cordoba',
            '0':'America/Argentina/Salta',
            '0':'America/Argentina/Jujuy',
            '0':'America/Argentina/Tucuman',
            '0':'America/Argentina/Catamarca',
            '0':'America/Argentina/La_Rioja',
            '0':'America/Argentina/San_Juan',
            '0':'America/Argentina/Mendoza',
            '0':'America/Argentina/San_Luis',
            '0':'America/Argentina/Rio_Gallegos',
            '0':'America/Argentina/Ushuaia',
            '0':'Pacific/Pago_Pago',
            '0':'Europe/Vienna',
            '0':'Australia/Lord_Howe',
            '0':'Antarctica/Macquarie',
            '0':'Australia/Hobart',
            '0':'Australia/Currie',
            '0':'Australia/Melbourne',
            '0':'Australia/Sydney',
            '0':'Australia/Broken_Hill',
            'AEST (UTC +10:00)':'Australia/Brisbane',
            '0':'Australia/Lindeman',
            '0':'Australia/Adelaide',
            'ACST (UTC +9:30)':'Australia/Darwin',
            'AWST (UTC +8:00)':'Australia/Perth',
            '0':'Australia/Eucla',
            '0':'Asia/Baku',
            '0':'America/Barbados',
            '0':'Asia/Dhaka',
            '0':'Europe/Brussels',
            '0':'Europe/Sofia',
            '0':'Atlantic/Bermuda',
            '0':'Asia/Brunei',
            '0':'America/La_Paz',
            '0':'America/Noronha',
            '0':'America/Belem',
            '0':'America/Fortaleza',
            '0':'America/Recife',
            '0':'America/Araguaina',
            '0':'America/Maceio',
            '0':'America/Bahia',
            '0':'America/Sao_Paulo',
            '0':'America/Campo_Grande',
            '0':'America/Cuiaba',
            '0':'America/Santarem',
            '0':'America/Porto_Velho',
            '0':'America/Boa_Vista',
            '0':'America/Manaus',
            '0':'America/Eirunepe',
            '0':'America/Rio_Branco',
            '0':'America/Nassau',
            '0':'Asia/Thimphu',
            '0':'Europe/Minsk',
            '0':'America/Belize',
            '0':'America/St_Johns',
            '0':'America/Halifax',
            '0':'America/Glace_Bay',
            '0':'America/Moncton',
            '0':'America/Goose_Bay',
            '0':'America/Blanc-Sablon',
            'EDT (UTC -4:00)':'America/Toronto',
            '0':'America/Nipigon',
            '0':'America/Thunder_Bay',
            '0':'America/Iqaluit',
            '0':'America/Pangnirtung',
            '0':'America/Atikokan',
            '0':'America/Winnipeg',
            '0':'America/Rainy_River',
            '0':'America/Resolute',
            '0':'America/Rankin_Inlet',
            '0':'America/Regina',
            '0':'America/Swift_Current',
            '0':'America/Edmonton',
            '0':'America/Cambridge_Bay',
            '0':'America/Yellowknife',
            '0':'America/Inuvik',
            '0':'America/Creston',
            '0':'America/Dawson_Creek',
            '0':'America/Fort_Nelson',
            '0':'America/Vancouver',
            '0':'America/Whitehorse',
            '0':'America/Dawson',
            '0':'Indian/Cocos',
            '0':'Europe/Zurich',
            '0':'Africa/Abidjan',
            '0':'Pacific/Rarotonga',
            '0':'America/Santiago',
            '0':'America/Punta_Arenas',
            '0':'Pacific/Easter',
            '0':'Asia/Shanghai',
            '0':'Asia/Urumqi',
            '0':'America/Bogota',
            '0':'America/Costa_Rica',
            '0':'America/Havana',
            '0':'Atlantic/Cape_Verde',
            '0':'America/Curacao',
            '0':'Indian/Christmas',
            '0':'Asia/Nicosia',
            '0':'Asia/Famagusta',
            '0':'Europe/Prague',
            '0':'Europe/Berlin',
            '0':'Europe/Copenhagen',
            '0':'America/Santo_Domingo',
            '0':'Africa/Algiers',
            '0':'America/Guayaquil',
            '0':'Pacific/Galapagos',
            '0':'Europe/Tallinn',
            '0':'Africa/Cairo',
            '0':'Africa/El_Aaiun',
            '0':'Europe/Madrid',
            '0':'Africa/Ceuta',
            '0':'Atlantic/Canary',
            '0':'Europe/Helsinki',
            '0':'Pacific/Fiji',
            '0':'Atlantic/Stanley',
            '0':'Pacific/Chuuk',
            '0':'Pacific/Pohnpei',
            '0':'Pacific/Kosrae',
            '0':'Atlantic/Faroe',
            '0':'Europe/Paris',
            'BST (UTC +1:00)':'Europe/London',
            '0':'Asia/Tbilisi',
            '0':'America/Cayenne',
            '0':'Africa/Accra',
            '0':'Europe/Gibraltar',
            '0':'America/Godthab',
            '0':'America/Danmarkshavn',
            '0':'America/Scoresbysund',
            '0':'America/Thule',
            '0':'Europe/Athens',
            '0':'Atlantic/South_Georgia',
            '0':'America/Guatemala',
            '0':'Pacific/Guam',
            '0':'Africa/Bissau',
            '0':'America/Guyana',
            'HKT (UTC +8:00)':'Asia/Hong_Kong',
            '0':'America/Tegucigalpa',
            '0':'America/Port-au-Prince',
            '0':'Europe/Budapest',
            '0':'Asia/Jakarta',
            '0':'Asia/Pontianak',
            '0':'Asia/Makassar',
            '0':'Asia/Jayapura',
            '0':'Europe/Dublin',
            '0':'Asia/Jerusalem',
            'IST (UTC +5:30)':'Asia/Kolkata',
            '0':'Indian/Chagos',
            '0':'Asia/Baghdad',
            '0':'Asia/Tehran',
            '0':'Atlantic/Reykjavik',
            '0':'Europe/Rome',
            '0':'America/Jamaica',
            '0':'Asia/Amman',
            '0':'Asia/Tokyo',
            '0':'Africa/Nairobi',
            '0':'Asia/Bishkek',
            '0':'Pacific/Tarawa',
            '0':'Pacific/Enderbury',
            '0':'Pacific/Kiritimati',
            '0':'Asia/Pyongyang',
            '0':'Asia/Seoul',
            '0':'Asia/Almaty',
            '0':'Asia/Qyzylorda',
            '0':'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
            '0':'Asia/Aqtobe',
            '0':'Asia/Aqtau',
            '0':'Asia/Atyrau',
            '0':'Asia/Oral',
            '0':'Asia/Beirut',
            '0':'Asia/Colombo',
            '0':'Africa/Monrovia',
            '0':'Europe/Vilnius',
            '0':'Europe/Luxembourg',
            '0':'Europe/Riga',
            '0':'Africa/Tripoli',
            '0':'Africa/Casablanca',
            '0':'Europe/Monaco',
            '0':'Europe/Chisinau',
            '0':'Pacific/Majuro',
            '0':'Pacific/Kwajalein',
            '0':'Asia/Yangon',
            '0':'Asia/Ulaanbaatar',
            '0':'Asia/Hovd',
            '0':'Asia/Choibalsan',
            '0':'Asia/Macau',
            '0':'America/Martinique',
            '0':'Europe/Malta',
            '0':'Indian/Mauritius',
            '0':'Indian/Maldives',
            '0':'America/Mexico_City',
            '0':'America/Cancun',
            '0':'America/Merida',
            '0':'America/Monterrey',
            '0':'America/Matamoros',
            '0':'America/Mazatlan',
            '0':'America/Chihuahua',
            '0':'America/Ojinaga',
            '0':'America/Hermosillo',
            '0':'America/Tijuana',
            '0':'America/Bahia_Banderas',
            '0':'Asia/Kuala_Lumpur',
            '0':'Asia/Kuching',
            '0':'Africa/Maputo',
            '0':'Africa/Windhoek',
            '0':'Pacific/Noumea',
            '0':'Pacific/Norfolk',
            '0':'Africa/Lagos',
            '0':'America/Managua',
            '0':'Europe/Amsterdam',
            '0':'Europe/Oslo',
            '0':'Asia/Kathmandu',
            '0':'Pacific/Nauru',
            '0':'Pacific/Niue',
            '0':'Pacific/Auckland',
            '0':'Pacific/Chatham',
            '0':'America/Panama',
            '0':'America/Lima',
            '0':'Pacific/Tahiti',
            '0':'Pacific/Marquesas',
            '0':'Pacific/Gambier',
            '0':'Pacific/Port_Moresby',
            '0':'Pacific/Bougainville',
            '0':'Asia/Manila',
            '0':'Asia/Karachi',
            '0':'Europe/Warsaw',
            '0':'America/Miquelon',
            '0':'Pacific/Pitcairn',
            '0':'America/Puerto_Rico',
            '0':'Asia/Gaza',
            '0':'Asia/Hebron',
            '0':'Europe/Lisbon',
            '0':'Atlantic/Madeira',
            '0':'Atlantic/Azores',
            '0':'Pacific/Palau',
            '0':'America/Asuncion',
            '0':'Asia/Qatar',
            '0':'Indian/Reunion',
            '0':'Europe/Bucharest',
            '0':'Europe/Belgrade',
            '0':'Europe/Kaliningrad',
            '0':'Europe/Moscow',
            '0':'Europe/Simferopol',
            '0':'Europe/Kirov',
            '0':'Europe/Astrakhan',
            '0':'Europe/Volgograd',
            '0':'Europe/Saratov',
            '0':'Europe/Ulyanovsk',
            '0':'Europe/Samara',
            '0':'Asia/Yekaterinburg',
            '0':'Asia/Omsk',
            '0':'Asia/Novosibirsk',
            '0':'Asia/Barnaul',
            '0':'Asia/Tomsk',
            '0':'Asia/Novokuznetsk',
            '0':'Asia/Krasnoyarsk',
            '0':'Asia/Irkutsk',
            '0':'Asia/Chita',
            '0':'Asia/Yakutsk',
            '0':'Asia/Khandyga',
            '0':'Asia/Vladivostok',
            '0':'Asia/Ust-Nera',
            '0':'Asia/Magadan',
            '0':'Asia/Sakhalin',
            '0':'Asia/Srednekolymsk',
            '0':'Asia/Kamchatka',
            '0':'Asia/Anadyr',
            '0':'Asia/Riyadh',
            '0':'Pacific/Guadalcanal',
            '0':'Indian/Mahe',
            '0':'Africa/Khartoum',
            '0':'Europe/Stockholm',
            'SGT (UTC +8:00)':'Asia/Singapore',
            '0':'America/Paramaribo',
            '0':'Africa/Juba',
            '0':'Africa/Sao_Tome',
            '0':'America/El_Salvador',
            '0':'Asia/Damascus',
            '0':'America/Grand_Turk',
            '0':'Africa/Ndjamena',
            '0':'Indian/Kerguelen',
            '0':'Asia/Bangkok',
            '0':'Asia/Dushanbe',
            '0':'Pacific/Fakaofo',
            '0':'Asia/Dili',
            '0':'Asia/Ashgabat',
            '0':'Africa/Tunis',
            '0':'Pacific/Tongatapu',
            '0':'Europe/Istanbul',
            '0':'America/Port_of_Spain',
            '0':'Pacific/Funafuti',
            '0':'Asia/Taipei',
            '0':'Europe/Kiev',
            '0':'Europe/Uzhgorod',
            '0':'Europe/Zaporozhye',
            '0':'Pacific/Wake',
            '0':'America/New_York',
            '0':'America/Detroit',
            'CDT (UTC -5:00)':'America/Kentucky/Louisville',
            '0':'America/Kentucky/Monticello',
            '0':'America/Indiana/Indianapolis',
            '0':'America/Indiana/Vincennes',
            '0':'America/Indiana/Winamac',
            '0':'America/Indiana/Marengo',
            '0':'America/Indiana/Petersburg',
            '0':'America/Indiana/Vevay',
            '0':'America/Chicago',
            '0':'America/Indiana/Tell_City',
            '0':'America/Indiana/Knox',
            '0':'America/Menominee',
            '0':'America/North_Dakota/Center',
            '0':'America/North_Dakota/New_Salem',
            '0':'America/North_Dakota/Beulah',
            'MDT (UTC -6:00)':'America/Denver',
            '0':'America/Boise',
            '0':'America/Phoenix',
            '0':'America/Los_Angeles',
            '0':'America/Anchorage',
            '0':'America/Juneau',
            '0':'America/Sitka',
            '0':'America/Metlakatla',
            '0':'America/Yakutat',
            '0':'America/Nome',
            'HST (UTC -10:00)':'America/Adak',
            '0':'Pacific/Honolulu',
            '0':'America/Montevideo',
            '0':'Asia/Samarkand',
            '0':'Asia/Tashkent',
            '0':'America/Caracas',
            '0':'Asia/Ho_Chi_Minh',
            '0':'Pacific/Efate',
            '0':'Pacific/Wallis',
            '0':'Pacific/Apia',
            'SAST (UTC +2:00)':'Africa/Johannesburg'
        }];
        var fn = aryIannaTimeZones[0][a];
        return fn;
    }

    function tzConversion(a){
        var day;
        switch (a) {
                case "Australia/Brisbane":
                    day ="Australia/Brisbane";
                    break;
                case "Australia/Darwin":
                    day ="Australia/Darwin";
                    break;
                case "Australia/Perth":
                    day ="Australia/Perth";
                    break;
                case "NZDT (UTC +13:00)":
                    day ="NZDT (UTC +13:00)";
                    break;
                case "MYT (UTC +8:00)":
                    day ="MYT (UTC +8:00)";
                    break;
                case "Asia/Singapore":
                    day ="Asia/Singapore";
                    break;
                case "Asia/Kolkata":
                    day ="Asia/Kolkata";
                    break;
                case "Asia/Hong_Kong":
                    day ="Asia/Hong_Kong";
                    break;
                case "Europe/London'":
                    day ="Europe/London'";
                    break;
                case "Africa/Johannesburg":
                    day ="Africa/Johannesburg";
                    break;
                case "IDT (UTC +3:00)":
                    day ="IDT (UTC +3:00)";
                    break;
                case "WET (UTC +0:00)":
                    day ="WET (UTC +0:00)";
                    break;
                case "Asia/Dubai":
                    day ="Asia/Dubai";
                    break;
                case "PDT (UTC -7:00)":
                    day ="PDT (UTC -7:00)";
                    break;
                case "America/Kentucky/Louisville":
                    day ="America/Kentucky/Louisville";
                    break;
                case "America/Toronto":
                    day ="America/Toronto";
                    break;
                case "America/Denver":
                    day ="America/Denver";
                    break;
                case "America/Adak":
                    day ="America/Adak";
        }   
        return day;
    }

    //var curr_lead_time_zone = $('tr:contains("Time Zone"):last td:eq(1)').text();
    var crTz =  timeZone('HST (UTC -10:00)');
    var conv =  tzConversion(crTz);

    if( conv != undefined){
       var ct =  get_bs_time(conv).split(' ')[1];
       var bt = ct.split(':')[0]
       
        if(parseInt(bt) >= 9 && parseInt(bt) <= 19){
            console.log('you are within the time range')
        } else {
            console.log('Oops error');
        }
    } else {
        console.log('----')
    }
