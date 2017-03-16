import { moduleForModel, test } from 'ember-qunit';

moduleForModel('folder', 'Unit | Serializer | folder', {
  // Specify the other units that are required for this test.
  needs: ['serializer:folder']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
