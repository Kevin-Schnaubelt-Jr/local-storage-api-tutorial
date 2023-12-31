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
            "managers": [false, 0.2],
        },
        prestige: {
            prestigeNumber: 0,
            prestigeUpgrade: 0.05,
        },
        heralds: 0,
    },
    lucky: 6000,
    grandmapocalyseState: "Grandma",
    grandmapocalyse: {
        "Grandma": 0,
        "One Mind": 0.02,
        "Communal Brainsweep": 0.04,
        "Elder Pact": 0.04,
    },
    buildings: {
        Cursor: {
            name: 'Cursor',
            amount: 0,
            baseCost: 15,
            baseReturn: 0.1,
            doubles: 0,
            upgradeCost: 0,
            currentFinger: "Cursor",
            fingers: {
                "Cursor":0,
                "Thousand": 0.1,
                "Million": 0.5,
                "Billion": 5,
                "Trillion": 100,
                "Quadrillion": 2000,
                "Quintillion": 40000,
                "Sextillion": 800000,
                "Septillion": 16000000,
                "Octillion": 320000000,
                "Nonillion": 6400000000,
                "Decillion": 128000000000,
                "Undecillion": 2560000000000,

            }
        },
        Grandma: {
            name: 'Grandma',
            amount: 0,
            baseCost: 100,
            baseReturn: 1,
            doubles: 0,
            upgradeCost: 0,
            upgradeGrandmaCost: 0,
            upgradeGrandmaType: 'Farm',
        },
        Farm: {
            name: 'Farm',
            amount: 0,
            baseCost: 1100,
            baseReturn: 8,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 1,
        },
        Mine: {
            name: 'Mine',
            amount: 0,
            baseCost: 12000,
            baseReturn: 47,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 2,
        },
        Factory: {
            name: 'Factory',
            amount: 0,
            baseCost: 130000,
            baseReturn: 260,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 3,
        },
        Bank: {
            name: 'Bank',
            amount: 0,
            baseCost: 1400000,
            baseReturn: 1400,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 4,
        },
        Temple: {
            name: 'Temple',
            amount: 0,
            baseCost: 20000000,
            baseReturn: 7800,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 5,
        },
        WizardTower: {
            name: 'WizardTower',
            amount: 0,
            baseCost: 330000000,
            baseReturn: 44000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 6,
        },
        Shipment: {
            name: 'Shipment',
            amount: 0,
            baseCost: 5100000000,
            baseReturn: 260000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 7,
        },
        AlchemyLab: {
            name: 'AlchemyLab',
            amount: 0,
            baseCost: 75000000000,
            baseReturn: 1600000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 8,
        },
        Portal: {
            name: 'Portal',
            amount: 0,
            baseCost: 1000000000000,
            baseReturn: 10000000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 9,
        },
        TimeMachine: {
            name: 'TimeMachine',
            amount: 0,
            baseCost: 14000000000000,
            baseReturn: 65000000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 10,
        },
        Antimatter: {
            name: 'Antimatter',
            amount: 0,
            baseCost: 170000000000000,
            baseReturn: 430000000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 11,
        },
        Prism: {
            name: 'Prism',
            amount: 0,
            baseCost: 2100000000000000,
            baseReturn: 2900000000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 12,
        },
        Chancemaker: {
            name: 'Chancemaker',
            amount: 0,
            baseCost: 26000000000000000,
            baseReturn: 21000000000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 13,
        },
        Fractal: {
            name: 'Fractal',
            amount: 0,
            baseCost: 310000000000000000,
            baseReturn: 150000000000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 14,
        },
        Javascript: {
            name: 'Javascript',
            amount: 0,
            baseCost: 71000000000000000000,
            baseReturn: 1100000000000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 15,
        },
        Idleverse: {
            name: 'Idleverse',
            amount: 0,
            baseCost: 12000000000000000000000,
            baseReturn: 8300000000000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 16,
        },
        Cortex: {
            name: 'Cortex',
            amount: 0,
            baseCost: 1900000000000000000000000,
            baseReturn: 64000000000000,
            doubles: 0,
            upgradeCost: 0,
            grandmaBoosted: false,
            grandmaBoost: 17,
        },
    }
};

