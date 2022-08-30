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
    relseae_date: 15 - 06 - 2001,
    bugs: ["voice bug", "voice control", "cameraclearity"],
    features: "Scrolling Screenshots",
    author: "muralidharan",
    type: "patch"
},

{
    name: "kitkat",
    releseDate: 24 - 07 - 2002,
    bugs: "sound breaking",
    features: "Dark Mode",
    author: "muralidharan",
    type: "major"
},


{
    name: "Donut",
    releseDate: 27 - 09 - 2001,
    bugs: "voice search bug",
    features: "google contacts",
    author: "subramaniyam",
    type: "patch"
},

{
    name: "Jelly Bean",
    releseDate: 14 - 05 - 2012,
    bugs: "Time Not Showing On The Status Bar",
    features: "TV recording",
    author: "elan",
    type: "enhancement"
}]
console.log("version", version)

patch = version.filter(arr => arr.type.includes("patch"))
major= version.filter(arr => arr.type.includes("major"))
enhancement = version.filter(arr => arr.type.includes("enhancement"))
console.log("patch", patch)
console.log("major", major)
console.log("enchance", enhancement )

findReleaseDate=version.filter(arr=>arr.releseDate.includes("2001"))
console.log(findReleaseDate)


