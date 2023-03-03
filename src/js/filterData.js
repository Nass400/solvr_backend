"use strict";
exports.__esModule = true;
exports.filterData = void 0;
function filterData(data, filterPattern) {
    var filterData = data.filter(function (_a) {
        var people = _a.people;
        var filteredPeople = people.filter(function (_a) {
            var animals = _a.animals;
            var filteredAnimals = animals.filter(function (_a) {
                var name = _a.name;
                return name.includes(filterPattern);
            });
            return filteredAnimals.length > 0;
        });
        return filteredPeople.length > 0;
    });
    return filterData;
}
exports.filterData = filterData;
//# sourceMappingURL=filterData.js.map