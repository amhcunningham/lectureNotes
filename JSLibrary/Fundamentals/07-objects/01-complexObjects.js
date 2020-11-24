// //objects
// // let netflix = {
// //   id: 9,
// //   likes: 932,
// //   name: "The Good Place",
// //   seasonInfo: {
// //     season1: {
// //       numberOfEpisodes: 5,
// //       episodeInfo: [
// //         {
// //           episode: 1,
// //           episodeName: "Pilot",
// //         },
// //         {
// //           episode: 2,
// //           episodeName: "Flying",
// //         },
// //         {
// //           episode: 3,
// //           episodeName: "Tahani Al-Jamil",
// //         },
// //         {
// //           episode: 4,
// //           episodeName: "Jason Mendoza",
// //         },
// //         {
// //           episode: 5,
// //           episodeName: "Category 55 Emergency Doomsday Crisis",
// //         },
// //       ],
// //     },
// //     season2: {
// //       numberOfEpisodes: 6,
// //       episodeInfo: [
// //         {
// //           episode: 1,
// //           episodeName: "Everything is Great!",
// //         },
// //         {
// //           episode: 2,
// //           episodeName: "Dance Dance Resolution",
// //         },
// //         {
// //           episode: 3,
// //           episodeName: "Team Cockroach",
// //         },
// //         {
// //           episode: 4,
// //           episodeName: "Existential Crisis",
// //         },
// //         {
// //           episode: 5,
// //           episodeName: "The Trolley Problem",
// //         },
// //         {
// //           episode: 6,
// //           episodeName: "Janet and Michael",
// //         },
// //       ],
// //     },
// //     season3: {
// //       numberOfEpisodes: 5,
// //       episodeInfo: [
// //         {
// //           episode: 1,
// //           episodeName: "Everything Is Bonzer!",
// //         },
// //         {
// //           episode: 2,
// //           episodeName: "The Brainy Bunch",
// //         },
// //         {
// //           episode: 3,
// //           episodeName: "The Snowplow",
// //         },
// //         {
// //           episode: 4,
// //           episodeName: "Jeremy Bearimy",
// //         },
// //         {
// //           episode: 5,
// //           episodeName: "The Ballad of Donkey Doug",
// //         },
// //       ],
// //     },
// //   },
// //   description:
// //     "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good.",
// // };
// // console.log(netflix);
// // console.log(netflix.seasonInfo.season1.episodeInfo[0].episodeName); //this is called DOT NOTATION- REMEMBER THIS
// //============================================//

// //JSON = JavaScript Object Notation

// varjson = {
//     "workbench.colorTheme": "One Dark+ (Sublime)",
//     "window.zoomLevel": 3,
//     "files.exclude": {
//         "**/.git": true,
//         "**/.DS_Store": true,
//         "**/*.js": {
//             "when": "$(basename).ts"
//         },
//         "**/*.js.map": {
//             "when": "$(basename)"
//         }
//     },
//     "editor.fontFamily": "Monaco, 'Courier New', monospace",
//     "editor.detectIndentation": false,
//     "editor.letterSpacing": 0,
//     "editor.tabSize": 2,
//     "files.autoSave": "off",
//     "editor.wordWrap": "on",
//     "extensions.ignoreRecommendations": true,
//     "[html]": {},
//     "files.associations": {
//         "*.html": "html",
//         "*.js": "javascriptreact"
//     },
//     "html.format.indentInnerHtml": true,
//     "editor.fontSize": 11,
//     "liveServer.settings.donotShowInfoMsg": true,
//     "liveServer.settings.port": 3500,
//     "[javascriptreact]": {}
// }


// //space jam

// let spaceJam = {
//     toonSquad: {
//         human: 'Michael Jordan',
//         rabbit1: 'Bugs Bunny',
//         rabbit2: 'Lola Bunny',
//         duck: 'Daffy Duck',
//         tDevil: 'Tasmanian Devil',
//         bird: 'Tweety',
//         cat: 'Sylvester',
//         pig: 'Porky Pig'
//     },
//     monstars: {
//         0: 'Bupkus',
//         1: 'Bang',
//         2: 'Nawt',
//         3: 'Pound',
//         4: 'Blanko'
//     },
//     nbaPlayers: {
//         phoenixSuns: 'Charles Barkley',
//         newJerseyNets: 'Shawn Bradley',
//         newYorkNicks: 'Patrick Ewing',
//         charlotteHornets1: 'Larry Johnson',
//         charlotteHornets2: 'Muggsy Bogues'
//     }
// }

// console.log(Object.keys(spaceJam)); //Object.keys returns an array consisting of the keys in the object

// //Object.values returns the value of each key
// console.log(Object.values(spaceJam));

let garden = {
    veg: 'tomato',
    flower: 'daisy',
    fruit: 'blackberry',
    water: true,
    sun: true,
    size: 10
}
console.log(garden.water)

let inc = 'water';
console.log(garden[inc]);

let baking = {};
baking['tomato'] = 'time for pie';
console.log(baking.tomato);

function countToOneHundred(){
    for(let i = 0; i <= 100; i++) {
        if (i % 15 == 0){
            console.log("Fizz Buzz");
        } else if (i % 3 == 0){
            console.log("Fizz");
        } else if (i % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

countToOneHundred();

function countToTen(){
    for(let i = 0; i <= 10; i++) {
        if (i % 2 == 0){
            console.log("the number is even");
        } else if (i % 2 == 1){
            console.log("the number is odd");
        } else {
            console.log(i)
        }
    }
}
countToTen();