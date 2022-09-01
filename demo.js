

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
},
{
    name: "Jelly Bean",
    releseDate: "14 - 05 - 2012",
    bug_Id: "EC849",
    features: ["TV recording", "google contacts"],
    author: ["Elan","Muralidharan",],
    type: "enhancement"
},
]

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
    console.log("QUESTION NO 1: How many releases were made in the year", date, "?")
    console.log(`${findReleaseDate.length} version are released in this  year`)
    name = findReleaseDate.map(n => n.name)
    console.log("versionName", name)
    console.log("-----------------------------------------------------------------------")
}




function findFeaturesName(string) { //features and length
    findFeatures = version.filter(arr => arr.features.includes(string))
    console.log("  QUESTION NO 5 : How many version have the specific feature name?")
    console.log(findFeatures.length, "version have the specific feature name")
    // console.table(findFeatures)
    console.log("------------------------------------------------------------------------")
}

function findType(versiontype) {  //finding the type
    type = version.filter(arr => arr.type.includes(versiontype))
    console.log(" QUESTION NO 4:  HoW many releases were types of major?")
    console.log(`${type.length} releases were types of ${versiontype}`)
    // console.table(type)
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
    console.log(" QUESTION NO 3: which author has worked on  most releases")
    console.log(`The Author ${authorValue} Has Worked ${maxValue} Releases`)
    console.log("-----------------------------------------------------------------------------------")
}




function findBug(value) {         //finding bugs

    console.log(`QUESTION NO 2 :In which release ${value} bugId is present?`)

    bug_List.forEach(element => {
        if (element.bug_Id == value) {
            console.log(`bugs: ${element.bugs}`)
        }
    })
    bugvalue = version.filter(n => n.bug_Id.includes(value))
    console.log(`The version which have "${value}" ID.`)
    console.table(bugvalue)
    console.log("--------------------------------------------------------------------------------------")

}

releaseDate("2001")
findBug("EC846")
authorName()
findType("major")
findFeaturesName("Tv recording")




