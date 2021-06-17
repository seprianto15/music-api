const mapDBToModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  insertedAt,
  updatedAt,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  newInsertedAt: insertedAt,
  newUpdatedAt: updatedAt,

});

module.exports = { mapDBToModel };
