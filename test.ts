interface versionInterface {
    name: string,
    releseDate: any,
    bug_Id: any,
    features: any[],
    author: any[],
    updatetype: string,
}


let version: versionInterface[] = [{
    name: "froyo",
    releseDate: "15 - 06 - 2001",
    bug_Id: "EC846",
    features: ["Scrolling Screenshots"],
    author: ["Muralidharan"],
    updatetype: "patch"
},

{
    name: "kitkat",
    releseDate: "24 - 07 - 2002",
    bug_Id: "EC846",
    features: ["Dark Mode", "Tv recording"],
    author: ["Muralidharan"],
    updatetype: "major"
},


{
    name: "Donut",
    releseDate: "27 - 09 - 2001",
    bug_Id: "EC848",
    features: ["google contacts", "google maps"],
    author: ["Subramaniyam"],
    updatetype: "patch"
},

{
    name: "Jelly Bean",
    releseDate: "14 - 05 - 2012",
    bug_Id: "EC849",
    features: ["TV recording", "google contacts"],
    author: ["Elan"],
    updatetype: "enhancement"
}]

const bugList = [{
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

function releaseDate(date: any) {
    let findReleaseDate = version.filter(arr => arr.releseDate.includes(date))
    console.log("QUESTION NO 1: How many releases were made in the year", date,"?")
    console.log(`${findReleaseDate.length} version are released in this  year ${date}`)
    let name = findReleaseDate.map(n => n.name)
    console.log("versionName", name)
    
}



function findFeaturesName(string: any) {
    let findFeatures = version.filter(arr => arr.features.includes(string))
     console.log("  QUESTION NO 5 : How many version have the specific feature name?")
    console.log(`${findFeatures.length} version have the specific feature name`)
    // console.log(findFeatures)
   
}

function findType(versiontype: any) {
    let type = version.filter(arr => arr.updatetype.includes(versiontype))
    console.log(" QUESTION NO 4:  HoW many releases were types of major?")
    console.log(`${type.length} releases were types of ${versiontype}`)
   

}



function authorName() {
    let arr: any = []
    version.forEach(elements => {
        for (let i of elements.author)
            arr.push(i)
    })
    let count = 1
    let authorValue = 0
    let maxValue = 1
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
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
    console.log(`The Author ${authorValue} Has Worked  in ${maxValue} Releases`)
}




function findBug(value: any) {
    console.log(`QUESTION NO 2 :In which release ${value} bugId is present?`)

    bugList.forEach(element => {
        if (element.bug_Id == value) {
            console.log(`bugs: ${element.bugs}`)
        }
    })
    let bugvalue = version.filter(n => n.bug_Id.includes(value))
    console.log(`The version which have "${value}" ID.`)
    

}

releaseDate("2001")
findBug("EC846")
authorName()
findType("major")
findFeaturesName("Tv recording")