// Create empty object for storing adjusted buildings
let adjustedBuildings = {};
let globalBoost = 1;
let totalcps = 0;
let prodUpgradeEfficiency = 0;
let grandmaTotal = 0;
let portalTotal = 0;
let nonCursorBuildingTotal = 0;
let luckyValue = 0;
let efficiencies = [];


window.onload = function() {
    GoActionGo();
    addEventListeners();
    // Other onload tasks...
    console.log("adjusted", adjustedBuildings);
    console.log("gamestate", gameState);

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
    let managers = gameState.prodBoosts.kittens.managers[0] ? gameState.prodBoosts.kittens.managers[1] : 0;

    let prestigeNumber = gameState.prodBoosts.prestige.prestigeNumber;
    let prestigeUpgrade = gameState.prodBoosts.prestige.prestigeUpgrade;
    let prestigeBoost = prestigeNumber ? 1 + 0.01 * prestigeNumber * prestigeUpgrade : 1;

    let kittenBoost = (helper ? 1 + milk * helper: 1) * (worker ? 1 + milk * worker: 1) * (engineer ? 1 + milk * engineer: 1) * (overseer ? 1 + milk * overseer: 1) * (managers ? 1 + milk * managers: 1);

    let heralds = 1 + 0.01 * gameState.prodBoosts.heralds;

    globalBoost = flavors * kittenBoost * prestigeBoost * heralds;

    grandmaTotal = gameState.buildings.Grandma.amount;
    portalTotal = gameState.buildings.Portal.amount;
    for (let building in gameState.buildings) {
        if (building !== 'Cursor') {
            nonCursorBuildingTotal += gameState.buildings[building].amount;
        }
    }
}

function AdjustBuildings() {
    for (let building in gameState.buildings) {
        let amount = gameState.buildings[building].amount;
        let baseCost = gameState.buildings[building].baseCost;
        let baseReturn = gameState.buildings[building].baseReturn;
        let doubles = gameState.buildings[building].doubles;
        let upgradeCost = gameState.buildings[building].upgradeCost;

        let grandmaBoosted = gameState.buildings[building].grandmaBoosted ?? false;
        let grandmaBoost = gameState.buildings[building].grandmaBoost ?? null;

        let currentFinger = gameState.buildings[building].currentFinger ?? false;
        let fingerBoost = currentFinger ? gameState.buildings[building].fingers[currentFinger] : false;

        let grandmapocalyseState = gameState.grandmapocalyseState;
        let grandmapocalyseBoost = 0;
        if (building === 'Grandma') {
            if (grandmapocalyseState !== 'Elder Pact') {
            grandmapocalyseBoost = gameState.grandmapocalyse[grandmapocalyseState] * grandmaTotal;
            } else {
            grandmapocalyseBoost = gameState.grandmapocalyse[grandmapocalyseState] * grandmaTotal + 0.05 * portalTotal;
            }
        }

        let cps = (((baseReturn + grandmapocalyseBoost) * (doubles ? 2**doubles : 1) * (grandmaBoosted ? 1 + 0.01 * (grandmaTotal/grandmaBoost) : 1)) + (currentFinger ? fingerBoost * nonCursorBuildingTotal : 0)) * globalBoost;


        let upgradeGrandmaCost = gameState.buildings[building].upgradeGrandmaCost ?? null;
        let upgradeGrandmaType = gameState.buildings[building].upgradeGrandmaType ?? null;


        adjustedBuildings[building] = {
            name: building,
            amount: amount,
            doubles: doubles,
            totalCost: amount ? baseCost * 1.15**amount : baseCost,
            cps: cps,
            upgradeCost: upgradeCost,
        }

        if (currentFinger) {
            adjustedBuildings[building].currentFinger = currentFinger;
        }

        if (grandmaBoost !== null) {
            adjustedBuildings[building].grandmaBoosted = grandmaBoosted;
            adjustedBuildings[building].grandmaBoost = grandmaBoost;
        }

         // If upgradeGrandmaCost is not null, add it to the object.
        if (upgradeGrandmaCost !== null) {
            adjustedBuildings[building].upgradeGrandmaCost = upgradeGrandmaCost;
            adjustedBuildings[building].upgradeGrandmaType = upgradeGrandmaType;
        }

        // Add building's cps to totalcps
        totalcps += cps * amount;
    }
    luckyValue = totalcps * gameState.lucky;
}

