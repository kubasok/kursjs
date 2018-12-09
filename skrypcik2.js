const users = [
    //id name surname email age value
    [1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28],
    [2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37],
    [3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06],
    [4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64],
    [5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54],
    [6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08],
    [7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21],
    [8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72],
    [9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68],
    [10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44]
];

function fixdata(tab) {
    const newTab = [];

    for (let i = 0; i < tab.length; i++) {
        const person = {
            id: tab[i][1],
            name: tab[i][2],
            surname: tab[i][3],
            email: tab[i][4],
            age: tab[i][5],
            value: tab[i][6],
        };
        newTab.push(person);
    }
    return newTab;
}

let usersFixed = fixdata(users);
