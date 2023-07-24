let gameState = JSON.parse(localStorage.getItem('gameState')) || {
    prodBoosts: {
        flavors: {
            "1%": 0,
            "2%": 0,
            "3%": 0,
            "4%": 0,
            "5%": 0,
            "10%": 0,
        },
        prodUpgrade: {
            upgradeCost: 0,
            upgradePercents: {
            "1%": [true, 1.01],
            "2%": [false, 1.02], 
            "3%": [false, 1.03],
            "4%": [false, 1.04],
            "5%": [false, 1.05],
            }
        },
        milk: 0,
        kittens: {
            "helpers": [false, 0.1],
            "workers": [false, 0.125],
            "engineers": [false, 0.15],
            "overseers": [false, 0.175],
        },
    },
    buildings: {
        Cursor: {
            name: 'Cursor',
            amount: 0,
            baseCost: 15,
            baseReturn: 0.1,
            doubles: 0,
            upgradeCost: 0,
        },
        Grandma: {
            name: 'Grandma',
            amount: 0,
            baseCost: 100,
            baseReturn: 1,
            doubles: 0,
            upgradeCost: 0,
        },
        Farm: {
            name: 'Farm',
            amount: 0,
            baseCost: 1100,
            baseReturn: 8,
            doubles: 0,
            upgradeCost: 0,
        },
    },
}

// Create empty object for storing adjusted buildings
let adjustedBuildings = {};
let globalBoost = 1;
let totalcps = 0;
let prodUpgradeEfficiency = 0;

window.onload = function() {
    GoActionGo();
    addEventListeners();
    // Other onload tasks...
    console.log(adjustedBuildings);
    console.log(gameState);

};

function CalcGlobalBoost() {
    let flavor1 = gameState.prodBoosts.flavors["1%"];
    let flavor2 = gameState.prodBoosts.flavors["2%"];
    let flavor3 = gameState.prodBoosts.flavors["3%"];
    let flavor4 = gameState.prodBoosts.flavors["4%"];
    let flavor5 = gameState.prodBoosts.flavors["5%"];
    let flavor10 = gameState.prodBoosts.flavors["10%"];

    let flavors = (flavor1 ? 1.01**flavor1 : 1) * (flavor2 ? 1.02**flavor2 : 1) * (flavor3 ? 1.03**flavor3 : 1) * (flavor4 ? 1.04**flavor4 : 1) * (flavor5 ? 1.05**flavor5 : 1) * (flavor10 ? 1.1**flavor10 : 1);

    let milk = gameState.prodBoosts.milk ? gameState.prodBoosts.milk * 4 / 100 : 0;

    let helper = gameState.prodBoosts.kittens.helpers[0] ? gameState.prodBoosts.kittens.helpers[1] : 0;
    let worker = gameState.prodBoosts.kittens.workers[0] ? gameState.prodBoosts.kittens.workers[1] : 0;
    let engineer = gameState.prodBoosts.kittens.engineers[0] ? gameState.prodBoosts.kittens.engineers[1] : 0;
    let overseer = gameState.prodBoosts.kittens.overseers[0] ? gameState.prodBoosts.kittens.overseers[1] : 0;

    let kittenBoost = (helper ? 1 + milk * helper: 1) * (worker ? 1 + milk * worker: 1) * (engineer ? 1 + milk * engineer: 1) * (overseer ? 1 + milk * overseer: 1);

    globalBoost = flavors * kittenBoost;
}

function AdjustBuildings() {
    for (let building in gameState.buildings) {
        let amount = gameState.buildings[building].amount;
        let baseCost = gameState.buildings[building].baseCost;
        let baseReturn = gameState.buildings[building].baseReturn;
        let doubles = gameState.buildings[building].doubles;
        let upgradeCost = gameState.buildings[building].upgradeCost;
        let cps = baseReturn * (doubles ? 2**doubles : 1) * globalBoost;

        adjustedBuildings[building] = {
            name: building,
            amount: amount,
            doubles: doubles,
            totalCost: amount ? baseCost * 1.15**amount : baseCost,
            cps: cps,
            upgradeCost: upgradeCost,
        }
        // Add building's cps to totalcps
        totalcps += cps * amount;
    }
}

function CalculateBuyEfficiency() {
    for (let building in adjustedBuildings) {
        let cost = adjustedBuildings[building].totalCost;
        let cpsIncrease = adjustedBuildings[building].cps;

        let amount = adjustedBuildings[building].amount;
        let upgradeCost = adjustedBuildings[building].upgradeCost;

        adjustedBuildings[building].buyEfficiency = BuyEfficiency(cost, totalcps, cpsIncrease);

        if (upgradeCost) {
            adjustedBuildings[building].upgradeEfficiency = UpgradeEfficiency(upgradeCost, totalcps, cpsIncrease*amount);
        }

    }
}

