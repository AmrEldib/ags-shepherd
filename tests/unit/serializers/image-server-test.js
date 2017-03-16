import { moduleForModel, test } from 'ember-qunit';

moduleForModel('image-server', 'Unit | Serializer | image server', {
  // Specify the other units that are required for this test.
  needs: ['serializer:image-server']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
