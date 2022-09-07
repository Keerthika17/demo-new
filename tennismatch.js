matches = {
    tennis: [
        { playerId: "erc21", rank: 1, playerName: "PV SINDHU", matchesplayed: 256 },
        { playerId: "erc34", rank: 2, playerName: "Serena Williams", matchesplayed: 236 },
        { playerId: "erc54", rank: 3, playerName: "Roger Federer", matchesplayed: 221 },
        { playerId: "erc76", rank: 4, playerName: "roger", matchesplayed: 286 },
        { playerId: "erc12", rank: 5, playerName: "ravi", matchesplayed: 150 },
        { playerId: "erc78", rank: 6, playerName: "suji", matchesplayed: 271 },
        { playerId: "erc98", rank: 7, playerName: "navi", matchesplayed: 281 },
        { playerId: "erc12", rank: 8, playerName: "keerthi", matchesplayed: 172 }
    ],
    startingdate: ["2022/10/06"]
}
let accessValue = (matches.tennis);
let accesdate = matches.startingdate
matchtype = "------firstround-------"
x = 1
function Scheduled(value, matchstype, days) {
    matchSeperation = []
    matchSeperation.push(matchstype)
    for (let i = 1; i <= value.length / 2; i++) {

        date = new Date(days)
        next = new Date(date.getTime() + (x) * 24 * 60 * 60 * 1000)
        tomorrow = String(next).slice(0, 15);
        day = tomorrow
        a = value.length - i
        const match =
        {
            matchDate: tomorrow,
            seedplayer: (value[i - 1]).playerName,
            seedplayerid: (value[i - 1]).playerId,
            seededplayermatch: (value[i - 1]).matchesplayed + 1,
            opponentPlayerName: (value[a]).playerName,
            opponentPlayerid: (value[a]).playerId,
            opponentmatchplayed: (value[a]).matchesplayed + 1
        }
        matchSeperation.push(match)
        x += 1

    }
    console.log(matchSeperation)
    winOrLoss(matchSeperation)
}
winorlose = []
function probability() {
    randomresult = ['0', "win", "lose"]
    x = Math.floor((Math.random() * 2) + 1)
    return randomresult[x]
}
function winOrLoss(list) {
    winningresult = []
    matchResult = []
    for (i = 1; i <= list.length; i++) {
        winningresult[i] = []
        winningresult[i].push(probability())
        if (winningresult[i - 1] == "win") {
            const winner = {
                playerName: list[i - 1].seedplayer,
                playerId: list[i - 1].seedplayerid,
                matchesplayed: list[i - 1].seededplayermatch
            }
            matchResult.push(winner)
        }
        else if (winningresult[i - 1] == "lose") {

            const winner = {
                playerName: list[i - 1].opponentPlayerName,
                playerId: list[i - 1].opponentPlayerid,
                matchesplayed: list[i - 1].opponentmatchplayed
            }
            matchResult.push(winner)
        }
    }
    console.log("-----------winner list------------");
    len = matchSeperation.length
    next = new Date(date.getTime() + (len) * 24 * 60 * 60 * 1000)
    nextday = String(next).slice(0, 15);
    console.log(matchResult)
    if (matchResult.length > 1) {
        matchtype = ("----------2nd round-----------")
        Scheduled(matchResult, matchtype, nextday)
    }
}
Scheduled(accessValue, matchtype, accesdate)