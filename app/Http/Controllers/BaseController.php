<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use JoggApp\GoogleTranslate\GoogleTranslateClient;
use League\Flysystem\AdapterInterface;
use phpDocumentor\Reflection\Types\Collection;
use League\Flysystem\Filesystem;
use League\Flysystem\Sftp\SftpAdapter;


class BaseController extends Controller
{
    public $browerLocal='en';

    public $changeLang=array(
        'ko' => 'kr',
        'zh' => 'cn',
        'us' => 'en'
    );

    public static $countryLists=array(
        [ "Chinese (中国)", "cn", "86" ],
        [ "English", "en", "1", 0 ],
        [ "Korean ", "kr", "82" ],
        [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ],
        [ "Albania (Shqipëri)", "al", "355" ],
        [ "Algeria (‫الجزائر‬‎)", "dz", "213" ],
        [ "American Samoa", "as", "1", 5, [ "684" ] ],
        [ "Andorra", "ad", "376" ],
        [ "Angola", "ao", "244" ],
        [ "Anguilla", "ai", "1", 6, [ "264" ] ],
        [ "Antigua and Barbuda", "ag", "1", 7, [ "268" ] ],
        [ "Argentina", "ar", "54" ],
        [ "Armenia (Հայաստան)", "am", "374" ],
        [ "Aruba", "aw", "297" ],
        [ "Australia", "au", "61", 0 ],
        [ "Austria (Österreich)", "at", "43" ],
        [ "Azerbaijan (Azərbaycan)", "az", "994" ],
        [ "Bahamas", "bs", "1", 8, [ "242" ] ],
        [ "Bahrain (‫البحرين‬‎)", "bh", "973" ],
        [ "Bangladesh (বাংলাদেশ)", "bd", "880" ],
        [ "Barbados", "bb", "1", 9, [ "246" ] ],
        [ "Belarus (Беларусь)", "by", "375" ],
        [ "Belgium (België)", "be", "32" ],
        [ "Belize", "bz", "501" ],
        [ "Benin (Bénin)", "bj", "229" ],
        [ "Bermuda", "bm", "1", 10, [ "441" ] ],
        [ "Bhutan (འབྲུག)", "bt", "975" ],
        [ "Bolivia", "bo", "591" ],
        [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ],
        [ "Botswana", "bw", "267" ],
        [ "Brazil (Brasil)", "br", "55" ],
        [ "British Indian Ocean Territory", "io", "246" ],
        [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ],
        [ "Brunei", "bn", "673" ],
        [ "Bulgaria (България)", "bg", "359" ],
        [ "Burkina Faso", "bf", "226" ],
        [ "Burundi (Uburundi)", "bi", "257" ],
        [ "Cambodia (កម្ពុជា)", "kh", "855" ],
        [ "Cameroon (Cameroun)", "cm", "237" ],
        [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ],
        [ "Cape Verde (Kabu Verdi)", "cv", "238" ],
        [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ],
        [ "Cayman Islands", "ky", "1", 12, [ "345" ] ],
        [ "Central African Republic (République centrafricaine)", "cf", "236" ],
        [ "Chad (Tchad)", "td", "235" ],
        [ "Chile", "cl", "56" ],
        [ "Christmas Island", "cx", "61", 2, [ "89164" ] ],
        [ "Cocos (Keeling) Islands", "cc", "61", 1, [ "89162" ] ],
        [ "Colombia", "co", "57" ],
        [ "Comoros (‫جزر القمر‬‎)", "km", "269" ],
        [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ],
        [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ],
        [ "Cook Islands", "ck", "682" ],
        [ "Costa Rica", "cr", "506" ],
        [ "Côte d’Ivoire", "ci", "225" ],
        [ "Croatia (Hrvatska)", "hr", "385" ],
        [ "Cuba", "cu", "53" ],
        [ "Curaçao", "cw", "599", 0 ],
        [ "Cyprus (Κύπρος)", "cy", "357" ],
        [ "Czech Republic (Česká republika)", "cz", "420" ],
        [ "Denmark (Danmark)", "dk", "45" ],
        [ "Djibouti", "dj", "253" ],
        [ "Dominica", "dm", "1", 13, [ "767" ] ],
        [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ],
        [ "Ecuador", "ec", "593" ],
        [ "Egypt (‫مصر‬‎)", "eg", "20" ],
        [ "El Salvador", "sv", "503" ],
        [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ],
        [ "Eritrea", "er", "291" ],
        [ "Estonia (Eesti)", "ee", "372" ],
        [ "Ethiopia", "et", "251" ],
        [ "Falkland Islands (Islas Malvinas)", "fk", "500" ],
        [ "Faroe Islands (Føroyar)", "fo", "298" ],
        [ "Fiji", "fj", "679" ],
        [ "Finland (Suomi)", "fi", "358", 0 ],
        [ "France", "fr", "33" ],
        [ "French Guiana (Guyane française)", "gf", "594" ],
        [ "French Polynesia (Polynésie française)", "pf", "689" ],
        [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ],
        [ "Georgia (საქართველო)", "ge", "995" ],
        [ "Germany (Deutschland)", "de", "49" ],
        [ "Ghana (Gaana)", "gh", "233" ],
        [ "Gibraltar", "gi", "350" ],
        [ "Greece (Ελλάδα)", "gr", "30" ],
        [ "Greenland (Kalaallit Nunaat)", "gl", "299" ],
        [ "Grenada", "gd", "1", 14, [ "473" ] ],
        [ "Guadeloupe", "gp", "590", 0 ],
        [ "Guam", "gu", "1", 15, [ "671" ] ],
        [ "Guatemala", "gt", "502" ],
        [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ],
        [ "Guinea (Guinée)", "gn", "224" ],
        [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ],
        [ "Guyana", "gy", "592" ],
        [ "Haiti", "ht", "509" ],
        [ "Honduras", "hn", "504" ],
        [ "Hong Kong (香港)", "hk", "852" ],
        [ "Hungary (Magyarország)", "hu", "36" ],
        [ "Iceland (Ísland)", "is", "354" ],
        [ "India (भारत)", "in", "91" ],
        [ "Indonesia", "id", "62" ],
        [ "Iran (‫ایران‬‎)", "ir", "98" ],
        [ "Iraq (‫العراق‬‎)", "iq", "964" ],
        [ "Ireland", "ie", "353" ],
        [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ],
        [ "Israel (‫ישראל‬‎)", "il", "972" ],
        [ "Italy (Italia)", "it", "39", 0 ],
        [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ],
        [ "Japanese (日本)", "jp", "81" ],
        [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ],
        [ "Jordan (‫الأردن‬‎)", "jo", "962" ],
        [ "Kazakhstan (Казахстан)", "kz", "7", 1, [ "33", "7" ] ],
        [ "Kenya", "ke", "254" ],
        [ "Kiribati", "ki", "686" ],
        [ "Kosovo", "xk", "383" ],
        [ "Kuwait (‫الكويت‬‎)", "kw", "965" ],
        [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ],
        [ "Laos (ລາວ)", "la", "856" ],
        [ "Latvia (Latvija)", "lv", "371" ],
        [ "Lebanon (‫لبنان‬‎)", "lb", "961" ],
        [ "Lesotho", "ls", "266" ],
        [ "Liberia", "lr", "231" ],
        [ "Libya (‫ليبيا‬‎)", "ly", "218" ],
        [ "Liechtenstein", "li", "423" ],
        [ "Lithuania (Lietuva)", "lt", "370" ],
        [ "Luxembourg", "lu", "352" ],
        [ "Macau (澳門)", "mo", "853" ],
        [ "Macedonia (FYROM) (Македонија)", "mk", "389" ],
        [ "Madagascar (Madagasikara)", "mg", "261" ],
        [ "Malawi", "mw", "265" ],
        [ "Malaysia", "my", "60" ],
        [ "Maldives", "mv", "960" ],
        [ "Mali", "ml", "223" ],
        [ "Malta", "mt", "356" ],
        [ "Marshall Islands", "mh", "692" ],
        [ "Martinique", "mq", "596" ],
        [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ],
        [ "Mauritius (Moris)", "mu", "230" ],
        [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ],
        [ "Mexico (México)", "mx", "52" ],
        [ "Micronesia", "fm", "691" ],
        [ "Moldova (Republica Moldova)", "md", "373" ],
        [ "Monaco", "mc", "377" ],
        [ "Mongolia (Монгол)", "mn", "976" ],
        [ "Montenegro (Crna Gora)", "me", "382" ],
        [ "Montserrat", "ms", "1", 16, [ "664" ] ],
        [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ],
        [ "Mozambique (Moçambique)", "mz", "258" ],
        [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ],
        [ "Namibia (Namibië)", "na", "264" ],
        [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ],
        [ "Netherlands (Nederland)", "nl", "31" ],
        [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ],
        [ "New Zealand", "nz", "64" ],
        [ "Nicaragua", "ni", "505" ],
        [ "Niger (Nijar)", "ne", "227" ],
        [ "Nigeria", "ng", "234" ],
        [ "Niue", "nu", "683" ],
        [ "Norfolk Island", "nf", "672" ],
        [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ],
        [ "Norway (Norge)", "no", "47", 0 ],
        [ "Oman (‫عُمان‬‎)", "om", "968" ],
        [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ],
        [ "Palau", "pw", "680" ],
        [ "Palestine (‫فلسطين‬‎)", "ps", "970" ],
        [ "Panama (Panamá)", "pa", "507" ],
        [ "Papua New Guinea", "pg", "675" ],
        [ "Paraguay", "py", "595" ],
        [ "Peru (Perú)", "pe", "51" ],
        [ "Philippines", "ph", "63" ],
        [ "Poland (Polska)", "pl", "48" ],
        [ "Portugal", "pt", "351" ],
        [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ],
        [ "Qatar (‫قطر‬‎)", "qa", "974" ],
        [ "Réunion (La Réunion)", "re", "262", 0 ],
        [ "Romania (România)", "ro", "40" ],
        [ "Russia (Россия)", "ru", "7", 0 ],
        [ "Rwanda", "rw", "250" ],
        [ "Saint Barthélemy", "bl", "590", 1 ],
        [ "Saint Helena", "sh", "290" ],
        [ "Saint Kitts and Nevis", "kn", "1", 18, [ "869" ] ],
        [ "Saint Lucia", "lc", "1", 19, [ "758" ] ],
        [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ],
        [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ],
        [ "Saint Vincent and the Grenadines", "vc", "1", 20, [ "784" ] ],
        [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ],
        [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ],
        [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ],
        [ "Senegal (Sénégal)", "sn", "221" ],
        [ "Serbia (Србија)", "rs", "381" ],
        [ "Seychelles", "sc", "248" ],
        [ "Sierra Leone", "sl", "232" ],
        [ "Singapore", "sg", "65" ],
        [ "Sint Maarten", "sx", "1", 21, [ "721" ] ],
        [ "Slovakia (Slovensko)", "sk", "421" ],
        [ "Slovenia (Slovenija)", "si", "386" ],
        [ "Solomon Islands", "sb", "677" ],
        [ "Somalia (Soomaaliya)", "so", "252" ],
        [ "South Africa", "za", "27" ],
        [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ],
        [ "Spain (España)", "es", "34" ],
        [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ],
        [ "Sudan (‫السودان‬‎)", "sd", "249" ],
        [ "Suriname", "sr", "597" ],
        [ "Svalbard and Jan Mayen", "sj", "47", 1, [ "79" ] ],
        [ "Swaziland", "sz", "268" ],
        [ "Sweden (Sverige)", "se", "46" ],
        [ "Switzerland (Schweiz)", "ch", "41" ],
        [ "Syria (‫سوريا‬‎)", "sy", "963" ],
        [ "Taiwan (台灣)", "tw", "886" ],
        [ "Tajikistan", "tj", "992" ],
        [ "Tanzania", "tz", "255" ],
        [ "Thailand (ไทย)", "th", "66" ],
        [ "Timor-Leste", "tl", "670" ],
        [ "Togo", "tg", "228" ],
        [ "Tokelau", "tk", "690" ],
        [ "Tonga", "to", "676" ],
        [ "Trinidad and Tobago", "tt", "1", 22, [ "868" ] ],
        [ "Tunisia (‫تونس‬‎)", "tn", "216" ],
        [ "Turkey (Türkiye)", "tr", "90" ],
        [ "Turkmenistan", "tm", "993" ],
        [ "Turks and Caicos Islands", "tc", "1", 23, [ "649" ] ],
        [ "Tuvalu", "tv", "688" ],
        [ "U.S. Virgin Islands", "vi", "1", 24, [ "340" ] ],
        [ "Uganda", "ug", "256" ],
        [ "Ukraine (Україна)", "ua", "380" ],
        [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ],
        [ "United Kingdom", "gb", "44", 0 ],
        [ "Uruguay", "uy", "598" ],
        [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ],
        [ "Vanuatu", "vu", "678" ],
        [ "Vatican City (Città del Vaticano)", "va", "39", 1, [ "06698" ] ],
        [ "Venezuela", "ve", "58" ],
        [ "Vietnam (Việt Nam)", "vn", "84" ],
        [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ],
        [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, [ "5288", "5289" ] ],
        [ "Yemen (‫اليمن‬‎)", "ye", "967" ],
        [ "Zambia", "zm", "260" ],
        [ "Zimbabwe", "zw", "263" ],
        [ "Åland Islands", "ax", "358", 1, [ "18" ] ]
    );
    public $countryMobiles=array(
        [ "U.S.A", "en", "1"],
        [ "China", "cn", "86" ],
        [ "Japan", "jp", "81" ],
        [ "Korea ", "kr", "82" ],
        [ "France", "fr", "33" ],
        [ "Afghanistan", "af", "93" ],
        [ "Albania", "al", "355" ],
        [ "Algeria", "dz", "213" ],
        [ "American Samoa", "as", "684"],
        [ "Andorra", "ad", "376" ],
        [ "Angola", "ao", "244" ],
        [ "Anguilla", "ai", "264"],
        [ "Antigua and Barbuda", "ag", "268"],
        [ "Argentina", "ar", "54" ],
        [ "Armenia", "am", "374" ],
        [ "Aruba", "aw", "297" ],
        [ "Australia", "au", "61"],
        [ "Austria", "at", "43" ],
        [ "Azerbaijan", "az", "994" ],
        [ "Bahamas", "bs", "242"],
        [ "Bahrain", "bh", "973" ],
        [ "Bangladesh", "bd", "880" ],
        [ "Barbados", "bb", "246"],
        [ "Belarus", "by", "375" ],
        [ "Belgium", "be", "32" ],
        [ "Belize", "bz", "501" ],
        [ "Benin", "bj", "229" ],
        [ "Bermuda", "bm", "441"],
        [ "Bhutan", "bt", "975" ],
        [ "Bolivia", "bo", "591" ],
        [ "Bosnia and Herzegovina", "ba", "387" ],
        [ "Botswana", "bw", "267" ],
        [ "Brazil", "br", "55" ],
        [ "British Indian Ocean Territory", "io", "246" ],
        [ "British Virgin Islands", "vg", "284"],
        [ "Brunei", "bn", "673" ],
        [ "Bulgaria", "bg", "359" ],
        [ "Burkina Faso", "bf", "226" ],
        [ "Burundi", "bi", "257" ],
        [ "Cambodia", "kh", "855" ],
        [ "Cameroon", "cm", "237" ],
        [ "Canada", "ca", "204"],
        [ "Cape Verde", "cv", "238" ],
        [ "Caribbean Netherlands", "bq", "599"],
        [ "Cayman Islands", "ky", "345"],
        [ "Central African Republic", "cf", "236" ],
        [ "Chad", "td", "235" ],
        [ "Chile", "cl", "56" ],
        [ "Christmas Island", "cx", "61"],
        [ "Cocos Islands", "cc", "61" ],
        [ "Colombia", "co", "57" ],
        [ "Comoros", "km", "269" ],
        [ "Congo", "cg", "242" ],
        [ "Cook Islands", "ck", "682" ],
        [ "Costa Rica", "cr", "506" ],
        [ "Côte d’Ivoire", "ci", "225" ],
        [ "Croatia", "hr", "385" ],
        [ "Cuba", "cu", "53" ],
        [ "Curaçao", "cw", "599"],
        [ "Cyprus", "cy", "357" ],
        [ "Czech Republic", "cz", "420" ],
        [ "Denmark", "dk", "45" ],
        [ "Djibouti", "dj", "253" ],
        [ "Dominica", "dm", "767"],
        [ "Dominican Republic", "do", "809"],
        [ "Ecuador", "ec", "593" ],
        [ "Egypt", "eg", "20" ],
        [ "El Salvador", "sv", "503" ],
        [ "Equatorial Guinea", "gq", "240" ],
        [ "Eritrea", "er", "291" ],
        [ "Estonia", "ee", "372" ],
        [ "Ethiopia", "et", "251" ],
        [ "Falkland Islands", "fk", "500" ],
        [ "Faroe Islands", "fo", "298" ],
        [ "Fiji", "fj", "679" ],
        [ "Finland", "fi", "358"],
        [ "Gabon", "ga", "241" ],
        [ "Gambia", "gm", "220" ],
        [ "Georgia", "ge", "995" ],
        [ "Germany", "de", "49" ],
        [ "Ghana", "gh", "233" ],
        [ "Gibraltar", "gi", "350" ],
        [ "Greece", "gr", "30" ],
        [ "Greenland", "gl", "299" ],
        [ "Grenada", "gd", "473" ],
        [ "Guadeloupe", "gp", "590"],
        [ "Guam", "gu", "671" ],
        [ "Guatemala", "gt", "502" ],
        [ "Guernsey", "gg", "44"],
        [ "Guiana", "gf", "594" ],
        [ "Guinea", "gn", "224" ],
        [ "Guinea-Bissau", "gw", "245" ],
        [ "Guyana", "gy", "592" ],
        [ "Haiti", "ht", "509" ],
        [ "Honduras", "hn", "504" ],
        [ "Hong Kong", "hk", "852" ],
        [ "Hungary", "hu", "36" ],
        [ "Iceland", "is", "354" ],
        [ "India", "in", "91" ],
        [ "Indonesia", "id", "62" ],
        [ "Iran", "ir", "98" ],
        [ "Iraq", "iq", "964" ],
        [ "Ireland", "ie", "353" ],
        [ "Israel", "il", "972" ],
        [ "Italy", "it", "39" ],
        [ "Jamaica", "jm", "876" ],
        [ "Jordan", "jo", "962" ],
        [ "Kazakhstan", "kz", "7" ],
        [ "Kenya", "ke", "254" ],
        [ "Kiribati", "ki", "686" ],
        [ "Kosovo", "xk", "383" ],
        [ "Kuwait", "kw", "965" ],
        [ "Kyrgyzstan", "kg", "996" ],
        [ "Laos", "la", "856" ],
        [ "Latvia", "lv", "371" ],
        [ "Lebanon", "lb", "961" ],
        [ "Lesotho", "ls", "266" ],
        [ "Liberia", "lr", "231" ],
        [ "Libya", "ly", "218" ],
        [ "Liechtenstein", "li", "423" ],
        [ "Lithuania", "lt", "370" ],
        [ "Luxembourg", "lu", "352" ],
        [ "Macau", "mo", "853" ],
        [ "Macedonia", "mk", "389" ],
        [ "Madagascar", "mg", "261" ],
        [ "Malawi", "mw", "265" ],
        [ "Malaysia", "my", "60" ],
        [ "Maldives", "mv", "960" ],
        [ "Mali", "ml", "223" ],
        [ "Malta", "mt", "356" ],
        [ "Marshall Islands", "mh", "692" ],
        [ "Martinique", "mq", "596" ],
        [ "Mauritania", "mr", "222" ],
        [ "Mauritius (Moris)", "mu", "230" ],
        [ "Mayotte", "yt", "262" ],
        [ "Mexico", "mx", "52" ],
        [ "Micronesia", "fm", "691" ],
        [ "Moldova", "md", "373" ],
        [ "Monaco", "mc", "377" ],
        [ "Mongolia", "mn", "976" ],
        [ "Montenegro", "me", "382" ],
        [ "Montserrat", "ms", "664" ],
        [ "Morocco", "ma", "212" ],
        [ "Mozambique", "mz", "258" ],
        [ "Myanmar", "mm", "95" ],
        [ "Namibia", "na", "264" ],
        [ "Nauru", "nr", "674" ],
        [ "Nepal", "np", "977" ],
        [ "Netherlands", "nl", "31" ],
        [ "New Caledonia", "nc", "687" ],
        [ "New Zealand", "nz", "64" ],
        [ "Nicaragua", "ni", "505" ],
        [ "Niger", "ne", "227" ],
        [ "Nigeria", "ng", "234" ],
        [ "Niue", "nu", "683" ],
        [ "Norfolk Island", "nf", "672" ],
        [ "Northern Mariana Islands", "mp", "670" ],
        [ "Norway", "no", "47" ],
        [ "Oman", "om", "968" ],
        [ "Pakistan", "pk", "92" ],
        [ "Palau", "pw", "680" ],
        [ "Palestine", "ps", "970" ],
        [ "Panama", "pa", "507" ],
        [ "Papua New Guinea", "pg", "675" ],
        [ "Paraguay", "py", "595" ],
        [ "Peru", "pe", "51" ],
        [ "Philippines", "ph", "63" ],
        [ "Poland", "pl", "48" ],
        [ "Portugal", "pt", "351" ],
        [ "Puerto Rico", "pr", "787" ],
        [ "Qatar", "qa", "974" ],
        [ "Réunion", "re", "262", 0 ],
        [ "Romania", "ro", "40" ],
        [ "Russia", "ru", "7" ],
        [ "Rwanda", "rw", "250" ],
        [ "Saint Barthélemy", "bl", "590" ],
        [ "Saint Helena", "sh", "290" ],
        [ "Samoa", "ws", "685" ],
        [ "San Marino", "sm", "378" ],
        [ "São Tomé and Príncipe", "st", "239" ],
        [ "Saudi Arabia", "sa", "966" ],
        [ "Senegal", "sn", "221" ],
        [ "Serbia", "rs", "381" ],
        [ "Seychelles", "sc", "248" ],
        [ "Sierra Leone", "sl", "232" ],
        [ "Singapore", "sg", "65" ],
        [ "Sint Maarten", "sx", "721" ],
        [ "Slovakia", "sk", "421" ],
        [ "Slovenia", "si", "386" ],
        [ "Solomon Islands", "sb", "677" ],
        [ "Somalia", "so", "252" ],
        [ "South Africa", "za", "27" ],
        [ "South Sudan", "ss", "211" ],
        [ "Spain", "es", "34" ],
        [ "Sri Lanka", "lk", "94" ],
        [ "Sudan", "sd", "249" ],
        [ "Suriname", "sr", "597" ],
        [ "Svalbard and Jan Mayen", "sj", "47" ],
        [ "Swaziland", "sz", "268" ],
        [ "Sweden", "se", "46" ],
        [ "Switzerland", "ch", "41" ],
        [ "Syria", "sy", "963" ],
        [ "Taiwan", "tw", "886" ],
        [ "Tajikistan", "tj", "992" ],
        [ "Tanzania", "tz", "255" ],
        [ "Thailand", "th", "66" ],
        [ "Timor-Leste", "tl", "670" ],
        [ "Togo", "tg", "228" ],
        [ "Tokelau", "tk", "690" ],
        [ "Tonga", "to", "676" ],
        [ "Trinidad and Tobago", "tt", "868" ],
        [ "Tunisia", "tn", "216" ],
        [ "Turkey", "tr", "90" ],
        [ "Turkmenistan", "tm", "993" ],
        [ "Turks and Caicos Islands", "tc", "649" ],
        [ "Tuvalu", "tv", "688" ],
        [ "Uganda", "ug", "256" ],
        [ "Ukraine (Україна)", "ua", "380" ],
        [ "United Arab Emirates", "ae", "971" ],
        [ "United Kingdom", "gb", "44" ],
        [ "Uruguay", "uy", "598" ],
        [ "Uzbekistan", "uz", "998" ],
        [ "Vanuatu", "vu", "678" ],
        [ "Venezuela", "ve", "58" ],
        [ "Vietnam", "vn", "84" ],
        [ "Wallis and Futuna", "wf", "681" ],
        [ "Yemen", "ye", "967" ],
        [ "Zambia", "zm", "260" ],
        [ "Zimbabwe", "zw", "263" ],
        [ "Åland Islands", "ax", "358" ]
    );

