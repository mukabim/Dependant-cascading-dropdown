const
	lgaform = document.form1
	stateObject = { 
    'ABIA': [ " Aba North\n", "Aba South\n", "Arochukwu\n", "Bende\n", "Ikwuano\n", "Isiala Ngwa North\n", 
        "Isiala Ngwa South\n", "Isuikwuato\n", "Obi Ngwa\n", "Ohafia\n", "Osisioma\n", "Ugwunagbo\n", "Ukwa East\n", "Ukwa West\n",
         "Umu Nneochi\n", "Umuahia North\n", "Umuahia South\n" ],
    'ADAMAWA' : [" Demsa\n", "Fufure\n", "Ganye\n", "Gayuk\n", "Gombi\n", "Grie\n", "Hong\n", "Jada\n", "Lamurde\n",
        "Madagali\n", "Maiha\n", "Mayo Belwa\n", "Michika\n", "Mubi North\n", "Mubi South\n", "Numan\n", "Shelleng\n", "Song\n", "Toungo\n",
        "Yola North\n", "Yola South\n" ],
    'AKWA IBOM'  : [ " Abak\n", "Eastern Obolo\n", "Eket\n", "Esit Eket\n", "Essien Udim\n", "Etim Ekpo\n", "Etinan\n", "Ibeno\n", "Ibesikpo Asutan\n",
             "Ibiono-Ibom\n", "Ika\n", "Ikono\n", "Ikot Abasi\n", "Ikot Ekpene\n", "Ini\n", "Itu\n", "Mbo\n", "Mkpat-Enin\n", "Nsit-Atai\n", "Nsit-Ibom\n", 
             "Nsit-Ubium\n", "Obot Akara\n", "Okobo\n", "Onna\n", "Oron\n", "Oruk Anam\n", "Udung-Uko\n", "Ukanafun\n", "Uruan\n", "Urue-Offong/Oruko\n", "Uyo" ], 
    'ANAMBRA'    : [" Aguata\n", "Anambra East\n", "Anambra West\n", "Anaocha\n", "Awka North\n", "Awka South\n", "Ayamelum\n", "Dunukofia\n", "Ekwusigo\n",
        "Idemili North\n","Idemili South\n", "Ihiala\n", "Njikoka\n", "Nnewi North\n", "Nnewi South\n", "Ogbaru\n", "Onitsha North\n",
        "Onitsha South\n", "Orumba North\n", "Orumba South\n", "Oyi"],
    'BAUCHI'    : [ " Alkaleri\n", "Bauchi\n", "Bogoro\n", "Damban\n", "Darazo\n", "Dass\n", "Gamawa\n", "Ganjuwa\n", "Giade\n",
        "Itas/Gadau\n", "Jama'are\n", "Katagum\n", "Kirfi\n", "Misau\n", "Ningi\n", "Shira\n", "Tafawa Balewa\n", "Toro\n", "Warji\n", "Zaki\n"],
    'BAYELSA'    : [" Brass\n", "Ekeremor\n", "Kolokuma/Opokuma\n", "Nembe\n", "Ogbia\n", "Sagbama\n", "Southern Ijaw\n", "Yenagoa" ],
    'BENUE'    : [ " Ado\n", "Agatu\n", "Apa\n", "Buruku\n", "Gboko\n", "Guma\n", "Gwer East\n", "Gwer west\n", "Katsina-Ala\n",
             "Konshisha\n", "Kwande\n", "Logo\n", "Makurdi\n", "Obi\n", "Ogbadibo\n", "Ohimini\n", "Oju\n", "Okpokwu\n",
              "Oturkpo\n", "Tarka\n", "Ukum\n", "Ushongo\n", "Vandeikya" ],
    'BORNO'    : [" Abadam\n", "Askira/Uba\n", "Bama\n", "Bayo\n", "Biu\n", "Chibok\n", "Damboa\n", "Dikwa\n", "Gubio\n", "Guzamala\n", "Gwoza\n",
         "Hawul\n", "Jere\n", "Kaga\n", "Kala/Balge\n", "Konduga\n", "Kukawa\n", "Kwaya Kusar\n", "Mafa\n", "Magumeri\n",
          "Maiduguri\n", "Marte\n", "Mobbar\n", "Monguno\n", "Ngala\n", "Nganzai\n", "Shani" ],
    'CROSS RIVER'    : [ " Abi\n", "Akamkpa\n", "Akpabuyo\n", "Bakassi\n", "Bekwarra\n", "Biase\n", "Boki\n", "Calabar Municipal\n", "Calabar South\n",
        "Etung\n", "Ikom\n", "Obanliku\n", "Obubra\n", "Obudu\n", "Odukpani\n", "Ogoja\n", "Yakuur\n", "Yala"],
    'DELTA'    : [ "Aniocha North\n", "Aniocha South\n", "Bomadi\n", "Burutu\n", "Ethiope East\n", "Ethiope West\n", "Ika North East\n", "Ika South\n",
            "Isoko North\n", "Isoko South\n", "Ndokwa East\n", "Ndokwa West\n", "Okpe\n", "Oshimili North\n", "Oshimili South\n", "Patani\n",
            "Sapele\n", "Udu\n", "Ughelli North\n", "Ughelli South\n", "Ukwuani\n", "Uvwie\n", "Warri North\n", "Warri South\n", "Warri South West" ],
    'EBONYI'    : [ " Abakaliki\n", "Afikpo North\n", "Afikpo South\n", "Ebonyi\n", "Ezza North\n", "Ezza South\n", "Ikwo\n", "Ishielu\n", "Ivo\n", "Izzi\n",
            "Ohaozara\n", "Ohaukwu\n", "Onicha" ],
    'EDO'    : [ " Akoko-Edo\n", "Egor\n", "Esan Central\n", "Esan North-East\n", "Esan South-East\n", "Esan West\n", "Etsako Central\n",
            "Etsako East\n", "Etsako West\n", "Igueben\n", "Ikpoba Okha\n", "Oredo\n", "Orhionmwon\n", "Ovia North-East\n",
            "Ovia South-West\n", "Owan East\n", "Owan West\n", "Uhunmwonde" ],
    'EKITI'    : [ " Ado Ekiti\n", "Efon\n", "Ekiti East\n", "Ekiti South-West\n", "Ekiti West\n", "Emure\n", "Gbonyin\n",
            "Ido Osi\n", "Ijero\n", "Ikere\n", "Ikole\n", "Ilejemeje\n", "Irepodun/Ifelodun\n", "Ise/Orun\n", "Moba\n", "Oye"],
    'ENUGU'    : [" Aninri\n", "Awgu\n", "Enugu East\n", "Enugu North\n", "Enugu South\n", "Ezeagu\n", "Igbo Etiti\n", "Igbo Eze North\n",
            "Igbo Eze South\n", "Isi Uzo\n", "Nkanu East\n", "Nkanu West\n", "Nsukka\n", "Oji River\n", "Udenu\n", "Udi\n", "Uzo Uwani\n" ],
    'FCT (ABUJA)'    : [ " Abaji\n", "Bwari\n", "Gwagwalada\n", "Kuje\n", "Kwali\n", "Municipal Area Council" ],
    'GOMBE'    : [" Akko\n", "Balanga\n", "Billiri\n", "Dukku\n", "Funakaye\n", "Gombe\n", "Kaltungo\n", "Kwami\n", "Nafada\n", "Shongom\n", "Yamaltu/Deba"],
    'IMO'    : [ " Aboh Mbaise\n", "Ahiazu Mbaise\n", "Ehime Mbano\n", "Ezinihitte\n", "Ideato North\n", "Ideato South\n", "Ihitte/Uboma\n",
        "Ikeduru\n", "Isiala Mbano\n", "Isu\n", "Mbaitoli\n", "Ngor Okpala\n", "Njaba\n", "Nkwerre\n", "Nwangele\n", "Obowo\n", "Oguta\n",
        "Ohaji/Egbema\n", "Okigwe\n", "Orlu\n", "Orsu\n", "Oru East\n", "Oru West\n", "Owerri Municipal\n", "Owerri North\n", "Owerri West\n", "Unuimo" ],
    'JIGAWA'    : [ " Auyo\n", "Babura\n", "Biriniwa\n", "Birnin Kudu\n", "Buji\n", "Dutse\n", "Gagarawa\n", "Garki\n", "Gumel\n", "Guri\n", "Gwaram\n", "Gwiwa\n", "Hadejia\n",
        "Jahun\n", "Kafin Hausa\n", "Kaugama\n", "Kazaure\n", "Kiri Kasama\n", "Kiyawa\n", "Maigatari\n", "Malam Madori\n", "Miga\n", "Ringim\n",
        "Roni\n", "Sule Tankarkar\n", "Taura\n", "Yankwashi" ],
    'KADUNA'    : [" Birnin Gwari\n", "Chikun\n", "Giwa\n", "Igabi\n", "Ikara\n", "Jaba\n", "Jema'a\n", "Kachia\n", "Kaduna North\n", "Kaduna South\n", "Kagarko\n", "Kajuru\n",
        "Kaura\n", "Kauru\n", "Kubau\n", "Kudan\n", "Lere\n", "Makarfi\n", "Sabon Gari\n", "Sanga\n", "Soba\n", "Zangon Kataf\n", "Zaria" ],
    'KANO'    : [ " Ajingi\n", "Albasu\n", "Bagwai\n", "Bebeji\n", "Bichi\n", "Bunkure\n", "Dala\n","Dambatta\n", "Dawakin Kudu\n", "Dawakin Tofa\n",
         "Doguwa\n", "Fagge\n", "Gabasawa\n", "Garko\n", "Garun Mallam\n", "Gaya\n", "Gezawa\n", "Gwale\n", "Gwarzo\n", "Kabo\n", "Kano Municipal\n",
        "Karaye\n", "Kibiya\n", "Kiru\n", "Kumbotso\n", "Kunchi\n", "Kura\n", "Madobi\n", "Makoda\n", "Minjibir\n", "Nasarawa\n", "Rano\n",
        "Rimin Gado\n", "Rogo\n", "Shanono\n", "Sumaila\n", "Takai\n", "Tarauni\n", "Tofa\n", "Tsanyawa\n", "Tudun Wada\n", "Ungogo\n", "Warawa\n", "Wudil" ],
    'KATSINA'    : [ "Bakori\n", "Batagarawa\n", "Batsari\n", "Baure\n", "Bindawa\n", "Charanchi\n", "Dan Musa\n", "Dandume\n", "Danja\n", "Daura\n",
        "Dutsi\n", "Dutsin Ma\n", "Faskari\n", "Funtua\n", "Ingawa\n", "Jibia\n", "Kafur\n", "Kaita\n", "Kankara\n", "Kankia\n", "Katsina\n", "Kurfi\n",
        "Kusada\n", "Mai'Adua\n", "Malumfashi\n", "Mani\n", "Mashi\n", "Matazu\n", "Musawa\n", "Rimi\n", "Sabuwa\n", "Safana\n", "Sandamu\n", "Zango" ],
    'KEBBI'    : [ " Aleiro\n", "Arewa Dandi\n", "Argungu\n", "Augie\n", "Bagudo\n", "Birnin Kebbi\n", "Bunza\n", "Dandi\n", "Fakai\n", "Gwandu\n", "Jega\n",
        "Kalgo\n", "Koko/Besse\n", "Maiyama\n", "Ngaski\n", "Sakaba\n", "Shanga\n", "Suru\n", "Wasagu/Danko\n", "Yauri\n", "Zuru" ],
    'KOGI'    : [" Adavi\n", "Ajaokuta\n", "Ankpa\n", "Bassa\n", "Dekina\n", "Ibaji\n", "Idah\n", "Igalamela Odolu\n", "Ijumu\n", "Kabba/Bunu\n",
        "Kogi\n", "Lokoja\n", "Mopa Muro\n", "Ofu\n", "Ogori/Magongo\n", "Okehi\n", "Okene\n", "Olamaboro\n", "Omala\n", "Yagba East\n", "Yagba West" ],
    'KWARA'    : [" Asa\n", "Baruten\n", "Edu\n", "Ekiti\n", "Ifelodun\n", "Ilorin East\n", "Ilorin South\n", "Ilorin West\n", "Irepodun\n", "Isin\n",
        "Kaiama\n", "Moro\n", "Offa\n", "Oke Ero\n", "Oyun\n", "Pategi" ],
    'LAGOS'    : [" Agege\n", "Ajeromi-Ifelodun\n", "Alimosho\n", "Amuwo-Odofin\n", "Apapa\n", "Badagry\n", "Epe\n", "Eti Osa\n", "Ibeju-Lekki\n",
        "Ifako-Ijaiye\n", "Ikeja\n", "Ikorodu\n", "Kosofe\n", "Lagos Island\n", "Lagos Mainland\n", "Mushin\n", "Ojo\n", "Oshodi-Isolo\n", "Shomolu\n", "Surulere" ],
    'NASSARAWA'    : [" Akwanga\n", "Awe\n", "Doma\n", "Karu\n", "Keana\n", "Keffi\n", "Kokona\n", "Lafia\n", "Nasarawa\n", "Nasarawa Egon\n", "Obi\n",
        "Toto\n", "Wamba" ],
    'NIGER'    : [ " Agaie\n", "Agwara\n", "Bida\n", "Borgu\n", "Bosso\n", "Chanchaga\n", "Edati\n", "Gbako\n", "Gurara\n", "Katcha\n", "Kontagora\n",
        "Lapai\n", "Lavun\n", "Magama\n", "Mariga\n", "Mashegu\n", "Mokwa\n", "Moya\n", "Paikoro\n", "Rafi\n", "Rijau\n", "Shiroro\n", "Suleja\n",
        "Tafa\n", "Wushishi"],
    'OGUN'    : [ " Abeokuta North\n", "Abeokuta South\n", "Ado-Odo/Ota\n", "Egbado North\n", "Egbado South\n", "Ewekoro\n", "Ifo\n", "Ijebu East\n",
        "Ijebu North\n", "Ijebu North East\n", "Ijebu Ode\n", "Ikenne\n", "Imeko Afon\n", "Ipokia\n", "Obafemi Owode\n", "Odeda\n", "Odogbolu\n",
        "Ogun Waterside\n", "Remo North\n", "Shagamu" ],
    'ONDO'    : [" Akoko North-East\n", "Akoko North-West\n", "Akoko South-East\n", "Akoko South-West\n", "Akure North\n", "Akure South\n", "Ese Odo\n",
        "Idanre\n", "Ifedore\n", "Ilaje\n", "Ile Oluji/Okeigbo\n", "Irele\n", "Odigbo\n", "Okitipupa\n", "Ondo East\n", "Ondo West\n", "Ose\n", "Owo"],
    'OSUN'    : [ " Aiyedaade\n", "Aiyedire\n", "Atakunmosa East\n", "Atakunmosa West\n", "Boluwaduro\n", "Boripe\n", "Ede North\n", "Ede South\n",
        "Egbedore\n", "Ejigbo\n", "Ife Central\n", "Ife East\n", "Ife North\n", "Ife South\n", "Ifedayo\n", "Ifelodun\n", "Ila\n", "Ilesa East\n",
        "Ilesa West\n", "Irepodun\n", "Irewole\n", "Isokan\n", "Iwo\n", "Obokun\n", "Odo Otin\n", "Ola Oluwa\n", "Olorunda\n", "Oriade\n", "Orolu\n", "Osogbo" ],
    'OYO'    : [ " Afijio\n", "Akinyele\n", "Atiba\n", "Atisbo\n", "Egbeda\n", "Ibadan North\n", "Ibadan North-East\n", "Ibadan North-West\n",
        "Ibadan South-East\n", "Ibadan South-West\n", "Ibarapa Central\n", "Ibarapa East\n", "Ibarapa North\n", "Ido\n", "Irepo\n", "Iseyin\n", "Itesiwaju\n",
        "Iwajowa\n", "Kajola\n", "Lagelu\n", "Ogbomosho North\n", "Ogbomosho South\n", "Ogo Oluwa\n", "Olorunsogo\n", "Oluyole\n", "Ona Ara\n", "Orelope\n",
        "Ori Ire\n", "Oyo\n", "Oyo East\n", "Saki East\n", "Saki West\n", "Surulere" ],
    'PLATEAU'    : [ " Barkin Ladi\n", "Bassa\n", "Bokkos\n", "Jos East\n", "Jos North\n", "Jos South\n", "Kanam\n", "Kanke\n", "Langtang North\n",
        "Langtang Southn\n", "Mangu\n", "Mikang\n", "Pankshin\n", "Qua'an Pan\n", "Riyom\n", "Shendam\n", "Wase"],
    'RIVERS'    : [ " Abua/Odual\n", "Ahoada East\n", "Ahoada West\n", "Akuku-Toru\n", "Andoni\n", "Asari-Toru\n", "Bonny\n", "Degema\n", "Eleme\n",
        "Emuoha\n", "Etche\n", "Gokana\n", "Ikwerre\n", "Khana\n", "Obio/Akpor\n", "Ogba/Egbema/Ndoni\n", "Ogu/Bolo\n", "Okrika\n", "Omuma\n", "Opobo/Nkoro\n",
        "Oyigbo\n", "Port Harcourt\n", "Tai" ],
  'SOKOTO'    : [ " Binji\n", "Bodinga\n", "Dange Shuni\n", "Gada\n", "Goronyo\n", "Gudu\n", "Gwadabawa\n", "Illela\n", "Isa\n", "Kebbe\n", "Kware\n",
        "Rabah\n", "Sabon Birni\n", "Shagari\n", "Silame\n", "Sokoto North\n", "Sokoto South\n", "Tambuwal\n", "Tangaza\n", "Tureta\n", "Wamako\n", "Wurno\n", "Yabo" ],
  'TARABA'    : [ " Ardo Kola\n", "Bali\n", "Donga\n", "Gashaka\n", "Gassol\n", "Ibi\n", "Jalingo\n", "Karim Lamido\n", "Kumi\n", "Lau\n", "Sardauna\n",
        "Takum\n", "Ussa\n", "Wukari\n", "Yorro\n", "Zing" ],
    'YOBE'    : [" Bade\n", "Bursari\n", "Damaturu\n", "Fika\n", "Fune\n", "Geidam\n", "Gujba\n", "Gulani\n", "Jakusko\n", "Karasuwa\n", "Machina\n",
        "Nangere\n", "Nguru\n", "Potiskum\n", "Tarmuwa\n", "Yunusari\n", "Yusufari" ],
    'ZAMFARA'    : [" Anka\n", "Bakura\n", "Birnin Magaji/Kiyaw\n", "Bukkuyum\n", "Bungudu\n", "Chafe\n", "Gummi\n", "Gusau\n", "Kaura Namoda\n", "Maradun\n",
        "Maru\n", "Shinkafi\n", "Talata Mafara\n", "Zurmi" ]

  };
for (let lga in stateObject)
  {
  lgaform.state.add( new Option(lga,lga))
  }
lgaform.state.onchange =_=>
  {
  lgaform.lga.length = 1
  lgaform.lga.value  = ''
  for( let lgaName of stateObject[lgaform.state.value])
    {
    lgaform.lga.add( new Option(lgaName,lgaName))
    }
  }
  function disply() {   
    alert("Successfully submitted.");
  }