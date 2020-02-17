const createCollection = async (db) => {
  await db.createCollection('sites', {
    validator: {
      $and: [
        { url: { $type: 'string' } },
          { server: { $type: 'object' } },
      ],
    },
    validationAction: 'error',
    validationLevel: 'strict',
  });
}
 
module.exports = {
  async up(db) {
    try {
      const col = await db.listCollections({ name: 'sites' }).toArray();
      await db.collection('sites').insertMany([
        {"url":"gridpane.host","server":{"ip":"35.237.42.207","name":"rs1-gcp"}},
        {"url":"gridpane.host","server":{"ip":"34.94.118.112","name":"rs2-gcp"}},
        {"url":"gridpane.host","server":{"ip":"157.245.246.216","name":"rs3-do"}},
        {"url":"gridpane.host","server":{"ip":"167.172.211.164","name":"rs4-do"}},
        {"url":"gridpane.host","server":{"ip":"167.99.95.218","name":"rs5-do"}},
        {"url":"gridpane.monster","server":{"ip":"104.198.143.76","name":"monster"}},
        {"url":"newer.com","server":{"ip":"209.97.183.48","name":"newer"}},
        {"url":"newerer.com","server":{"ip":"159.65.88.180","name":"newerer"}},
        {"url":"nsfwp.online","server":{"ip":"159.65.88.180","name":"newerer"}},
        {"url":"nsfwp.site","server":{"ip":"209.97.183.48","name":"newer"}}])
      if (col.length > 0) {
        throw new Error('Collection sites already exists in MongoDb. Exited...')
      } else {
        await createCollection(db);
      }
    } catch(err) {
      throw err;
    }
  },
 
  async down(db) {
    try {
      await db.dropCollection('sites');
    } catch(err) {
      throw err
    }
  },
}