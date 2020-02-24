let arr = [];
for (let i = 0; i < 50; i++) {
  arr.push({
    id: i+1,
    email: `user${Math.floor(Math.random() * 100)}@gmail.com`,
    name: `user${Math.floor(Math.random() * 100)}`,
    donation: Math.floor(Math.random() * 200),
    message: `Message ${Math.floor(Math.random() * 100)}`
  });
}
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fundraising').del()
    .then(function () {
      return knex('fundraising').insert([
       ...arr
      ]);
    });
};
