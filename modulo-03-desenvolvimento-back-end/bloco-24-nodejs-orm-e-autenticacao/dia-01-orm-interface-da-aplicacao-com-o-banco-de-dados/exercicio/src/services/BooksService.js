const { Book } = require('../database/models');

const getAll = () => Book.findAll({ 
  order: [['title', 'ASC']],
});

const getById = (id) => Book.findByPk(id);

const getByAuthor = async (author) => await Book.findAll({ 
  where: { author },
  order: [['title', 'ASC']],
});

const create = async ({ title, author, pageQuantity, publisher }) =>
  await Book.create({ title, author, pageQuantity, publisher });

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [updated] = await Book.update(
    { 
      title, 
      author, 
      pageQuantity,
      publisher, 
    }, 
    { where: { id } },
  );

  return updated;
};

const remove = async (id) => await Book.destroy({ where: { id } });

module.exports = { getAll, getById, getByAuthor, create, update, remove };