function BuyEfficiency(cost, totalcps, cpsIncrease){
    let waitTime = totalcps ? cost / totalcps : 0;
    let efficiency = cost / cpsIncrease;
    return waitTime + efficiency;
}

function UpgradeEfficiency(cost, totalcps, cpsIncrease) {
    let waitTime = totalcps ? cost / totalcps : 0;
    let efficiency = cost / cpsIncrease;
    return waitTime + efficiency;
}

function CalculateProdUpgradeEfficiency() {
    let upgradePercent = 1
    for (let upgrade in gameState.prodBoosts.prodUpgrade.upgradePercents) {
        if (gameState.prodBoosts.prodUpgrade.upgradePercents[upgrade][0]) {
            upgradePercent = gameState.prodBoosts.prodUpgrade.upgradePercents[upgrade][1];
        }
    }

    let waitTime = totalcps ? gameState.prodBoosts.prodUpgrade.upgradeCost / totalcps : 0;
    let efficiency = gameState.prodBoosts.prodUpgrade.upgradeCost / (totalcps * upgradePercent - totalcps);
    prodUpgradeEfficiency = waitTime + efficiency;
}

function Display() {
    for (let buildingKey in adjustedBuildings) {
        let building = adjustedBuildings[buildingKey];

        document.getElementById(`${building.name.toLowerCase()}Number`).value = building.amount;
        document.getElementById(`${building.name.toLowerCase()}Doubles`).value = building.doubles;
        document.getElementById(`${building.name.toLowerCase()}Cost`).innerHTML = formatValue(building.totalCost, 2, true);
        document.getElementById(`${building.name.toLowerCase()}CpS`).innerHTML = formatValue(building.cps, 1);
        document.getElementById(`${building.name.toLowerCase()}Buy`).innerHTML = formatValue(building.buyEfficiency, 0);
        document.getElementById(`${building.name.toLowerCase()}Upgrade`).placeholder = building.upgradeEfficiency ? formatValue(building.upgradeEfficiency, 0) : 'Upgrade';
    }

    document.getElementById('totalCpS').innerHTML = `Total CpS: ${formatValue(totalcps, 1)}`;
    document.getElementById('globalBoost').innerHTML = `Global Boost: ${formatValue(globalBoost, 2)}`;

    document.getElementById('milkInput').placeholder = gameState.prodBoosts.milk ? gameState.prodBoosts.milk : 'Milk';
    document.getElementById('input1').placeholder = gameState.prodBoosts.flavors["1%"] ? gameState.prodBoosts.flavors["1%"] : '1%';
    document.getElementById('input2').placeholder = gameState.prodBoosts.flavors["2%"] ? gameState.prodBoosts.flavors["2%"] : '2%';
    document.getElementById('input3').placeholder = gameState.prodBoosts.flavors["3%"] ? gameState.prodBoosts.flavors["3%"] : '3%';
    document.getElementById('input4').placeholder = gameState.prodBoosts.flavors["4%"] ? gameState.prodBoosts.flavors["4%"] : '4%';
    document.getElementById('input5').placeholder = gameState.prodBoosts.flavors["5%"] ? gameState.prodBoosts.flavors["5%"] : '5%';
    document.getElementById('input10').placeholder = gameState.prodBoosts.flavors["10%"] ? gameState.prodBoosts.flavors["10%"] : '10%';

    document.getElementById('prodUpgrade').placeholder = gameState.prodBoosts.prodUpgrade.upgradeCost ? formatValue(prodUpgradeEfficiency) : 'Upgrade';
    for(let flavor in gameState.prodBoosts.prodUpgrade.upgradePercents){
        // Check if this flavor is currently activated (first item in array is true)
        if(gameState.prodBoosts.prodUpgrade.upgradePercents[flavor][0]){
            // Get the radio button element for this flavor and set it to checked
            // Note: assumes that your radio button ids follow the "flavor<number>" pattern
            let flavorNumber = flavor.replace("%", ""); // remove the % sign to get the number
            document.getElementById(`flavor${flavorNumber}`).checked = true;
        }
    }

    for(let kittenType in gameState.prodBoosts.kittens) {
        // Check if this kitten type is currently activated (first item in array is true)
        if(gameState.prodBoosts.kittens[kittenType][0]) {
            // Get the checkbox element for this kitten type and set it to checked
            document.getElementById(`kitten-${kittenType}`).checked = true;
        } else {
            // Uncheck the checkbox if the kitten type is not activated
            document.getElementById(`kitten-${kittenType}`).checked = false;
        }
    }
}