function CalculateBuyEfficiency() {   
    for (let building in adjustedBuildings) {
        let cost = adjustedBuildings[building].totalCost;
        let cpsIncrease = adjustedBuildings[building].cps;
        let amount = adjustedBuildings[building].amount;
        let upgradeCost = adjustedBuildings[building].upgradeCost;
        let upgradeGrandmaCost = adjustedBuildings[building].upgradeGrandmaCost ?? null;
        let upgradeGrandmaType = adjustedBuildings[building].upgradeGrandmaType ?? null;

        adjustedBuildings[building].buyEfficiency = BuyEfficiency(cost, totalcps, cpsIncrease);

        if (upgradeCost) {
            adjustedBuildings[building].upgradeEfficiency = UpgradeEfficiency(upgradeCost, totalcps, cpsIncrease*amount);
        }

        if (upgradeGrandmaCost !== null) {
            adjustedBuildings[building].upgradeGrandmaEfficiency = UpgradeGrandmaEfficiency(upgradeGrandmaCost, cpsIncrease, upgradeGrandmaType, totalcps);
        }

        // Create an object with the building's name and efficiency, and add it to the array
        efficiencies.push({
            name: building,
            buyEfficiency: adjustedBuildings[building].buyEfficiency,
        });
    }

    // Sort the array by the efficiency values, from lowest to highest
    efficiencies.sort((a, b) => {
        return a.buyEfficiency - b.buyEfficiency;
    });

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

function UpgradeGrandmaEfficiency(upgradeGrandmaCost ,grandmaCps, upgradeGrandmaType, totalcps) {
    let buildingTotal = adjustedBuildings[upgradeGrandmaType].amount * adjustedBuildings[upgradeGrandmaType].cps;
    let buildingGrandmaBoost = adjustedBuildings[upgradeGrandmaType].grandmaBoost;
    let grandmas = adjustedBuildings.Grandma.amount / buildingGrandmaBoost;
    let waitTime = totalcps ? upgradeGrandmaCost / totalcps : 0;
    let efficiency = upgradeGrandmaCost / (grandmaCps + (buildingTotal * (1 + 0.01 * grandmas) - buildingTotal));
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

        if (building.name === 'Cursor') {
            document.getElementById('finger-names').value = building.currentFinger;
        }

        if (building.name === 'Grandma') {
            document.getElementById('grandma-names').value = gameState.grandmapocalyseState;
        }

        document.getElementById(`${building.name.toLowerCase()}Number`).value = building.amount;
        if (document.getElementById(`${building.name.toLowerCase()}GrandmaBoost`)) {
            document.getElementById(`${building.name.toLowerCase()}GrandmaBoost`).checked = building.grandmaBoosted;
        }
        document.getElementById(`${building.name.toLowerCase()}Doubles`).value = building.doubles;
        // document.getElementById(`${building.name.toLowerCase()}Cost`).innerHTML = formatValue(building.totalCost, 0, true);
        document.getElementById(`${building.name.toLowerCase()}CpS`).innerHTML = formatValue(building.cps, 3, false, true, true);
        document.getElementById(`${building.name.toLowerCase()}Buy`).innerHTML = formatValue(building.buyEfficiency, 2, false, true);
        document.getElementById(`${building.name.toLowerCase()}Upgrade`).placeholder = building.upgradeEfficiency ? formatValue(building.upgradeEfficiency, 2) : 'Upgrade';
        if (document.getElementById(`${building.name.toLowerCase()}GrandmaUpgrade`)) {
            document.getElementById(`${building.name.toLowerCase()}GrandmaUpgrade`).placeholder = building.upgradeGrandmaEfficiency ? formatValue(building.upgradeGrandmaEfficiency, 2) : 'Upgrade';
            document.getElementById('building-names').value = building.upgradeGrandmaType;
        }
    }

    document.getElementById('totalCpS').innerHTML = `Total CpS: ${formatValue(totalcps, 3, false, true, true)}`;
    document.getElementById('globalBoost').innerHTML = `Multiplier: ${formatValue(globalBoost, 2,false, false, true)}`;
    document.getElementById('luckyValue').innerHTML = `Lucky: ${formatValue(luckyValue, 1, false, false, true)}`;
    // get all radials with name lucky
    let luckyRadials = document.getElementsByName('lucky');
    // loop through all radials
    for (let i = 0; i < luckyRadials.length; i++) {
        // if the value of the radial is equal to the lucky value, check it
        if (luckyRadials[i].value == gameState.lucky) {
            luckyRadials[i].checked = true;
        }
    }

    document.getElementById('milkInput').placeholder = gameState.prodBoosts.milk ? gameState.prodBoosts.milk : 'Milk';
    document.getElementById('input1').value = gameState.prodBoosts.flavors["1%"] ? gameState.prodBoosts.flavors["1%"] : '';
    document.getElementById('input2').value = gameState.prodBoosts.flavors["2%"] ? gameState.prodBoosts.flavors["2%"] : '';
    document.getElementById('input3').value = gameState.prodBoosts.flavors["3%"] ? gameState.prodBoosts.flavors["3%"] : '';
    document.getElementById('input4').value = gameState.prodBoosts.flavors["4%"] ? gameState.prodBoosts.flavors["4%"] : '';
    document.getElementById('input5').value = gameState.prodBoosts.flavors["5%"] ? gameState.prodBoosts.flavors["5%"] : '';
    document.getElementById('input10').value = gameState.prodBoosts.flavors["10%"] ? gameState.prodBoosts.flavors["10%"] : '';

    document.getElementById('prodUpgrade').placeholder = gameState.prodBoosts.prodUpgrade.upgradeCost ? formatValue(prodUpgradeEfficiency) : 'Upgrade';
    for(let flavor in gameState.prodBoosts.prodUpgrade.upgradePercents){
        // Check if this flavor is currently activated (first item in array is true)
        if(gameState.prodBoosts.prodUpgrade.upgradePercents[flavor][0]){
            // Get the radio button element for this flavor and set it to checked
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

    document.getElementById('prestigeNumber').placeholder = gameState.prodBoosts.prestige.prestigeNumber ? gameState.prodBoosts.prestige.prestigeNumber : 'Prestige';
    let prestigeRadials = document.getElementsByName('prestige');
    for (let i = 0; i < prestigeRadials.length; i++) {
        if (prestigeRadials[i].value == gameState.prodBoosts.prestige.prestigeUpgrade) {
            prestigeRadials[i].checked = true;
        }
    }

    document.getElementById('heralds').placeholder = gameState.prodBoosts.heralds ? gameState.prodBoosts.heralds : 'Heralds';

    // loop through efficiencies array and place the buildings name in id="best-buy-1" through id="best-buy-5". stop after 5.
    for (let i = 0; i < 5; i++) {
        document.getElementById(`best-buy-${i+1}`).innerHTML = `${i+1}: ${efficiencies[i].name}`;
    }
    
}

function addEventListeners() {
    // For the buildings
    BuildingsEvent();

    // For the finger
    FingerEvent();

    // For the milk
    MilkEvent();

    // For the flavors
    FlavorsEvent();

    // For the prodUpgrade
    prodUpgradeEvent();

    // For the lucky
    LuckyEvent();

    // For the kittens
    KittenEvent();

    // For the prestige
    PrestigeEvent();

    // For the heralds
    HeraldsEvent();
    
}

function HeraldsEvent() {
    let heraldsInput = document.getElementById('heralds');
    if (heraldsInput) {
        heraldsInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                gameState.prodBoosts.heralds = parseInt(heraldsInput.value, 10);
                localStorage.setItem('gameState', JSON.stringify(gameState));
                heraldsInput.value = '';
                GoActionGo();
                event.target.blur();
            }
        });
    }
}


