var testReturnValues = new TestReturnValues()

function assertionIsTrue() {
  assert.isTrue(testReturnValues.trueStatement == true)
};

assertionIsTrue()

function resultIsEqual() {
  assert.isEqual(testReturnValues.equalStatement, "test string")
};

resultIsEqual()

function objectIsEmpty() {
  assert.isEmpty(testReturnValues.emptyObject)
};

objectIsEmpty()

function objectDoesContain() {
  assert.contains(testReturnValues.notEmptyObject, "dog")
};

objectDoesContain()