function addEventListeners() {
    // For the buildings
    for (let buildingKey in gameState.buildings) {
        let building = gameState.buildings[buildingKey];

        let amountInput = document.getElementById(`${building.name.toLowerCase()}Number`);
        let doublesInput = document.getElementById(`${building.name.toLowerCase()}Doubles`);
        let upgradeInput = document.getElementById(`${building.name.toLowerCase()}Upgrade`);

        // Add event listener for 'keyup' event
        [amountInput, doublesInput, upgradeInput].forEach(inputElement => {
            if (inputElement) {
                inputElement.addEventListener('keyup', (event) => {
                    // Check for 'Enter' key
                    if (event.key === 'Enter') {
                        // Update gameState
                        if (inputElement === amountInput) {
                            gameState.buildings[buildingKey].amount = parseInt(inputElement.value, 10);
                        } else if (inputElement === doublesInput) {
                            gameState.buildings[buildingKey].doubles = parseInt(inputElement.value, 10);
                        } else if (inputElement === upgradeInput) {
                            gameState.buildings[buildingKey].upgradeCost = parseInt(inputElement.value, 10);
                            inputElement.value = '';
                        }

                        // Save to local storage
                        localStorage.setItem('gameState', JSON.stringify(gameState));

                        // Recalculate
                        GoActionGo();

                        // Lose focus from the input
                        event.target.blur();
                    }
                });
            }
        });
    }

    // For the milk
    let milkInput = document.getElementById("milkInput");
    if (milkInput) {
        milkInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                gameState.prodBoosts.milk = parseFloat(milkInput.value);
                milkInput.value = '';
                localStorage.setItem('gameState', JSON.stringify(gameState));
                GoActionGo();
                event.target.blur();
            }
        });
    }

    // For the flavors
    for(let i = 1; i <= 10; i += (i < 6) ? 1 : 5) {
        let flavorInput = document.getElementById(`input${i}`);
        if (flavorInput) {
            flavorInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    gameState.prodBoosts.flavors[`${i}%`] = parseInt(flavorInput.value, 10);
                    localStorage.setItem('gameState', JSON.stringify(gameState));
                    flavorInput.value = '';
                    GoActionGo();
                    event.target.blur();
                }
            });
        }
    }

// For the prodUpgrade
let prodUpgradeInput = document.getElementById("prodUpgrade");
if (prodUpgradeInput) {
    prodUpgradeInput.addEventListener('keyup', (event) => {
        // Check for 'Enter' key
        if (event.key === 'Enter') {
            gameState.prodBoosts.prodUpgrade.upgradeCost = parseInt(prodUpgradeInput.value, 10);
            prodUpgradeInput.value = '';

            // Check which radio button is checked
            for (let i = 1; i <= 5; i++) {
                let radioInput = document.getElementById(`flavor${i}`);
                let flavor = radioInput.value;
                gameState.prodBoosts.prodUpgrade.upgradePercents[flavor][0] = radioInput.checked;
            }

            localStorage.setItem('gameState', JSON.stringify(gameState));
            GoActionGo();
            event.target.blur();
        }
    });
}

// For the kittens
let kittenTypes = ['helpers', 'workers', 'engineers', 'overseers'];
kittenTypes.forEach(kittenType => {
    let kittenInput = document.getElementById(`kitten-${kittenType}`);
    if (kittenInput) {
        kittenInput.addEventListener('change', (event) => {
            // Update gameState
            gameState.prodBoosts.kittens[kittenType][0] = event.target.checked;

            // Save to local storage
            localStorage.setItem('gameState', JSON.stringify(gameState));

            // Recalculate
            GoActionGo();
        });
    }
});


    
}

function formatValue(num, decimals = 2, isCost = false) {
    let factor = Math.pow(10, decimals);
    num = isCost ? Math.ceil(num) : Math.floor(num * factor) / factor;

    if (num >= 1e12) {
        return (num / 1e12).toFixed(decimals) + 'T';
    }
    if (num >= 1e9) {
        return (num / 1e9).toFixed(decimals) + 'B';
    }
    if (num >= 1e6) {
        return (num / 1e6).toFixed(decimals) + 'M';
    }
    if (num >= 1e3) {
        return (num / 1e3).toFixed(decimals) + 'K';
    }

    return isCost ? num.toFixed(0) : num.toFixed(decimals);
}

function GoActionGo() {
    adjustedBuildings = {};
    globalBoost = 1;
    totalcps = 0;
    prodUpgradeEfficiency = 0;

    CalcGlobalBoost();
    AdjustBuildings();
    CalculateBuyEfficiency();
    CalculateProdUpgradeEfficiency();
    Display();
}

function clearStorage() {
    let confirmClear = confirm('Are you sure you want to clear all data?');
    if (confirmClear) {
        localStorage.clear();
        console.log('All data cleared from localStorage');
    }
}