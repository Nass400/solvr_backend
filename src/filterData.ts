export function filterData(data, filterPattern) {
  const filterData = data.filter(({ people }) => {
    const filteredPeople = people.filter(({ animals }) => {
      const filteredAnimals = animals.filter(({ name }) => {
        return name.includes(filterPattern);
      });
      return filteredAnimals.length > 0;
    });
    return filteredPeople.length > 0;
  });
  return filterData;
}
