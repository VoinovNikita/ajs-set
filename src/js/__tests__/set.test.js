/* eslint-disable linebreak-style */
import Team, { char1, char2, char3 } from '../set';

test('team.add ', () => {
  const result = new Team();
  result.add(char1);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([{ name: 'Character1' }]);
});

test('team.add ', () => {
  function resultExpectError() {
    const result = new Team();
    result.add(char1);
    result.add(char1);
    return result.toArray();
  }
  expect(resultExpectError).toThrow(new Error('Данный персонаж есть в команде'));
});

test('team.addAll ', () => {
  const result = new Team();
  result.addAll(char1, char2, char3);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([{ name: 'Character1' }, { name: 'Character2' }, { name: 'Character3' }]);
});
