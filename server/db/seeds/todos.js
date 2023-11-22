export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { details: 'Pet cat', priority: 2, completed: false },
    { details: 'Pet dog', priority: 2, completed: true },
    { details: 'Play basketball', priority: 4, completed: false },
    { details: 'Riding', priority: 3, completed: false },
    { details: 'learning', priority: 1, completed: false },
  ])
}