function PrestigeEvent() {
    let prestigeNumberInput = document.getElementById('prestigeNumber');
    if (prestigeNumberInput) {
        prestigeNumberInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                gameState.prodBoosts.prestige.prestigeNumber = parseInt(prestigeNumberInput.value, 10);
                prestigeNumberInput.value = '';
                localStorage.setItem('gameState', JSON.stringify(gameState));
                GoActionGo();
                event.target.blur();
            }
        });
    }

    let prestigeRadios = document.querySelectorAll('input[name="prestige"]');
    prestigeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            // Update gameState.prestigeUpgrade with selected radio value
            gameState.prodBoosts.prestige.prestigeUpgrade = parseFloat(radio.value);

            // Save to local storage
            localStorage.setItem('gameState', JSON.stringify(gameState));

            // Recalculate
            GoActionGo();
        });
    });
}
            

function LuckyEvent() {
    // Get all radio inputs with name 'lucky'
    let luckyRadios = document.querySelectorAll('input[name="lucky"]');

    // Add event listener for 'change' event to each radio input
    luckyRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            // Update gameState.lucky with selected radio value
            gameState.lucky = parseInt(radio.value, 10);

            // Save to local storage
            localStorage.setItem('gameState', JSON.stringify(gameState));

            // Recalculate
            GoActionGo();
        });
    });
}

