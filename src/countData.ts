interface Animal {
  name: string;
}

interface Person {
  name: string;
  animals?: Animal[];
}

export function countData(data) {
  const countData = data.map(({ name, people }) => {
    const { total } = countChildren(people);
    return {
      name: `${name} [${total}]`,
      people: people.map(({ name, animals }) => {
        const { total: totalAnimals } = countChildren(animals);
        return {
          name: `${name} [${totalAnimals}]`,
          animals: animals
        };
      })
    };
  });
  return countData;
}
function countChildren(arr: Person[]) {
  let totalAnimals = 0;
  const totalPeople = arr.length;
  arr.forEach(({ animals }) => {
    if (animals) {
      totalAnimals += animals.length;
    }
  });
  const total = totalPeople + totalAnimals;
  return { total };
}
