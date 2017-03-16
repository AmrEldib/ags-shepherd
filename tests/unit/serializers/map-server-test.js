import { moduleForModel, test } from 'ember-qunit';

moduleForModel('map-server', 'Unit | Serializer | map server', {
  // Specify the other units that are required for this test.
  needs: ['serializer:map-server']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