function FingerEvent() {
    let fingerNamesSelect = document.getElementById('finger-names');

    // Add event listener for 'change' event
    fingerNamesSelect.addEventListener('change', () => {
        // Get selected option value
        let selectedFinger = fingerNamesSelect.value;

        // Update currentFinger in gameState for Cursor
        gameState.buildings['Cursor'].currentFinger = selectedFinger;

        // Save to local storage
        localStorage.setItem('gameState', JSON.stringify(gameState));

        // Recalculate
        GoActionGo();
    });

    let grandmaNamesSelect = document.getElementById('grandma-names');
    // Add event listener for 'change' event
    grandmaNamesSelect.addEventListener('change', () => {
        // Get selected option value
        let selectedGrandma = grandmaNamesSelect.value;

        // Update grandmapocalyseState in gameState for Grandma
        gameState.grandmapocalyseState = selectedGrandma;

        // Save to local storage
        localStorage.setItem('gameState', JSON.stringify(gameState));

        // Recalculate
        GoActionGo();
    });
}

function BuildingsEvent() {
    for (let buildingKey in gameState.buildings) {
        let building = gameState.buildings[buildingKey];

        let amountInput = document.getElementById(`${building.name.toLowerCase()}Number`);
        let doublesInput = document.getElementById(`${building.name.toLowerCase()}Doubles`);
        let upgradeInput = document.getElementById(`${building.name.toLowerCase()}Upgrade`);
        let grandmaBoostInput = document.getElementById(`${building.name.toLowerCase()}GrandmaBoost`);

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
                            gameState.buildings[buildingKey].upgradeCost = parseValue(inputElement.value, 10);
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

        // Add event listener for 'change' event on grandmaBoost checkbox
        if (grandmaBoostInput) {
            grandmaBoostInput.addEventListener('change', () => {
                // Update grandmaBoosted in gameState
                gameState.buildings[buildingKey].grandmaBoosted = grandmaBoostInput.checked;

                // Save to local storage
                localStorage.setItem('gameState', JSON.stringify(gameState));

                // Recalculate
                GoActionGo();
            });
        }

        // If the building is "Grandma", add the event listener for "grandmaGrandmaUpgrade"
        if (building.name === 'Grandma') {
            let grandmaGrandmaUpgradeInput = document.getElementById('grandmaGrandmaUpgrade');
            let buildingNamesSelect = document.getElementById('building-names');
            if (grandmaGrandmaUpgradeInput) {
                grandmaGrandmaUpgradeInput.addEventListener('keyup', (event) => {
                    // Check for 'Enter' key
                    if (event.key === 'Enter') {
                        // Update gameState
                        gameState.buildings[buildingKey].upgradeGrandmaCost = parseValue(grandmaGrandmaUpgradeInput.value, 10);
                        grandmaGrandmaUpgradeInput.value = '';

                        // Save to local storage
                        localStorage.setItem('gameState', JSON.stringify(gameState));

                        // Recalculate
                        GoActionGo();

                        // Lose focus from the input
                        event.target.blur();
                    }
                });
            }

            // Add event listener for 'change' event on buildingNamesSelect
            if (buildingNamesSelect) {
                buildingNamesSelect.addEventListener('change', () => {
                    // Update upgradeGrandmaType in gameState
                    gameState.buildings[buildingKey].upgradeGrandmaType = buildingNamesSelect.value;

                    // Save to local storage
                    localStorage.setItem('gameState', JSON.stringify(gameState));

                    // Recalculate
                    GoActionGo();
                });
            }
        }
    }
}

