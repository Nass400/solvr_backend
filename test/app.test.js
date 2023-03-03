const assert = require('assert');
const { countData } = require('../src/js/countData');
const { filterData } = require('../src/js/filterData');


describe('filterData', () => {
  const testData = [
    {
      name: 'Uzuzozne',
      people: [
        {
          name: 'Lillie Abbott',
          animals: [{ name: 'John Dory' }]
        }
      ]
    },
    {
      name: 'Satanwi',
      people: [
        {
          name: 'Anthony Bruno',
          animals: [{ name: 'Oryx' }]
        }
      ]
    }
  ];

  it('should return filtered data matching the filter pattern', () => {
    const result = filterData(testData, 'Dory');
    assert.deepStrictEqual(result, [
      {
        name: 'Uzuzozne',
        people: [{ name: 'Lillie Abbott', animals: [{ name: 'John Dory' }] }]
      }
    ]);
  });

  it('should return empty array when no data matches the filter pattern', () => {
    const result = filterData(testData, 'Elephant');
    assert.deepStrictEqual(result, []);
  });
});

describe('countData', () => {
  const testData = [
    {
      name: 'Uzuzozne',
      people: [
        {
          name: 'Lillie Abbott',
          animals: [{ name: 'John Dory' }]
        }
      ]
    },
    {
      name: 'Satanwi',
      people: [
        {
          name: 'Anthony Bruno',
          animals: [{ name: 'Oryx' }]
        }
      ]
    }
  ];

  it('should return data with counts for people and animals', () => {
    const result = countData(testData);
    assert.deepStrictEqual(result, [
      {
        name: 'Uzuzozne [2]',
        people: [
          {
            name: 'Lillie Abbott [1]',
            animals: [{ name: 'John Dory' }]
          }
        ]
      },
      {
        name: 'Satanwi [2]',
        people: [
          {
            name: 'Anthony Bruno [1]',
            animals: [{ name: 'Oryx' }]
          }
        ]
      }
    ]);
  });
});
