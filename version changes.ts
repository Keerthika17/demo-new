interface IVersion {
    name: string,
    releseDate: string,
    bug_Id: string,
    features: string[],
    author: string[],
    updatetype: double,
}
 enum double{
    enhancement,
    major,
    patch
 }


let version: IVersion[] = [{
    name: "froyo",
    releseDate: "15 - 06 - 2001",
    bug_Id: "EC846",
    features: ["Scrolling Screenshots"],
    author: ["Muralidharan"],
    updatetype: double. patch

},

{
    name: "kitkat",
    releseDate: "24 - 07 - 2002",
    bug_Id: "EC846",
    features: ["Dark Mode", "Tv recording"],
    author: ["Muralidharan"],
    updatetype: double.major
},


{
    name: "Donut",
    releseDate: "27 - 09 - 2001",
    bug_Id: "EC848",
    features: ["google contacts", "google maps"],
    author: ["Subramaniyam"],
    updatetype: double.patch
},

{
    name: "Jelly Bean",
    releseDate: "14 - 05 - 2012",
    bug_Id: "EC849",
    features: ["TV recording", "google contacts"],
    author: ["Elan"],
    updatetype: double.enhancement
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

function releaseDate(date:string) {
    let findReleaseDate = version.filter(arr => arr.releseDate.includes(date))
    console.log("QUESTION NO 1: How many releases were made in the year", date,"?")
    console.log(`${findReleaseDate.length} version are released in this  year ${date}`)
    let name = findReleaseDate.map(n => n.name)
    console.log("versionName", name)
    
}



function findFeaturesName(string:string) {
    let findFeatures = version.filter(arr => arr.features.includes(string))
     console.log("  QUESTION NO 5 : How many version have the specific feature name?")
    console.log(`${findFeatures.length} version have the specific feature name`)
    // console.log(findFeatures)
   
}

function findType(versiontype: double) {
    let type = version.filter(arr => arr.updatetype==(versiontype))
    console.log(" QUESTION NO 4:  HoW many releases were types of major?")
    console.log(`${type.length} releases were types of ${double[versiontype]}`)
   

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
            if (arr[i] === arr[j]) {
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




function findBug(value:string) {
    console.log(`QUESTION NO 2 :In which release ${value} bugId is present?`)

    bugList.forEach(element => {
        if (element.bug_Id === value) {
            console.log(`bugs: ${element.bugs}`)
        }
    })
    console.log(`The version which have "${value}" ID.`)
    

}

releaseDate("2001")
findBug("EC849")
authorName()
findType(double.major)
findFeaturesName("Tv recording")

