const game = {
    team1: "საქართველო",
    team2: "პორტუგალია",
    players: [
        [
            "მამარდაშვილი", 
            "კაკაბაძე",
            "გველესიანი", 
            "კაშია",
            "ლოჩოშვილი",
            "დვალი",
            "ჩკვეტაძე",
            "ქოჩრაშვილი",
            "კიტეიშვილი",
            "კვარაცხელია",
            "მიქაუტაძე", 
        ],
        [
            "კოშტა",
            "სილვა",
            "პერეირა",
            "ინაციო",
            "დალო",
            "ნევეში",
            "კონსეისაო",
            "პალინია",
            "ნეტო",
            "ფელიქსი",
            "რონალდუ",
        ],
    ],
    score: "2:0",
    scored: ["კვარაცხელია", "მიქაუტაძე"],
    date: "26 ივნისი, 2024",
    odds: {
        team1: 9.00,
        x: 5.25,
        team2: 1.33
    },
};

const players1 = game.players[0];
const players2 = game.players[1];
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "წიტაიშვილი", "კვირკველია", "მექვაბიშვილი", "დავითაშვილი"];
const odds = game.odds;

console.log("Team 1 Players:", players1);
console.log("Team 2 Players:", players2);
console.log("მეკარეები:");
console.log(`  ${game.team1}: ${gk1}`);
console.log(`  ${game.team2}: ${gk2}`);
console.log("კოეფიცენტები:");
console.log(`  ${game.team1}: ${odds.team1}`);
console.log(`  ფრე: ${odds.x}`);
console.log(`  ${game.team2}: ${odds.team2}`);

const higherOddsTeam = odds.team1 < odds.team2 && odds.team1 < odds.x 
    ? game.team1 
    : (odds.team2 < odds.x ? game.team2 : "ფრე");

console.log(`${higherOddsTeam} არის ამ თამაშის ფავორიტი.`);
const printGoals = (...players) => {

    players.forEach(player => console.log(`მოთამაშე: ${player}`));


    console.log(`ჯამში გატანილი გოლები: ${players.length}`);
};
printGoals("კვარაცხელია", "მიქაუტაძე"); 

