// matches = {
//     teams: ["team1", "team2", "team3", "team4", "team5"],
//     startingDate: '2022-08-25',
//     venue: "newDelhi"
// }
// count = 0
// for (i of matches.teams) {
//     for (d = matches.teams.indexOf(i) + 1; d < matches.teams.length; d++) {
//         count++
//     }
// }
// console.log("Number of Matches teams will play:", count)
// var numberOfRounds = matches.teams.length - 1;
// emptyAdd = "empty value"
// if (matches.teams.length % 2 != 0) {
//     matches.teams.push(emptyAdd)
// }
// teams = []
// if (matches.teams.includes("empty value")) {
//     numberOfRounds += 1
// }
// else {
//     numberOfRounds = numberOfRounds
// }
// for (i = 0; i < numberOfRounds; i++) {

//     for (var j = 0; j < matches.teams.length / 2; j++) {
//         if (matches.teams[j] != emptyAdd & matches.teams[matches.teams.length - 1 - j] != emptyAdd) {
//             teams.push(matches.teams[j] + " vs " + matches.teams[matches.teams.length - 1 - j]);
//         }

//     }
//     matches.teams.splice(1, 0, matches.teams.pop());
// }
// if (teams.length % 2 != 0) {
//     teams.push("")
// }
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date(matches.startingDate)
// var date1 = new Date()
// var date2 = new Date()
// dateList = []
// for (let i = 0; i <= 6; i++) {
//     if (d.getDay() + i == 6) {
//         date1.setDate(d.getDate() + i + 1)
//         date2.setDate(date1.getDate() - 1)
//     }
// }
// day = []
// var dt = new Date(date1);
// var dt2 = new Date(date2)
// for (e = 0; e <= 4; e++) {
//     dateList.push((new Date(dt2)).toString().substring(4, 15))
//     dateList.push((new Date(dt)).toString().substring(4, 15))
//     day.push(days[dt2.getDay(date2)])
//     day.push(days[dt.getDay(date1)])
//     dt.setDate(dt.getDate() + 7)
//     dt2.setDate(dt2.getDate() + 7)
// }
// count = 0
// finalResult = []
// for (i = 0; i < teams.length; i = i + 2) {
//     finalObject = {}
//     finalObject1 = {}
//     d = i
//     finalObject["venue"] = "newDelhi"
//     finalObject["Date"] = dateList[count]
//     finalObject["Day"] = day[count]
//     finalObject["Slot_no"] = 1
//     finalObject["Match_No"] = i + 1
//     finalObject["Morning_Batch"] = teams[i]
//     finalObject["Matchid"] = "CSk20" + d
//     if (teams[d + 1] != "None") {
//         finalObject1["venue"] = "newDelhi"
//         finalObject1["Date"] = dateList[count]
//         finalObject1["Day"] = day[count]
//         finalObject1["Slot_No"] = 2
//         finalObject1["match_No"] = i + 2
//         finalObject1["Evening_Batch"] = teams[d + 1]
//         finalObject1["Matchid"] = "CSk20" + d +2
//     }
//     count++
//     finalResult.push(finalObject)
//     finalResult.push(finalObject1)
// }
// finalResult.forEach((element,index)=>{
//     console.log(element)
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
// })

version = [{
    name: "froyo",
    releseDate: "15 - 06 - 2001",
    bug_Id: "EC846",
    features: ["Scrolling Screenshots"],
    author: ["Muralidharan"],
    type: "patch"
},

{
    name: "kitkat",
    releseDate: "24 - 07 - 2002",
    bug_Id: "EC846",
    features: ["Dark Mode", "Tv recording"],
    author: ["Muralidharan"],
    type: "major"
},


{
    name: "Donut",
    releseDate: "27 - 09 - 2001",
    bug_Id: "EC848",
    features: ["google contacts", "google maps"],
    author: ["Subramaniyam"],
    type: "patch"
},

{
    name: "Jelly Bean",
    releseDate: "14 - 05 - 2012",
    bug_Id: "EC849",
    features: ["TV recording", "google contacts"],
    author: ["Elan"],
    type: "enhancement"
}]

const bug_List = [{
    bugs: ["voice bug", "voice control", "cameraclearity"],
    bug_Id: "EC846",
}
    , {
        bugs: ["sound breaking"],
    bug_Id: "EC846",
},
{
    bugs: ["voice search bug", "voice bug"],
    bug_Id: "EC848",
},
{
    bugs: ["Time Not Showing On The Status Bar"],
    bug_Id: "EC849",
}
]

function releaseDate(date) {  //finding the and the version name
    findReleaseDate = version.filter(arr => arr.releseDate.includes(date))
    console.log(`${findReleaseDate.length} version are released in this  year`)
    name = findReleaseDate.map(n => n.name)
    console.log("versionName", name)
    console.log("-----------------------------------------------------------------------")
}




function findFeaturesName(string) { //features and length
    findFeatures = version.filter(arr => arr.features.includes(string))
    console.log(findFeatures.length, "version have the specific feature name")
    console.table(findFeatures)
    console.log("------------------------------------------------------------------------")
}





function findAuthorName(name) {   // finding author name
    for (i = 0; i < version.length; i++) {
        if (version[i].author == name) {
            console.log(version[i])
        }
    }
}

function findType(versiontype) {  //finding the type
    type = version.filter(arr => arr.type.includes(versiontype))
    console.log(`${type.length} releases were types of ${versiontype}`)
    console.table(type)
    console.log("----------------------------------------------------------------------------")

}

console.log("--------------------------------------------------------------------------------")

function authorName() {   //finding author count
    arr = []
    version.forEach(elements => {
        for (i of elements.author)
            arr.push(i)
    })
    count = 1
    authorValue = 0
    maxValue = 1
    for (i = 0; i < arr.length; i++) {
        for (j = 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
            if (maxValue < count) {
                maxValue = count
                authorValue = arr[i]
            }
        }
        count = 0
    }
    console.log(`The Author ${authorValue} Has Worked ${maxValue} Releases`)
}




function findBug(value) {         //finding bugs
    
    console.log("quesno:1","Bugs:")
    bug_List.forEach(element => {
        if (element.bug_Id== value) {
            console.log(element.bugs)
        }
    })
    bugvalue = version.filter(n => n.bug_Id.includes(value))
    console.log(`The version which have "${value}" ID.`)
    console.table(bugvalue)
    console.log("--------------------------------------------------------------------------------------")

}


findBug("EC846")
findType("patch")
findFeaturesName("Tv recording")
releaseDate("2001")
authorName()
findAuthorName("Muralidharan")


