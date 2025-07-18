const personajes = [
	{
		"name": "Luke Skywalker",
		"height": "172",
		"mass": "77",
		"hair_color": "blond",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "19BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/1",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": [
			"https://swapi.info/api/vehicles/14",
			"https://swapi.info/api/vehicles/30"
		],
		"starships": [
			"https://swapi.info/api/starships/12",
			"https://swapi.info/api/starships/22"
		],
		"created": "2014-12-09T13:50:51.644000Z",
		"edited": "2014-12-20T21:17:56.891000Z",
		"url": "https://swapi.info/api/people/1"
	},
	{
		"name": "C-3PO",
		"height": "167",
		"mass": "75",
		"hair_color": "n/a",
		"skin_color": "gold",
		"eye_color": "yellow",
		"birth_year": "112BBY",
		"gender": "n/a",
		"homeworld": "https://swapi.info/api/planets/1",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/2"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-10T15:10:51.357000Z",
		"edited": "2014-12-20T21:17:50.309000Z",
		"url": "https://swapi.info/api/people/2"
	},
	{
		"name": "R2-D2",
		"height": "96",
		"mass": "32",
		"hair_color": "n/a",
		"skin_color": "white, blue",
		"eye_color": "red",
		"birth_year": "33BBY",
		"gender": "n/a",
		"homeworld": "https://swapi.info/api/planets/8",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/2"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-10T15:11:50.376000Z",
		"edited": "2014-12-20T21:17:50.311000Z",
		"url": "https://swapi.info/api/people/3"
	},
	{
		"name": "Darth Vader",
		"height": "202",
		"mass": "136",
		"hair_color": "none",
		"skin_color": "white",
		"eye_color": "yellow",
		"birth_year": "41.9BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/1",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": [],
		"starships": ["https://swapi.info/api/starships/13"],
		"created": "2014-12-10T15:18:20.704000Z",
		"edited": "2014-12-20T21:17:50.313000Z",
		"url": "https://swapi.info/api/people/4"
	},
	{
		"name": "Leia Organa",
		"height": "150",
		"mass": "49",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "brown",
		"birth_year": "19BBY",
		"gender": "female",
		"homeworld": "https://swapi.info/api/planets/2",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": ["https://swapi.info/api/vehicles/30"],
		"starships": [],
		"created": "2014-12-10T15:20:09.791000Z",
		"edited": "2014-12-20T21:17:50.315000Z",
		"url": "https://swapi.info/api/people/5"
	},
	{
		"name": "Owen Lars",
		"height": "178",
		"mass": "120",
		"hair_color": "brown, grey",
		"skin_color": "light",
		"eye_color": "blue",
		"birth_year": "52BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/1",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-10T15:52:14.024000Z",
		"edited": "2014-12-20T21:17:50.317000Z",
		"url": "https://swapi.info/api/people/6"
	},
	{
		"name": "Beru Whitesun lars",
		"height": "165",
		"mass": "75",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "blue",
		"birth_year": "47BBY",
		"gender": "female",
		"homeworld": "https://swapi.info/api/planets/1",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-10T15:53:41.121000Z",
		"edited": "2014-12-20T21:17:50.319000Z",
		"url": "https://swapi.info/api/people/7"
	},
	{
		"name": "R5-D4",
		"height": "97",
		"mass": "32",
		"hair_color": "n/a",
		"skin_color": "white, red",
		"eye_color": "red",
		"birth_year": "unknown",
		"gender": "n/a",
		"homeworld": "https://swapi.info/api/planets/1",
		"films": ["https://swapi.info/api/films/1"],
		"species": ["https://swapi.info/api/species/2"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-10T15:57:50.959000Z",
		"edited": "2014-12-20T21:17:50.321000Z",
		"url": "https://swapi.info/api/people/8"
	},
	{
		"name": "Biggs Darklighter",
		"height": "183",
		"mass": "84",
		"hair_color": "black",
		"skin_color": "light",
		"eye_color": "brown",
		"birth_year": "24BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/1",
		"films": ["https://swapi.info/api/films/1"],
		"species": [],
		"vehicles": [],
		"starships": ["https://swapi.info/api/starships/12"],
		"created": "2014-12-10T15:59:50.509000Z",
		"edited": "2014-12-20T21:17:50.323000Z",
		"url": "https://swapi.info/api/people/9"
	},
	{
		"name": "Obi-Wan Kenobi",
		"height": "182",
		"mass": "77",
		"hair_color": "auburn, white",
		"skin_color": "fair",
		"eye_color": "blue-gray",
		"birth_year": "57BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/20",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": ["https://swapi.info/api/vehicles/38"],
		"starships": [
			"https://swapi.info/api/starships/48",
			"https://swapi.info/api/starships/59",
			"https://swapi.info/api/starships/64",
			"https://swapi.info/api/starships/65",
			"https://swapi.info/api/starships/74"
		],
		"created": "2014-12-10T16:16:29.192000Z",
		"edited": "2014-12-20T21:17:50.325000Z",
		"url": "https://swapi.info/api/people/10"
	},
	{
		"name": "Anakin Skywalker",
		"height": "188",
		"mass": "84",
		"hair_color": "blond",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "41.9BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/1",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": [
			"https://swapi.info/api/vehicles/44",
			"https://swapi.info/api/vehicles/46"
		],
		"starships": [
			"https://swapi.info/api/starships/39",
			"https://swapi.info/api/starships/59",
			"https://swapi.info/api/starships/65"
		],
		"created": "2014-12-10T16:20:44.310000Z",
		"edited": "2014-12-20T21:17:50.327000Z",
		"url": "https://swapi.info/api/people/11"
	},
	{
		"name": "Wilhuff Tarkin",
		"height": "180",
		"mass": "unknown",
		"hair_color": "auburn, grey",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "64BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/21",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-10T16:26:56.138000Z",
		"edited": "2014-12-20T21:17:50.330000Z",
		"url": "https://swapi.info/api/people/12"
	},
	{
		"name": "Chewbacca",
		"height": "228",
		"mass": "112",
		"hair_color": "brown",
		"skin_color": "unknown",
		"eye_color": "blue",
		"birth_year": "200BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/14",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/3"],
		"vehicles": ["https://swapi.info/api/vehicles/19"],
		"starships": [
			"https://swapi.info/api/starships/10",
			"https://swapi.info/api/starships/22"
		],
		"created": "2014-12-10T16:42:45.066000Z",
		"edited": "2014-12-20T21:17:50.332000Z",
		"url": "https://swapi.info/api/people/13"
	},
	{
		"name": "Han Solo",
		"height": "180",
		"mass": "80",
		"hair_color": "brown",
		"skin_color": "fair",
		"eye_color": "brown",
		"birth_year": "29BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/22",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3"
		],
		"species": [],
		"vehicles": [],
		"starships": [
			"https://swapi.info/api/starships/10",
			"https://swapi.info/api/starships/22"
		],
		"created": "2014-12-10T16:49:14.582000Z",
		"edited": "2014-12-20T21:17:50.334000Z",
		"url": "https://swapi.info/api/people/14"
	},
	{
		"name": "Greedo",
		"height": "173",
		"mass": "74",
		"hair_color": "n/a",
		"skin_color": "green",
		"eye_color": "black",
		"birth_year": "44BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/23",
		"films": ["https://swapi.info/api/films/1"],
		"species": ["https://swapi.info/api/species/4"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-10T17:03:30.334000Z",
		"edited": "2014-12-20T21:17:50.336000Z",
		"url": "https://swapi.info/api/people/15"
	},
	{
		"name": "Jabba Desilijic Tiure",
		"height": "175",
		"mass": "1,358",
		"hair_color": "n/a",
		"skin_color": "green-tan, brown",
		"eye_color": "orange",
		"birth_year": "600BBY",
		"gender": "hermaphrodite",
		"homeworld": "https://swapi.info/api/planets/24",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/4"
		],
		"species": ["https://swapi.info/api/species/5"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-10T17:11:31.638000Z",
		"edited": "2014-12-20T21:17:50.338000Z",
		"url": "https://swapi.info/api/people/16"
	},
	{
		"name": "Wedge Antilles",
		"height": "170",
		"mass": "77",
		"hair_color": "brown",
		"skin_color": "fair",
		"eye_color": "hazel",
		"birth_year": "21BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/22",
		"films": [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3"
		],
		"species": [],
		"vehicles": ["https://swapi.info/api/vehicles/14"],
		"starships": ["https://swapi.info/api/starships/12"],
		"created": "2014-12-12T11:08:06.469000Z",
		"edited": "2014-12-20T21:17:50.341000Z",
		"url": "https://swapi.info/api/people/18"
	},
	{
		"name": "Jek Tono Porkins",
		"height": "180",
		"mass": "110",
		"hair_color": "brown",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/26",
		"films": ["https://swapi.info/api/films/1"],
		"species": [],
		"vehicles": [],
		"starships": ["https://swapi.info/api/starships/12"],
		"created": "2014-12-12T11:16:56.569000Z",
		"edited": "2014-12-20T21:17:50.343000Z",
		"url": "https://swapi.info/api/people/19"
	},
	{
		"name": "Yoda",
		"height": "66",
		"mass": "17",
		"hair_color": "white",
		"skin_color": "green",
		"eye_color": "brown",
		"birth_year": "896BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/28",
		"films": [
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/6"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-15T12:26:01.042000Z",
		"edited": "2014-12-20T21:17:50.345000Z",
		"url": "https://swapi.info/api/people/20"
	},
	{
		"name": "Palpatine",
		"height": "170",
		"mass": "75",
		"hair_color": "grey",
		"skin_color": "pale",
		"eye_color": "yellow",
		"birth_year": "82BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/8",
		"films": [
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-15T12:48:05.971000Z",
		"edited": "2014-12-20T21:17:50.347000Z",
		"url": "https://swapi.info/api/people/21"
	},
	{
		"name": "Boba Fett",
		"height": "183",
		"mass": "78.2",
		"hair_color": "black",
		"skin_color": "fair",
		"eye_color": "brown",
		"birth_year": "31.5BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/10",
		"films": [
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/5"
		],
		"species": [],
		"vehicles": [],
		"starships": ["https://swapi.info/api/starships/21"],
		"created": "2014-12-15T12:49:32.457000Z",
		"edited": "2014-12-20T21:17:50.349000Z",
		"url": "https://swapi.info/api/people/22"
	},
	{
		"name": "IG-88",
		"height": "200",
		"mass": "140",
		"hair_color": "none",
		"skin_color": "metal",
		"eye_color": "red",
		"birth_year": "15BBY",
		"gender": "none",
		"homeworld": "https://swapi.info/api/planets/28",
		"films": ["https://swapi.info/api/films/2"],
		"species": ["https://swapi.info/api/species/2"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-15T12:51:10.076000Z",
		"edited": "2014-12-20T21:17:50.351000Z",
		"url": "https://swapi.info/api/people/23"
	},
	{
		"name": "Bossk",
		"height": "190",
		"mass": "113",
		"hair_color": "none",
		"skin_color": "green",
		"eye_color": "red",
		"birth_year": "53BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/29",
		"films": ["https://swapi.info/api/films/2"],
		"species": ["https://swapi.info/api/species/7"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-15T12:53:49.297000Z",
		"edited": "2014-12-20T21:17:50.355000Z",
		"url": "https://swapi.info/api/people/24"
	},
	{
		"name": "Lando Calrissian",
		"height": "177",
		"mass": "79",
		"hair_color": "black",
		"skin_color": "dark",
		"eye_color": "brown",
		"birth_year": "31BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/30",
		"films": [
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3"
		],
		"species": [],
		"vehicles": [],
		"starships": ["https://swapi.info/api/starships/10"],
		"created": "2014-12-15T12:56:32.683000Z",
		"edited": "2014-12-20T21:17:50.357000Z",
		"url": "https://swapi.info/api/people/25"
	},
	{
		"name": "Lobot",
		"height": "175",
		"mass": "79",
		"hair_color": "none",
		"skin_color": "light",
		"eye_color": "blue",
		"birth_year": "37BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/6",
		"films": ["https://swapi.info/api/films/2"],
		"species": [],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-15T13:01:57.178000Z",
		"edited": "2014-12-20T21:17:50.359000Z",
		"url": "https://swapi.info/api/people/26"
	},
	{
		"name": "Ackbar",
		"height": "180",
		"mass": "83",
		"hair_color": "none",
		"skin_color": "brown mottle",
		"eye_color": "orange",
		"birth_year": "41BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/31",
		"films": ["https://swapi.info/api/films/3"],
		"species": ["https://swapi.info/api/species/8"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-18T11:07:50.584000Z",
		"edited": "2014-12-20T21:17:50.362000Z",
		"url": "https://swapi.info/api/people/27"
	},
	{
		"name": "Mon Mothma",
		"height": "150",
		"mass": "unknown",
		"hair_color": "auburn",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "48BBY",
		"gender": "female",
		"homeworld": "https://swapi.info/api/planets/32",
		"films": ["https://swapi.info/api/films/3"],
		"species": [],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-18T11:12:38.895000Z",
		"edited": "2014-12-20T21:17:50.364000Z",
		"url": "https://swapi.info/api/people/28"
	},
	{
		"name": "Arvel Crynyd",
		"height": "unknown",
		"mass": "unknown",
		"hair_color": "brown",
		"skin_color": "fair",
		"eye_color": "brown",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/28",
		"films": ["https://swapi.info/api/films/3"],
		"species": [],
		"vehicles": [],
		"starships": ["https://swapi.info/api/starships/28"],
		"created": "2014-12-18T11:16:33.020000Z",
		"edited": "2014-12-20T21:17:50.367000Z",
		"url": "https://swapi.info/api/people/29"
	},
	{
		"name": "Wicket Systri Warrick",
		"height": "88",
		"mass": "20",
		"hair_color": "brown",
		"skin_color": "brown",
		"eye_color": "brown",
		"birth_year": "8BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/7",
		"films": ["https://swapi.info/api/films/3"],
		"species": ["https://swapi.info/api/species/9"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-18T11:21:58.954000Z",
		"edited": "2014-12-20T21:17:50.369000Z",
		"url": "https://swapi.info/api/people/30"
	},
	{
		"name": "Nien Nunb",
		"height": "160",
		"mass": "68",
		"hair_color": "none",
		"skin_color": "grey",
		"eye_color": "black",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/33",
		"films": ["https://swapi.info/api/films/3"],
		"species": ["https://swapi.info/api/species/10"],
		"vehicles": [],
		"starships": ["https://swapi.info/api/starships/10"],
		"created": "2014-12-18T11:26:18.541000Z",
		"edited": "2014-12-20T21:17:50.371000Z",
		"url": "https://swapi.info/api/people/31"
	},
	{
		"name": "Qui-Gon Jinn",
		"height": "193",
		"mass": "89",
		"hair_color": "brown",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "92BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/28",
		"films": ["https://swapi.info/api/films/4"],
		"species": [],
		"vehicles": ["https://swapi.info/api/vehicles/38"],
		"starships": [],
		"created": "2014-12-19T16:54:53.618000Z",
		"edited": "2014-12-20T21:17:50.375000Z",
		"url": "https://swapi.info/api/people/32"
	},
	{
		"name": "Nute Gunray",
		"height": "191",
		"mass": "90",
		"hair_color": "none",
		"skin_color": "mottled green",
		"eye_color": "red",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/18",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/11"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-19T17:05:57.357000Z",
		"edited": "2014-12-20T21:17:50.377000Z",
		"url": "https://swapi.info/api/people/33"
	},
	{
		"name": "Finis Valorum",
		"height": "170",
		"mass": "unknown",
		"hair_color": "blond",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "91BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/9",
		"films": ["https://swapi.info/api/films/4"],
		"species": [],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-19T17:21:45.915000Z",
		"edited": "2014-12-20T21:17:50.379000Z",
		"url": "https://swapi.info/api/people/34"
	},
	{
		"name": "Padmé Amidala",
		"height": "185",
		"mass": "45",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "brown",
		"birth_year": "46BBY",
		"gender": "female",
		"homeworld": "https://swapi.info/api/planets/8",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": [],
		"starships": [
			"https://swapi.info/api/starships/39",
			"https://swapi.info/api/starships/49",
			"https://swapi.info/api/starships/64"
		],
		"created": "2014-12-19T17:28:26.926000Z",
		"edited": "2014-12-20T21:17:50.381000Z",
		"url": "https://swapi.info/api/people/35"
	},
	{
		"name": "Jar Jar Binks",
		"height": "196",
		"mass": "66",
		"hair_color": "none",
		"skin_color": "orange",
		"eye_color": "orange",
		"birth_year": "52BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/8",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5"
		],
		"species": ["https://swapi.info/api/species/12"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-19T17:29:32.489000Z",
		"edited": "2014-12-20T21:17:50.383000Z",
		"url": "https://swapi.info/api/people/36"
	},
	{
		"name": "Roos Tarpals",
		"height": "224",
		"mass": "82",
		"hair_color": "none",
		"skin_color": "grey",
		"eye_color": "orange",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/8",
		"films": ["https://swapi.info/api/films/4"],
		"species": ["https://swapi.info/api/species/12"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-19T17:32:56.741000Z",
		"edited": "2014-12-20T21:17:50.385000Z",
		"url": "https://swapi.info/api/people/37"
	},
	{
		"name": "Rugor Nass",
		"height": "206",
		"mass": "unknown",
		"hair_color": "none",
		"skin_color": "green",
		"eye_color": "orange",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/8",
		"films": ["https://swapi.info/api/films/4"],
		"species": ["https://swapi.info/api/species/12"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-19T17:33:38.909000Z",
		"edited": "2014-12-20T21:17:50.388000Z",
		"url": "https://swapi.info/api/people/38"
	},
	{
		"name": "Ric Olié",
		"height": "183",
		"mass": "unknown",
		"hair_color": "brown",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/8",
		"films": ["https://swapi.info/api/films/4"],
		"species": [],
		"vehicles": [],
		"starships": ["https://swapi.info/api/starships/40"],
		"created": "2014-12-19T17:45:01.522000Z",
		"edited": "2014-12-20T21:17:50.392000Z",
		"url": "https://swapi.info/api/people/39"
	},
	{
		"name": "Watto",
		"height": "137",
		"mass": "unknown",
		"hair_color": "black",
		"skin_color": "blue, grey",
		"eye_color": "yellow",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/34",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5"
		],
		"species": ["https://swapi.info/api/species/13"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-19T17:48:54.647000Z",
		"edited": "2014-12-20T21:17:50.395000Z",
		"url": "https://swapi.info/api/people/40"
	},
	{
		"name": "Sebulba",
		"height": "112",
		"mass": "40",
		"hair_color": "none",
		"skin_color": "grey, red",
		"eye_color": "orange",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/35",
		"films": ["https://swapi.info/api/films/4"],
		"species": ["https://swapi.info/api/species/14"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-19T17:53:02.586000Z",
		"edited": "2014-12-20T21:17:50.397000Z",
		"url": "https://swapi.info/api/people/41"
	},
	{
		"name": "Quarsh Panaka",
		"height": "183",
		"mass": "unknown",
		"hair_color": "black",
		"skin_color": "dark",
		"eye_color": "brown",
		"birth_year": "62BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/8",
		"films": ["https://swapi.info/api/films/4"],
		"species": [],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-19T17:55:43.348000Z",
		"edited": "2014-12-20T21:17:50.399000Z",
		"url": "https://swapi.info/api/people/42"
	},
	{
		"name": "Shmi Skywalker",
		"height": "163",
		"mass": "unknown",
		"hair_color": "black",
		"skin_color": "fair",
		"eye_color": "brown",
		"birth_year": "72BBY",
		"gender": "female",
		"homeworld": "https://swapi.info/api/planets/1",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5"
		],
		"species": [],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-19T17:57:41.191000Z",
		"edited": "2014-12-20T21:17:50.401000Z",
		"url": "https://swapi.info/api/people/43"
	},
	{
		"name": "Darth Maul",
		"height": "175",
		"mass": "80",
		"hair_color": "none",
		"skin_color": "red",
		"eye_color": "yellow",
		"birth_year": "54BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/36",
		"films": ["https://swapi.info/api/films/4"],
		"species": ["https://swapi.info/api/species/22"],
		"vehicles": ["https://swapi.info/api/vehicles/42"],
		"starships": ["https://swapi.info/api/starships/41"],
		"created": "2014-12-19T18:00:41.929000Z",
		"edited": "2014-12-20T21:17:50.403000Z",
		"url": "https://swapi.info/api/people/44"
	},
	{
		"name": "Bib Fortuna",
		"height": "180",
		"mass": "unknown",
		"hair_color": "none",
		"skin_color": "pale",
		"eye_color": "pink",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/37",
		"films": ["https://swapi.info/api/films/3"],
		"species": ["https://swapi.info/api/species/15"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T09:47:02.512000Z",
		"edited": "2014-12-20T21:17:50.407000Z",
		"url": "https://swapi.info/api/people/45"
	},
	{
		"name": "Ayla Secura",
		"height": "178",
		"mass": "55",
		"hair_color": "none",
		"skin_color": "blue",
		"eye_color": "hazel",
		"birth_year": "48BBY",
		"gender": "female",
		"homeworld": "https://swapi.info/api/planets/37",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/15"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T09:48:01.172000Z",
		"edited": "2014-12-20T21:17:50.409000Z",
		"url": "https://swapi.info/api/people/46"
	},
	{
		"name": "Ratts Tyerel",
		"height": "79",
		"mass": "15",
		"hair_color": "none",
		"skin_color": "grey, blue",
		"eye_color": "unknown",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/38",
		"films": ["https://swapi.info/api/films/4"],
		"species": ["https://swapi.info/api/species/16"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T09:53:15.086000Z",
		"edited": "2014-12-20T21:17:50.410000Z",
		"url": "https://swapi.info/api/people/47"
	},
	{
		"name": "Dud Bolt",
		"height": "94",
		"mass": "45",
		"hair_color": "none",
		"skin_color": "blue, grey",
		"eye_color": "yellow",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/39",
		"films": ["https://swapi.info/api/films/4"],
		"species": ["https://swapi.info/api/species/17"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T09:57:31.858000Z",
		"edited": "2014-12-20T21:17:50.414000Z",
		"url": "https://swapi.info/api/people/48"
	},
	{
		"name": "Gasgano",
		"height": "122",
		"mass": "unknown",
		"hair_color": "none",
		"skin_color": "white, blue",
		"eye_color": "black",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/40",
		"films": ["https://swapi.info/api/films/4"],
		"species": ["https://swapi.info/api/species/18"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T10:02:12.223000Z",
		"edited": "2014-12-20T21:17:50.416000Z",
		"url": "https://swapi.info/api/people/49"
	},
	{
		"name": "Ben Quadinaros",
		"height": "163",
		"mass": "65",
		"hair_color": "none",
		"skin_color": "grey, green, yellow",
		"eye_color": "orange",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/41",
		"films": ["https://swapi.info/api/films/4"],
		"species": ["https://swapi.info/api/species/19"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T10:08:33.777000Z",
		"edited": "2014-12-20T21:17:50.417000Z",
		"url": "https://swapi.info/api/people/50"
	},
	{
		"name": "Mace Windu",
		"height": "188",
		"mass": "84",
		"hair_color": "none",
		"skin_color": "dark",
		"eye_color": "brown",
		"birth_year": "72BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/42",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": [],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T10:12:30.846000Z",
		"edited": "2014-12-20T21:17:50.420000Z",
		"url": "https://swapi.info/api/people/51"
	},
	{
		"name": "Ki-Adi-Mundi",
		"height": "198",
		"mass": "82",
		"hair_color": "white",
		"skin_color": "pale",
		"eye_color": "yellow",
		"birth_year": "92BBY",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/43",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/20"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T10:15:32.293000Z",
		"edited": "2014-12-20T21:17:50.422000Z",
		"url": "https://swapi.info/api/people/52"
	},
	{
		"name": "Kit Fisto",
		"height": "196",
		"mass": "87",
		"hair_color": "none",
		"skin_color": "green",
		"eye_color": "black",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/44",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/21"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T10:18:57.202000Z",
		"edited": "2014-12-20T21:17:50.424000Z",
		"url": "https://swapi.info/api/people/53"
	},
	{
		"name": "Eeth Koth",
		"height": "171",
		"mass": "unknown",
		"hair_color": "black",
		"skin_color": "brown",
		"eye_color": "brown",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/45",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/22"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T10:26:47.902000Z",
		"edited": "2014-12-20T21:17:50.427000Z",
		"url": "https://swapi.info/api/people/54"
	},
	{
		"name": "Adi Gallia",
		"height": "184",
		"mass": "50",
		"hair_color": "none",
		"skin_color": "dark",
		"eye_color": "blue",
		"birth_year": "unknown",
		"gender": "female",
		"homeworld": "https://swapi.info/api/planets/9",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/23"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T10:29:11.661000Z",
		"edited": "2014-12-20T21:17:50.432000Z",
		"url": "https://swapi.info/api/people/55"
	},
	{
		"name": "Saesee Tiin",
		"height": "188",
		"mass": "unknown",
		"hair_color": "none",
		"skin_color": "pale",
		"eye_color": "orange",
		"birth_year": "unknown",
		"gender": "male",
		"homeworld": "https://swapi.info/api/planets/47",
		"films": [
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/6"
		],
		"species": ["https://swapi.info/api/species/24"],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-20T10:32:11.669000Z",
		"edited": "2014-12-20T21:17:50.434000Z",
		"url": "https://swapi.info/api/people/56"
	}];

const contenedor = document.getElementById("contenedor");
const tabla = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const listaEncabezados = ["name", "height", "mass", "hair_color"];
const filaEncabezado = document.createElement("tr");
for (const encabezado of listaEncabezados) {
    const th = document.createElement("th");
    th.textContent = encabezado;
    filaEncabezado.appendChild(th);
}

thead.appendChild(filaEncabezado);
tabla.appendChild(thead);
tabla.appendChild(tbody);

contenedor.appendChild(tabla);

contenedor.addEventListener("personaje-clickeado", (event)=>{
	console.log("personaje-clickeado "+ event.detail.nombre + " - color de cabello: "+event.detail.cabello);
})

contenedor.addEventListener('personaje-hover', (event)=> {
	console.log(event.detail.nombre+" 🚀");
})

for (const personaje of personajes) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = personaje.name;
    const altura = document.createElement("td");
    altura.textContent = personaje.height;
    const peso = document.createElement("td");
    peso.textContent = personaje.mass;
    const cabello = document.createElement("td");
    cabello.textContent = personaje.hair_color;

	fila.addEventListener('click', ()=>{
		const eventoPersonalizado = new CustomEvent('personaje-clickeado', {
			bubbles: true,
			detail: {
				nombre: personaje.name,
				cabello: personaje.hair_color
			}
		});

		fila.dispatchEvent(eventoPersonalizado);
	})

	fila.addEventListener("mouseover", ()=>{
		const eventoPersonalizado2 = new CustomEvent('personaje-hover', {
			bubbles: true,
			detail: {
				nombre: personaje.name
			}
		});
		fila.dispatchEvent(eventoPersonalizado2);
	})

    fila.appendChild(nombre);
    fila.appendChild(altura);
    fila.appendChild(peso);
    fila.appendChild(cabello);

    tbody.appendChild(fila)
    
    }