    public $menu_array = array(
        ////////////// Dashboard menus
        /// id: id of row, p_id: id of parent row,  f_id: id of first level row, level: level, have_page: have display page or not, trans_key: str_type-str_key of sitetranslatecont table
        ['name' => 'Dashboard',         'id' => '01-00-00-00', 'p_id' => '01-00-00-00', 'f_id' => '01-00-00-00', 'level' => 1, 'have_page' => 0, 'trans_key'=>'mu-dash'],
        ['name' => 'Analytics',         'id' => '01-01-00-00', 'p_id' => '01-00-00-00', 'f_id' => '01-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-dash_analy'],
        ['name' => 'Studio Cloud',      'id' => '01-02-00-00', 'p_id' => '01-00-00-00', 'f_id' => '01-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-dash_stud'],
        ['name' => 'D User',            'id' => '01-03-00-00', 'p_id' => '01-00-00-00', 'f_id' => '01-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-dash_duser'],
        ////////////// Apps menus
        ['name' => 'Apps',              'id' => '02-00-00-00', 'p_id' => '02-00-00-00', 'f_id' => '02-00-00-00', 'level' => 1, 'have_page' => 0, 'trans_key'=>'mu-apps'],
        ['name' => 'Website',           'id' => '02-01-00-00', 'p_id' => '02-00-00-00', 'f_id' => '02-00-00-00', 'level' => 2, 'have_page' => 0, 'trans_key'=>'musu-apps_website'],
        ['name' => 'Appearance',        'id' => '02-01-01-00', 'p_id' => '02-01-00-00', 'f_id' => '02-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-apps_website_appear'],
        ['name' => 'Theme',             'id' => '02-01-01-01', 'p_id' => '02-01-01-00', 'f_id' => '02-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-apps_website_appear_theme'],
        ['name' => 'Head',              'id' => '02-01-01-02', 'p_id' => '02-01-01-00', 'f_id' => '02-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-apps_website_appear_head'],
        ['name' => 'Module',            'id' => '02-01-02-00', 'p_id' => '02-01-00-00', 'f_id' => '02-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-apps_website_module'],
        ['name' => 'Web Language',      'id' => '02-01-02-01', 'p_id' => '02-01-02-00', 'f_id' => '02-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-apps_website_module_weblanguage'],
        ['name' => 'Tools',             'id' => '02-01-03-00', 'p_id' => '02-01-00-00', 'f_id' => '02-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-apps_website_tools'],
        ['name' => 'Slider',            'id' => '02-01-03-01', 'p_id' => '02-01-03-00', 'f_id' => '02-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-apps_website_tools_slider'],
        ['name' => 'Menu',              'id' => '02-01-03-02', 'p_id' => '02-01-03-00', 'f_id' => '02-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-apps_website_tools_menu'],
        ['name' => 'View',              'id' => '02-01-03-03', 'p_id' => '02-01-03-00', 'f_id' => '02-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-apps_website_tools_view'],
        ['name' => 'Template',          'id' => '02-01-04-00', 'p_id' => '02-01-00-00', 'f_id' => '02-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-apps_website_temp'],
        ['name' => 'E-commerce',        'id' => '02-02-00-00', 'p_id' => '02-00-00-00', 'f_id' => '02-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-apps_ecomm'],
        ['name' => 'Work',              'id' => '02-03-00-00', 'p_id' => '02-00-00-00', 'f_id' => '02-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-apps_work'],
        ////////////// Users menus
        ['name' => 'Users',             'id' => '03-00-00-00', 'p_id' => '03-00-00-00', 'f_id' => '03-00-00-00', 'level' => 1, 'have_page' => 0, 'trans_key'=>'mu-users'],
        ['name' => 'Organization',      'id' => '03-01-00-00', 'p_id' => '03-00-00-00', 'f_id' => '03-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-users_org'],
        ['name' => 'Individual',        'id' => '03-02-00-00', 'p_id' => '03-00-00-00', 'f_id' => '03-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-users_ind'],
        ////////////// Webs menus
        ['name' => 'Webs',              'id' => '04-00-00-00', 'p_id' => '04-00-00-00', 'f_id' => '04-00-00-00', 'level' => 1, 'have_page' => 0, 'trans_key'=>'mu-webs'],
        ['name' => 'Waaup Global',      'id' => '04-01-00-00', 'p_id' => '04-00-00-00', 'f_id' => '04-00-00-00', 'level' => 2, 'have_page' => 0, 'trans_key'=>'musu-webs_wesglobal'],
        ['name' => 'Appearance',        'id' => '04-01-01-00', 'p_id' => '04-01-00-00', 'f_id' => '04-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-webs_wesglobal_appearance'],
        ['name' => 'Theme',             'id' => '04-01-01-01', 'p_id' => '04-01-01-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_appearance_theme'],
        ['name' => 'Head',              'id' => '04-01-01-02', 'p_id' => '04-01-01-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_appearance_head'],
        ['name' => 'Foot',              'id' => '04-01-01-03', 'p_id' => '04-01-01-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_appearance_foot'],
        ['name' => 'Menus',             'id' => '04-01-02-00', 'p_id' => '04-01-00-00', 'f_id' => '04-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-webs_wesglobal_menus'],
        ['name' => 'Main menu',         'id' => '04-01-02-01', 'p_id' => '04-01-02-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_menus_main'],
        ['name' => 'Foot menu',         'id' => '04-01-02-02', 'p_id' => '04-01-02-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_menus_foot'],
        ['name' => 'Pages',             'id' => '04-01-03-00', 'p_id' => '04-01-00-00', 'f_id' => '04-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-webs_wesglobal_pages'],
        ['name' => 'Index',             'id' => '04-01-03-01', 'p_id' => '04-01-03-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_pages_index'],
        ['name' => 'Management',        'id' => '04-01-03-02', 'p_id' => '04-01-03-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_pages_management'],
        ['name' => 'Modules',           'id' => '04-01-04-00', 'p_id' => '04-01-00-00', 'f_id' => '04-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-webs_wesglobal_modules'],
        ['name' => 'Tools',             'id' => '04-01-05-00', 'p_id' => '04-01-00-00', 'f_id' => '04-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-webs_wesglobal_tools'],
        ['name' => 'Social',            'id' => '04-01-06-00', 'p_id' => '04-01-00-00', 'f_id' => '04-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-webs_wesglobal_social'],
        ['name' => 'Setting',           'id' => '04-01-06-01', 'p_id' => '04-01-06-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_social_setting'],
        ['name' => 'Media',             'id' => '04-01-07-00', 'p_id' => '04-01-00-00', 'f_id' => '04-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-webs_wesglobal_media'],
        ['name' => 'Configuration',     'id' => '04-01-08-00', 'p_id' => '04-01-00-00', 'f_id' => '04-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-webs_wesglobal_configuration'],
        ['name' => 'Language',          'id' => '04-01-08-01', 'p_id' => '04-01-08-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_configuration_language'],
        ['name' => 'General',           'id' => '04-01-08-02', 'p_id' => '04-01-08-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_configuration_general'],
        ['name' => 'Front Pages',       'id' => '04-01-08-03', 'p_id' => '04-01-08-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-webs_wesglobal_configuration_frontpages'],
        ['name' => 'Translation',       'id' => '04-01-08-04', 'p_id' => '04-01-08-00', 'f_id' => '04-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_setting_language_trans'],
        ['name' => 'Waaup Taiwan',      'id' => '04-02-00-00', 'p_id' => '04-00-00-00', 'f_id' => '04-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-webs_waauptaiwan'],
        ['name' => 'Waaup Store',       'id' => '04-03-00-00', 'p_id' => '04-00-00-00', 'f_id' => '04-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-webs_waaupstore'],
        ['name' => 'Waaup Waw',         'id' => '04-04-00-00', 'p_id' => '04-00-00-00', 'f_id' => '04-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-webs_waaupwaw'],
        ['name' => 'Waaup Magazine',    'id' => '04-05-00-00', 'p_id' => '04-00-00-00', 'f_id' => '04-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-webs_waaupmagazine'],
        ['name' => 'Waaup Travel',      'id' => '04-06-00-00', 'p_id' => '04-00-00-00', 'f_id' => '04-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-webs_waauptravel'],
        ['name' => 'Waaup Member',      'id' => '04-07-00-00', 'p_id' => '04-00-00-00', 'f_id' => '04-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-webs_waaupmember'],
        ////////////// Others menus
        ['name' => 'Others',            'id' => '05-00-00-00', 'p_id' => '05-00-00-00', 'f_id' => '05-00-00-00', 'level' => 1, 'have_page' => 0, 'trans_key'=>'mu-others'],
        ['name' => 'Email Templates',   'id' => '05-01-00-00', 'p_id' => '05-00-00-00', 'f_id' => '05-00-00-00', 'level' => 2, 'have_page' => 0, 'trans_key'=>'musu-others_emailtemp'],
        ['name' => 'Basic',             'id' => '05-01-01-00', 'p_id' => '05-01-00-00', 'f_id' => '05-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-others_emailtemp_basic'],
        ['name' => 'Alert',             'id' => '05-01-02-00', 'p_id' => '05-01-00-00', 'f_id' => '05-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-others_emailtemp_alert'],
        ['name' => 'Billing',           'id' => '05-01-03-00', 'p_id' => '05-01-00-00', 'f_id' => '05-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-others_emailtemp_bill'],
        ['name' => 'Menu Level',        'id' => '05-02-00-00', 'p_id' => '05-00-00-00', 'f_id' => '05-00-00-00', 'level' => 2, 'have_page' => 1, 'trans_key'=>'musu-others_mulevel'],
        ////////////// System menus
        ['name' => 'System',            'id' => '06-00-00-00', 'p_id' => '06-00-00-00', 'f_id' => '06-00-00-00', 'level' => 1, 'have_page' => 0, 'trans_key'=>'mu-system'],
        ['name' => 'Setting',           'id' => '06-01-00-00', 'p_id' => '06-00-00-00', 'f_id' => '06-00-00-00', 'level' => 2, 'have_page' => 0, 'trans_key'=>'musu-system_set'],
        ['name' => 'Basic',             'id' => '06-01-01-00', 'p_id' => '06-01-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-system_set_basic'],
        ['name' => 'Language',          'id' => '06-01-02-00', 'p_id' => '06-01-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-system_set_lang'],
        ['name' => 'Language',          'id' => '06-01-02-01', 'p_id' => '06-01-02-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_setting_language_lang'],
        ['name' => 'Translation',       'id' => '06-01-02-02', 'p_id' => '06-01-02-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_setting_language_trans'],
        ['name' => 'Fields',            'id' => '06-01-03-00', 'p_id' => '06-01-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-system_set_fields'],
        ['name' => 'Image',             'id' => '06-01-03-01', 'p_id' => '06-01-03-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_setting_fields_image'],
        ['name' => 'Text',              'id' => '06-01-03-02', 'p_id' => '06-01-03-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_setting_fields_text'],
        ['name' => 'Number',            'id' => '06-01-03-03', 'p_id' => '06-01-03-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_setting_fields_number'],
        ['name' => 'Mobile',            'id' => '06-01-03-04', 'p_id' => '06-01-03-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_setting_fields_mobile'],
        ['name' => 'Email',             'id' => '06-01-03-05', 'p_id' => '06-01-03-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_setting_fields_email'],
        ['name' => 'Date',              'id' => '06-01-03-06', 'p_id' => '06-01-03-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_setting_fields_date'],
        ['name' => 'Theme',             'id' => '06-02-00-00', 'p_id' => '06-00-00-00', 'f_id' => '06-00-00-00', 'level' => 2, 'have_page' => 0, 'trans_key'=>'musu-system_theme'],
        ['name' => 'Color',             'id' => '06-02-01-00', 'p_id' => '06-02-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-system_theme_color'],
        ['name' => 'Foot',              'id' => '06-02-02-00', 'p_id' => '06-02-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-system_theme_foot'],
        ['name' => 'Logo',              'id' => '06-02-03-00', 'p_id' => '06-02-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-system_theme_logo'],
        ['name' => 'BS User',           'id' => '06-03-00-00', 'p_id' => '06-00-00-00', 'f_id' => '06-00-00-00', 'level' => 2, 'have_page' => 0, 'trans_key'=>'musu-system_bsuser'],
        ['name' => 'Registered',        'id' => '06-03-01-00', 'p_id' => '06-03-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-system_suser_registered'],
        ['name' => 'Account',           'id' => '06-03-02-00', 'p_id' => '06-03-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-system_suser_account'],
        ['name' => 'Management',        'id' => '06-03-03-00', 'p_id' => '06-03-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'mususu-system_suser_manage'],
        ['name' => 'Users',             'id' => '06-03-03-01', 'p_id' => '06-03-03-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_suser_manage_users'],
        ['name' => 'Role',              'id' => '06-03-03-02', 'p_id' => '06-03-03-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_suser_manage_roles'],
        ['name' => 'Security',          'id' => '06-03-04-00', 'p_id' => '06-03-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 1, 'trans_key'=>'mususu-system_suser_security'],
        ['name' => 'Permissions',       'id' => '06-03-05-00', 'p_id' => '06-03-00-00', 'f_id' => '06-00-00-00', 'level' => 3, 'have_page' => 0, 'trans_key'=>'musususu-system_suser_manage_perm'],
        ['name' => 'Role',              'id' => '06-03-05-01', 'p_id' => '06-03-05-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_suser_permissions_role'],
        ['name' => 'User',              'id' => '06-03-05-02', 'p_id' => '06-03-05-00', 'f_id' => '06-00-00-00', 'level' => 4, 'have_page' => 1, 'trans_key'=>'musususu-system_suser_permissions_user']
    );

    public $commonctrl=null;

    public $filesystem=null;

    public $g_path=null;

    /* static functions start */
    static function isCountryISO($p0)
    {
        $p0 = strtolower($p0);
        $p0 = trim($p0);
        $result=false;
        foreach (static::$countryLists as $item){
            $ico = strtolower($item[1]);
            $ico = trim($ico);
            if($p0 === $ico){
                $result=true;
                break;
            }
        }
        return $result;
    }

    static function getHost() {
        try
        {
            if ($host = getenv('HTTP_HOST'))
            {
                $elements = explode(',', $host);
                $host = trim(end($elements));
            }
            else
            {
                if (!$host = $_SERVER['HTTP_HOST'])
                {
                    if (!$host = $_SERVER['SERVER_NAME'])
                    {
                        $host = !empty($_SERVER['SERVER_ADDR']) ? $_SERVER['SERVER_ADDR'] : '';
                    }
                }
            }
        } catch (\Exception $e) {
            $host='';
        }
        // Remove port number from host
        $host = preg_replace('/:\d+$/', '', $host);

        return trim($host);
    }

    static function compareHost($p0){
        $host =  static::getHost();
        $host = strtolower($host);
        $host = str_replace(['http://', 'https://', 'www'], '', $host);
        $p0 = trim($p0);
        $p0 = strtolower($p0);
        $p0 = str_replace(['http://', 'https://', 'www'], '', $p0);
        return strstr($p0, $host);
    }
/* static functions end */

    public function __construct(Request $request)
    {
        if($this->commonctrl===null)
            $this->commonctrl = new CommonController;

        $this->browerLocal = $this->commonctrl->getBrowerLocale($request);
        if (!session()->has('ulang'))
            session()->put('ulang', strtolower($this->browerLocal));

        if($this->g_path===null)
        {
            $host =  $_SERVER['HTTP_HOST'];
            $host = strtolower($host);
            $pos = strpos($host, 'wwwwww.waaup.org');
            if ($pos === false){
                $this->g_path="remote";
            }
            else
                $this->g_path="local";
        }

        if($this->filesystem===null)
        {
                $this->filesystem = new Filesystem(new SftpAdapter([
                    'host' => 'waaup.org',//18.166.103.166
                    'port' => 22,
                    'username' => 'ubuntu',
                    'password' => '',
                    'privateKey' => public_path().'/pem/new-hk.pem',
                    'root' => '/var/www/html/wes/public',
                    'timeout' => 30,
                ]),[
                    'visibility' => AdapterInterface::VISIBILITY_PUBLIC
                ]);
        }

    }

    public function getLangChangedData($lang=null){
        //$iso = App::getLocale();
        if($lang==null)
            $userlocal = strtolower($this->browerLocal);
        else
        {
            if(is_array($lang))
                $userlocal = $lang[0];
            else
                $userlocal = $lang;
        }
        $iso = $userlocal;
        if (array_key_exists($userlocal, $this->changeLang)) {
            $iso = $this->changeLang[$userlocal];
        }
        return $iso;
    }

    public function getHeadersData($ciso=null)
    {
        $pagecontents = collect([]);
        $langrow =   DB::table('webwesglobal_lang')
            ->select(DB::raw('iso, dialcode, name'))
            ->where('status', 'enable')
            ->where('g_path', $this->g_path)->get();
        $pagecontents->put('langs',isset($langrow) ? $langrow: '');

        $row1 =null;
        $row2 =null;
        $row3 =null;
        $row4 =null;

        $commonctrl = new CommonController;
        $device = $commonctrl->currentDeviceInfo();

        $deviceSql=" and device= '".$device."' ";

        $row1  =   DB::table('webwesglobal_appea')
            ->select(DB::raw('head'))
            ->whereRaw('trans like "'.$ciso.'%" and is_head=1'.$deviceSql)
            ->where('g_path', $this->g_path)->get()->first();
        $row2  =   DB::table('webwesglobal_appea')
            ->select(DB::raw('mainmenu'))
            ->whereRaw('trans like "'.$ciso.'%" and is_mainmenu=1'.$deviceSql)
            ->where('g_path', $this->g_path)->get()->first();
        $row3  =   DB::table('webwesglobal_appea')
            ->select(DB::raw('configgenereal'))
            ->whereRaw('trans like "'.$ciso.'%" and is_configgenereal=1'.$deviceSql)
            ->where('g_path', $this->g_path)->get()->first();
        $row4  =   DB::table('webwesglobal_appea')
            ->select(DB::raw('background'))
            ->whereRaw('trans like "'.$ciso.'%" and is_background=1'.$deviceSql)
            ->where('g_path', $this->g_path)->get()->first();

        $rowfavico = DB::table('sitelogoinfo')->where('site_logtype','fav')
            ->where('g_path', $this->g_path)->get()->first();
        $favico = "waaup-logo.ico";
        if($rowfavico!= null)
        {
            $favico = '/images/'.$rowfavico->site_logname;
        }
        $pagecontents->put('favico', $favico);

        $countrycity='';

        $pagecontents->put('countrycity', $countrycity);

        if($row1!=null && !empty($row1))
        {
            $head = json_decode($row1->head);
            /*if($head ===null || empty($head))
            {
                if($rowt1!==null && !empty($rowt1) && isset($rowt1->head))
                    $head = json_decode($rowt1->head);
            }*/

            if($head!==null && !empty($head))
            {
                if (!property_exists($head, 'toplocation')) {
                    $pagecontents->put('toplocation', 'on');
                }
                else
                    $pagecontents->put('toplocation', $head->toplocation);

                if (!property_exists($head, 'topheader')) {
                    $pagecontents->put('topheader', 'on');
                }
                else
                    $pagecontents->put('topheader', $head->topheader);

                if (!property_exists($head, 'toolcalc')) {
                    $pagecontents->put('toolcalc', 'on');
                }
                else
                    $pagecontents->put('toolcalc', $head->toolcalc);

                if (!property_exists($head, 'toolbar')) {
                    $pagecontents->put('toolbar', 'on');
                }
                else
                    $pagecontents->put('toolbar', $head->toolbar);

                if (!property_exists($head, 'modules')) {
                    $pagecontents->put('modules', 'on');
                }
                else
                    $pagecontents->put('modules', $head->modules);

            }
            else{
                $pagecontents->put('topheader', 'on');
                $pagecontents->put('toplocation', 'on');
                $pagecontents->put('toolcalc', 'on');
                $pagecontents->put('toolbar', 'on');
                $pagecontents->put('modules', 'on');
            }
        }
        else
        {
            $pagecontents->put('topheader', 'on');
            $pagecontents->put('toplocation', 'on');
            $pagecontents->put('toolcalc', 'on');
            $pagecontents->put('toolbar', 'on');
            $pagecontents->put('modules', 'on');
        }
        if($row2!=null && !empty($row2))
        {
            $mainmenu = json_decode($row2->mainmenu);
            /*if($mainmenu ===null || empty($mainmenu))
            {
                if($rowt2!==null && !empty($rowt2) && isset($rowt2->mainmenu))
                    $mainmenu = json_decode($rowt2->mainmenu);
            }*/
            if($mainmenu!==null && !empty($mainmenu)){
                $muarray=array();
                foreach($mainmenu as $key => $link) {
                    $mu = $key.':'.$link;
                    array_push($muarray,$mu);
                }
                $pagecontents->put('topmenus',$muarray);
            }
            else
            {
                $pagecontents->put('topmenus',array());
            }
        }
        else
        {
            $pagecontents->put('topmenus',array());
        }

        if($row3!=null && !empty($row3))
        {
            $configgenereal = json_decode($row3->configgenereal);
            /*if($configgenereal ===null || empty($configgenereal))
            {
                if($rowt3!==null && !empty($rowt3) && isset($rowt3->configgenereal))
                    $configgenereal = json_decode($rowt3->configgenereal);
            }*/
            if($configgenereal!==null && !empty($configgenereal))
            {
                if (!property_exists($configgenereal, 'logoImg')) {
                    $pagecontents->put('logoImg', '');
                }
                else
                    $pagecontents->put('logoImg', $configgenereal->logoImg);

                if (!property_exists($configgenereal, 'extralogoImg')) {
                    $pagecontents->put('extralogoImg', '');
                }
                else
                    $pagecontents->put('extralogoImg', $configgenereal->extralogoImg);

                if (!property_exists($configgenereal, 'sitetitle')) {
                    $pagecontents->put('sitetitle', '');
                }
                else
                    $pagecontents->put('sitetitle', $configgenereal->sitetitle);

                if (!property_exists($configgenereal, 'sloganImg')) {
                    $pagecontents->put('sloganImg', '');
                }
                else
                    $pagecontents->put('sloganImg', $configgenereal->sloganImg);

                if (!property_exists($configgenereal, 'slogantxt')) {
                    $pagecontents->put('slogantxt', '');
                }
                else
                    $pagecontents->put('slogantxt', $configgenereal->slogantxt);

                if (!property_exists($configgenereal, 'favicoImg')) {
                    $pagecontents->put('favicoImg', '');
                }
                else
                    $pagecontents->put('favicoImg', $configgenereal->favicoImg);
            }
        }
        else{
            $pagecontents->put('logoImg', '');
            $pagecontents->put('extralogoImg', '');
            $pagecontents->put('sitetitle', '');
            $pagecontents->put('sloganImg', '');
            $pagecontents->put('slogantxt', '');
            $pagecontents->put('favicoImg', 'wes-logo.ico');
        }
        if($row4!=null && !empty($row4))
        {
            /*if($row4->background ===null || empty($row4->background))
            {
                if($rowt4!=null && !empty($rowt4) && isset($rowt4->background))
                    $row4->background = $rowt4->background;
            }*/
            $pagecontents->put('pgbk',isset($row->background) ? $row4->background : '');
        }
        else
        {
            $pagecontents->put('pgbk','');
        }
        return $pagecontents;
    }//getHeaderData

    public function getFootData($ciso=null)
    {
        $pagecontents = collect([]);
        $row =null;

        $commonctrl = new CommonController;
        $device = $commonctrl->currentDeviceInfo();

        $deviceSql=" and device= '".$device."' ";

        $row1  =   DB::table('webwesglobal_appea')
            ->select(DB::raw('foot'))
            //->whereRaw('trans like "'.$ciso.'%" and is_foot=1'.$deviceSql)
            ->whereRaw('trans like "'.$ciso.'%" and is_foot=1')
            ->where('g_path', $this->g_path)
            ->get()->first();
        $row2  =   DB::table('webwesglobal_appea')
            ->select(DB::raw('footmenu'))
            //->whereRaw('trans like "'.$ciso.'%" and is_footmenu=1'.$deviceSql)
            ->whereRaw('trans like "'.$ciso.'%" and is_footmenu=1')
            ->where('g_path', $this->g_path)
            ->get()->first();

        if($row1!=null && !empty($row1))
        {

            $foot =json_decode($row1->foot);

            if($foot!==null && !empty($foot))
            {
                $pagecontents->put('barleft', $foot->barleft);//css
                $pagecontents->put('barleftfontcolor', $foot->barleftfontcolor);
                $pagecontents->put('barleftfontsize', $foot->barleftfontsize);
                $pagecontents->put('barleftfontcont', trim($foot->barleftfontcont));
                $pagecontents->put('barleftimg', $foot->barleftimg==null ? '' : $foot->barleftimg);
                $pagecontents->put('barleftfontlink', empty($foot->barleftfontlink) ? '#' : $foot->barleftfontlink);

                if(isset($foot->edit0)){
                    $temp = trim($foot->edit0);
                    $temp = html_entity_decode($temp);
                    $pagecontents->put('footedit0', $temp);
                }
                else
                    $pagecontents->put('footedit0', '');

                $pagecontents->put('barcent', $foot->barcent);//css
                $pagecontents->put('barcentfontcolor', $foot->barcentfontcolor);
                $pagecontents->put('barcentfontsize', $foot->barcentfontsize);
                $pagecontents->put('barcentfontcont', trim($foot->barcentfontcont));
                $pagecontents->put('barcentimg', $foot->barcentimg==null ? '' : $foot->barcentimg);
                $pagecontents->put('barcentfontlink', empty($foot->barcentfontlink) ? '#' : $foot->barcentfontlink);
                if(isset($foot->edit1)){
                    $temp = trim($foot->edit1);
                    $temp = html_entity_decode($temp);
                    $pagecontents->put('footedit1', $temp);
                }
                else
                    $pagecontents->put('footedit1', '');

                $pagecontents->put('barright',$foot->barright);//css
                $pagecontents->put('barrightfontcolor',$foot->barrightfontcolor);
                $pagecontents->put('barrightfontsize',$foot->barrightfontsize);
                $pagecontents->put('barrightfontcont',trim($foot->barrightfontcont));
                $pagecontents->put('barrightimg',$foot->barrightimg==null ? '' : $foot->barrightimg);
                $pagecontents->put('barrightfontlink', empty($foot->barrightfontlink) ? '#' : $foot->barrightfontlink);

                if(isset($foot->edit2)){
                    $temp = trim($foot->edit2);
                    $temp = html_entity_decode($temp);
                    $pagecontents->put('footedit2', $temp);
                }
                else
                    $pagecontents->put('footedit2', '');

                $pagecontents->put('footbar', 'y');

            }
            else
            {
                $pagecontents->put('footbar', '');

            }
        }
        else
        {
            $pagecontents->put('footbar', '');

        }

        if($row2!=null && !empty($row2))
        {
            $footmenu =json_decode($row2->footmenu);

            $pagecontents->put('menu0style','');
            $pagecontents->put('menu0fontcolor','');
            $pagecontents->put('menu0fonttitle','');
            $pagecontents->put('menu0fontsize','');
            $pagecontents->put('menu0contlinks','');
            $pagecontents->put('menu0icon','');
            $pagecontents->put('edit0', '');//editor

            $pagecontents->put('menu1style','');
            $pagecontents->put('menu1fontcolor','');
            $pagecontents->put('menu1fonttitle','');
            $pagecontents->put('menu1fontsize','');
            $pagecontents->put('menu1contlinks','');
            $pagecontents->put('menu1icon','');
            $pagecontents->put('edit1', '');//editor

            $pagecontents->put('menu2style','');
            $pagecontents->put('menu2fontcolor','');
            $pagecontents->put('menu2fonttitle','');
            $pagecontents->put('menu2fontsize','');
            $pagecontents->put('menu2contlinks','');
            $pagecontents->put('menu2icon','');
            $pagecontents->put('edit2', '');//editor

            if($footmenu!==null && !empty($footmenu)){
                foreach($footmenu as $key => $link) {
                    //$mu = $key.'::'.$link;
                    if($key==='edit0' || $key==='edit1' || $key==='edit2'){
                        $link = trim($link);
                        $link = html_entity_decode($link);
                    }
                    $pagecontents->put($key,$link);
                }
                $pagecontents->put('footmenus','y');
            }
            else
                $pagecontents->put('footmenus','');
        }
        else
        {
            $pagecontents->put('menu0style','');
            $pagecontents->put('menu0fontcolor','');
            $pagecontents->put('menu0fonttitle','');
            $pagecontents->put('menu0fontsize','');
            $pagecontents->put('menu0contlinks','');
            $pagecontents->put('menu0icon','');
            $pagecontents->put('edit0', '');//editor

            $pagecontents->put('menu1style','');
            $pagecontents->put('menu1fontcolor','');
            $pagecontents->put('menu1fonttitle','');
            $pagecontents->put('menu1fontsize','');
            $pagecontents->put('menu1contlinks','');
            $pagecontents->put('menu1icon','');
            $pagecontents->put('edit1', '');//editor

            $pagecontents->put('menu2style','');
            $pagecontents->put('menu2fontcolor','');
            $pagecontents->put('menu2fonttitle','');
            $pagecontents->put('menu2fontsize','');
            $pagecontents->put('menu2contlinks','');
            $pagecontents->put('menu2icon','');
            $pagecontents->put('edit2', '');//editor
            $pagecontents->put('footmenus','');

        }

        $row=null;
        $row = DB::table('webwesglobal_appea')
            ->select(DB::raw('trans, socialsetting'))
            ->whereRaw('trans like "'.$ciso.'%" and is_socialsetting=1'.$deviceSql)
            ->where('g_path', $this->g_path)
            ->get()->first();

        $instrjson='';
        if (($row!==null) && property_exists($row, 'socialsetting')){
            $instrjson = $row->socialsetting;
        }
        $pagecontents->put('socialsetting',$instrjson);

        return $pagecontents;
    }//getFootData

    public function validLang($uiso)
    {
        if (array_key_exists($uiso, $this->changeLang)) {
            $uiso = $this->changeLang[$uiso];
        }
        return $uiso;
    }

    public function compareSavedLang($lang=null){
        /**/
        if($lang!==null)
        {
            $ulang = session()->get('ulang');
            if(is_array($ulang))
                $ulang = $ulang[0];

            if($ulang!==$lang)
                session()->put('ulang', $lang);

            $uiso = session()->get('ulang');
            $uiso = $this->validLang($uiso);
            return $uiso;
        }
        else
        {
            $uiso = session()->get('ulang');
            if(is_array($uiso))
                $uiso = $uiso[0];
            $uiso = $this->validLang($uiso);
            return $uiso;
        }

    }//compareSavedLang

    public function Translate ($host, $key, $content) {

        $headers = "Content-type: application/json\r\n" .
            "Content-length: " . strlen($content) . "\r\n" .
            "Ocp-Apim-Subscription-Key: " . $key . "\r\n" .
            "Ocp-Apim-Subscription-Region: westus2\r\n" .
            "X-ClientTraceId: " . $this->com_create_guid() . "\r\n";

        $options = array (
            'http' => array (
                'header' => $headers,
                'method' => 'POST',
                'content' => $content,
                'ignore_errors' => false
            )
        );
        $context  = stream_context_create ($options);
        $result = file_get_contents ($host, false, $context);
      //  var_dump($result);
        return $result;
    }//Translate

    public function getTranslateString(Request $request){
        $iso=$request->post('iso');
        $trans_str =  $request->post('trans_str');

        $giso='en';
        if($iso=='us')
            $giso='en';
        else if($iso=='kr')
            $giso='ko';
        else if($iso=='jp')
            $giso='ja';
        else if($iso=='cn')
            $giso='zh';
        else
            $giso=$iso;

        try{
            $config['default_target_translation']= $giso;
            $config['api_key']='AIzaSyDiZHLEFfLEkexBLxV-3C9Q3al1Klj_9oU';
            $translateClient = new GoogleTranslateClient($config);
        } catch(\Exception $e){
            $config['default_target_translation']='en';
            $config['api_key']='AIzaSyDiZHLEFfLEkexBLxV-3C9Q3al1Klj_9oU';
            $translateClient = new GoogleTranslateClient($config);
        }
        try {
            $transed = $translateClient->translate($trans_str, $giso);
            $text = $transed['text'];
        } catch (\Exception $e) {
            $str_cont = $trans_str;
            $google_enable=false;
        }

        return \Response::json([
            'msg'   =>  'ok',
            'location' =>  $text
        ]);

        exit();
    }

    public function FrontPageContent($iso){
        $querystr=" SELECT  IFNULL(b.id, a.id) as id, ";
        $querystr.=" IFNULL(b.str_type, a.str_type) AS str_type, ";
        $querystr.=" IFNULL(b.str_key, a.str_key) AS str_key, ";
        $querystr.=" IFNULL(a.str_cont, '') AS str_cont, ";
        $querystr.=" IFNULL(b.str_cont, '') AS iso_cont, ";
        $querystr.=" IFNULL(b.str_link, a.str_link) AS str_link, ";
        $querystr.=" IFNULL(b.iso, 'en') AS iso";
        $querystr.=" from";
        $querystr.=" (SELECT id, str_type, str_key, str_cont,str_link, iso";
        $querystr.="  FROM wesfront_lang";
        $querystr.="  WHERE iso='en') AS a";
        $querystr.=" LEFT JOIN";
        $querystr.=" (SELECT id, str_type, str_key, str_cont,str_link, iso";
        $querystr.=" FROM wesfront_lang";
        $querystr.="  WHERE iso='".$iso."') AS b";
        $querystr.=" ON a.str_key = b.str_key AND a.str_type = b.str_type";
        $rows = DB::select( DB::raw($querystr) );
        $returnarray=array();

        $giso='en';
        if($iso=='us')
            $giso='en';
        else if($iso=='kr')
            $giso='ko';
        else if($iso=='jp')
            $giso='ja';
        else if($iso=='cn')
            $giso='zh';
        else
            $giso=$iso;
        $translateClient=null;
        $createtime = date("Y-m-d h:i:s", time());
        try{
            $config['default_target_translation']= $giso;
            $config['api_key']='AIzaSyDiZHLEFfLEkexBLxV-3C9Q3al1Klj_9oU';
            $translateClient = new GoogleTranslateClient($config);
        } catch(\Exception $e){
            $config['default_target_translation']='en';
            $config['api_key']='AIzaSyDiZHLEFfLEkexBLxV-3C9Q3al1Klj_9oU';
            $translateClient = new GoogleTranslateClient($config);
        }
        $google_enable=true;
        for($i=0;$i < count($rows); $i++)
        {
            $row = $rows[$i];
            $str_type=$row->str_type;
            $str_key=$row->str_key;
            $str_link = $row->str_link;
            $contentKey = $str_type.'_'.$str_key;
            $iso_cont =$row->iso_cont;
            $defstr_cont = $row->str_cont;

            if($translateClient!==null)
            {

                if (empty($iso_cont))
                {
                    try {
                        $transed = $translateClient->translate($defstr_cont, $giso);
                        $text = $transed['text'];
                        if (empty($text))
                            $str_cont = $defstr_cont;
                        else
                        {
                            $str_cont = $text;
                            $iid = DB::table('wesfront_lang')->insertGetId(
                                [
                                    'str_type' => $str_type
                                    , 'str_key' => $str_key
                                    , 'str_cont' => $str_cont
                                    , 'str_link' => $str_link
                                    , 'iso' => $iso
                                    , 'created_at' => $createtime
                                ]
                            );
                        }

                    } catch (\Exception $e) {
                        $str_cont = $defstr_cont;
                        $google_enable=false;
                    }
                }
                else
                    $str_cont = $row->iso_cont;
            }

            if($translateClient===null || $google_enable===false)
            {
                $commonctrl = new CommonController;
                $templang=array();
                array_push($templang, array ('Text' =>$defstr_cont));
                if (empty($iso_cont))
                {
                    $transed = $commonctrl->Translate($giso, $templang);
                    if (empty($transed)){
                        $str_cont = $defstr_cont;
                    }
                    else
                    {
                        $transed = json_decode($transed);
                        foreach ($transed as $tt)
                        {
                            foreach ($tt as $t)
                            {
                                $str_cont = $t[0]->text;
                                break;
                            }
                            break;
                        }

                        $iid = DB::table('wesfront_lang')->insertGetId(
                            [
                                'str_type' => $str_type
                                , 'str_key' => $str_key
                                , 'str_cont' => $str_cont
                                , 'str_link' => $str_link
                                , 'iso' => $iso
                                , 'created_at' => $createtime
                            ]
                        );
                    }

                }
                else
                    $str_cont = $row->iso_cont;
            }

            $returnarray[$contentKey]=$str_cont;
        }

        return $returnarray;
    }
}
