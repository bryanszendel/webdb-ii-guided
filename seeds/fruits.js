
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'Mango', delicious: true, avgWeightOz: 8.5 },
        { name: 'Papaya', delicious: true, avgWeightOz: 18.5 },
        { name: 'Pineapple', delicious: true, avgWeightOz: 22 }
      ]);
    });
};