function MilkEvent() {
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
}

function FlavorsEvent() {
    for (let i = 1; i <= 10; i = (i < 5) ? i + 1 : i + 5) {
        let flavorInput = document.getElementById(`input${i}`);
        if (flavorInput) {
            flavorInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    gameState.prodBoosts.flavors[`${i}%`] = parseInt(flavorInput.value, 10);
                    localStorage.setItem('gameState', JSON.stringify(gameState));
                    GoActionGo();
                    event.target.blur();
                }
            });
        }
    }
}

function prodUpgradeEvent() {
    let prodUpgradeInput = document.getElementById("prodUpgrade");
    if (prodUpgradeInput) {
        prodUpgradeInput.addEventListener('keyup', (event) => {
            // Check for 'Enter' key
            if (event.key === 'Enter') {
                gameState.prodBoosts.prodUpgrade.upgradeCost = parseValue(prodUpgradeInput.value, 10);
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
}

function KittenEvent() {
    let kittenTypes = ['helpers', 'workers', 'engineers', 'overseers', 'managers'];
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

function formatValue(num, decimals = 2, isBuyNumber = false, isCps = false, roundUp = false) {
    let factor = Math.pow(10, decimals);
    if (roundUp) {
        num = Math.ceil(num * factor) / factor;
    } else if (isBuyNumber) {
        num = Math.floor(num);
    } else {
        num = Math.floor(num * factor) / factor;
    }

    let suffix = '';
    let divisor = 1;
    let precision = decimals;

    if (num >= 1e24) {
        suffix = 'Spt';
        divisor = 1e24;
    } else if (num >= 1e21) {
        suffix = 'Sx';
        divisor = 1e21;
    } else if (num >= 1e18) {
        suffix = 'Qt';
        divisor = 1e18;
    } else if (num >= 1e15) {
        suffix = 'Qd';
        divisor = 1e15;
    } else if (num >= 1e12) {
        suffix = 'T';
        divisor = 1e12;
    } else if (num >= 1e9) {
        suffix = 'B';
        divisor = 1e9;
    } else if (num >= 1e6) {
        suffix = 'M';
        divisor = 1e6;
    } else if (num >= 1e3) {
        suffix = 'K';
        divisor = 1e3;
        precision = 3; // Set precision to 3 for numbers over 1K
    } else if (isCps) {
        precision = 1; // Set precision to 1 for numbers under 1K when isCps is true
    }

    return (num / divisor).toFixed(precision) + suffix;
}

function parseValue(input) {
    const units = {
        'k': 1e3,
        'm': 1e6,
        'b': 1e9,
        't': 1e12,
        'qd': 1e15,
        'qt': 1e18,
        'sx': 1e21,
        'spt': 1e24,
    };
    
    const regex = /\s*(\d+\.?\d*)\s*([a-z]+)?/i;
    const parts = regex.exec(input);

    if (parts) {
        const numberPart = parseFloat(parts[1]);
        const unitPart = parts[2] ? parts[2].toLowerCase() : '';
        const multiplier = units[unitPart] || 1;
        return numberPart * multiplier;
    }

    return NaN;
}







function GoActionGo() {
    adjustedBuildings = {};
    globalBoost = 1;
    totalcps = 0;
    prodUpgradeEfficiency = 0;
    grandmaTotal = 0;
    portalTotal = 0;
    nonCursorBuildingTotal = 0;
    luckyValue = 0;
    efficiencies = [];

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