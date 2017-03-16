import { moduleForModel, test } from 'ember-qunit';

moduleForModel('feature-item', 'Unit | Serializer | feature item', {
  // Specify the other units that are required for this test.
  needs: ['serializer:feature-item']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
