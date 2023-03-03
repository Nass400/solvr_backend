"use strict";
exports.__esModule = true;
exports.countData = void 0;
function countData(data) {
    var countData = data.map(function (_a) {
        var name = _a.name, people = _a.people;
        var total = countChildren(people).total;
        return {
            name: "".concat(name, " [").concat(total, "]"),
            people: people.map(function (_a) {
                var name = _a.name, animals = _a.animals;
                var totalAnimals = countChildren(animals).total;
                return {
                    name: "".concat(name, " [").concat(totalAnimals, "]"),
                    animals: animals
                };
            })
        };
    });
    return countData;
}
exports.countData = countData;
function countChildren(arr) {
    var totalAnimals = 0;
    var totalPeople = arr.length;
    arr.forEach(function (_a) {
        var animals = _a.animals;
        if (animals) {
            totalAnimals += animals.length;
        }
    });
    var total = totalPeople + totalAnimals;
    return { total: total };
}
//# sourceMappingURL=countData.js.map