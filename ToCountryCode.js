function operator(proxies) {
	const ISOFlags = {
        '🏴‍☠️': ['N/A', 'BAND'],
        '🇸🇱': ['TEST', 'SOS'],
        '🇦🇩': ['AD', 'AND'],
        '🇦🇪': ['AE', 'ARE'],
        '🇦🇫': ['AF', 'AFG'],
        '🇦🇱': ['AL', 'ALB'],
        '🇦🇲': ['AM', 'ARM'],
        '🇦🇷': ['AR', 'ARG'],
        '🇦🇹': ['AT', 'AUT'],
        '🇦🇺': ['AU', 'AUS'],
        '🇦🇿': ['AZ', 'AZE'],
        '🇧🇦': ['BA', 'BIH'],
        '🇧🇩': ['BD', 'BGD'],
        '🇧🇪': ['BE', 'BEL'],
        '🇧🇬': ['BG', 'BGR'],
        '🇧🇭': ['BH', 'BHR'],
        '🇧🇷': ['BR', 'BRA'],
        '🇧🇾': ['BY', 'BLR'],
        '🇨🇦': ['CA', 'CAN'],
        '🇨🇭': ['CH', 'CHE'],
        '🇨🇱': ['CL', 'CHL'],
        '🇨🇴': ['CO', 'COL'],
        '🇨🇷': ['CR', 'CRI'],
        '🇨🇾': ['CY', 'CYP'],
        '🇨🇿': ['CZ', 'CZE'],
        '🇩🇪': ['DE', 'DEU'],
        '🇩🇰': ['DK', 'DNK'],
        '🇪🇨': ['EC', 'ECU'],
        '🇪🇪': ['EE', 'EST'],
        '🇪🇬': ['EG', 'EGY'],
        '🇪🇸': ['ES', 'ESP'],
        '🇫🇮': ['FI', 'FIN'],
        '🇫🇷': ['FR', 'FRA'],
        '🇬🇧': ['GB', 'GBR', 'UK'],
        '🇬🇪': ['GE', 'GEO'],
        '🇬🇷': ['GR', 'GRC'],
        '🇭🇰': ['HK', 'HKG', 'HKT', 'HKBN', 'HGC', 'WTT', 'CMI'],
        '🇭🇷': ['HR', 'HRV'],
        '🇭🇺': ['HU', 'HUN'],
        '🇯🇴': ['JO', 'JOR'],
        '🇯🇵': ['JP', 'JPN'],
        '🇰🇪': ['KE', 'KEN'],
        '🇰🇬': ['KG', 'KGZ'],
        '🇰🇭': ['KH', 'KGZ'],
        '🇰🇵': ['KP', 'PRK'],
        '🇰🇷': ['KR', 'KOR'],
        '🇰🇿': ['KZ', 'KAZ'],
        '🇮🇩': ['ID', 'IDN'],
        '🇮🇪': ['IE', 'IRL'],
        '🇮🇱': ['IL', 'ISR'],
        '🇮🇲': ['IM', 'IMN'],
        '🇮🇳': ['IN', 'IND'],
        '🇮🇷': ['IR', 'IRN'],
        '🇮🇸': ['IS', 'ISL'],
        '🇮🇹': ['IT', 'ITA'],
        '🇱🇹': ['LT', 'LTU'],
        '🇱🇺': ['LU', 'LUX'],
        '🇱🇻': ['LV', 'LVA'],
        '🇲🇦': ['MA', 'MAR'],
        '🇲🇩': ['MD', 'MDA'],
        '🇳🇬': ['NG', 'NGA'],
        '🇲🇰': ['MK', 'MKD'],
        '🇲🇳': ['MN', 'MNG'],
        '🇲🇴': ['MO', 'MAC', 'CTM'],
        '🇲🇹': ['MT', 'MLT'],
        '🇲🇽': ['MX', 'MEX'],
        '🇲🇾': ['MY', 'MYS'],
        '🇳🇱': ['NL', 'NLD'],
        '🇳🇴': ['NO', 'NOR'],
        '🇳🇵': ['NP', 'NPL'],
        '🇳🇿': ['NZ', 'NZL'],
        '🇵🇦': ['PA', 'PAN'],
        '🇵🇪': ['PE', 'PER'],
        '🇵🇭': ['PH', 'PHL'],
        '🇵🇰': ['PK', 'PAK'],
        '🇵🇱': ['PL', 'POL'],
        '🇵🇷': ['PR', 'PRI'],
        '🇵🇹': ['PT', 'PRT'],
        '🇵🇾': ['PY', 'PRY'],
        '🇷🇴': ['RO', 'ROU'],
        '🇷🇸': ['RS', 'SRB'],
        '🇷🇪': ['RE', 'REU'],
        '🇷🇺': ['RU', 'RUS'],
        '🇸🇦': ['SA', 'SAU'],
        '🇸🇪': ['SE', 'SWE'],
        '🇸🇬': ['SG', 'SGP'],
        '🇸🇮': ['SI', 'SVN'],
        '🇸🇰': ['SK', 'SVK'],
        '🇹🇭': ['TH', 'THA'],
        '🇹🇳': ['TN', 'TUN'],
        '🇹🇷': ['TR', 'TUR'],
        '🇹🇼': ['TW', 'TWN', 'CHT', 'HINET'],
        '🇺🇦': ['UA', 'UKR'],
        '🇺🇸': ['US', 'USA', 'LAX', 'SFO'],
        '🇺🇾': ['UY', 'URY'],
        '🇻🇪': ['VE', 'VEN'],
        '🇻🇳': ['VN', 'VNM'],
        '🇿🇦': ['ZA', 'ZAF'],
        '🇨🇳': ['CN', 'CHN', 'BACK'],
    };
	return proxies.map(p => {
		let Flag = p.name.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/)?.[0] || '🏴‍☠️';
		//if (Flag != '🏴‍☠️'){
			const keywords = ISOFlags[Flag][1];
			p.name = `${Flag} ${keywords} ${proxies.length}`;
                //}
		return p;
	});
}
