import db from "../models/index.js";
const Chunk = db.chunk;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Chunk
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Chunk
  const modelData = req.body;

  // Save Chunk in the database
  Chunk.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Chunk."
      });
    });
};

// Retrieve all Chunk from the database.
exports.findAll = (req, res) => {
  Chunk.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving chunk."
      });
    });
};

// Find a single Chunk with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Chunk.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Chunk with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Chunk with id=" + id
      });
    });
};

// Update a Chunk by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Chunk.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Chunk was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Chunk with id=${id}. Maybe Chunk was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Chunk with id=" + id
      });
    });
};

// Delete a Chunk with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Chunk.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Chunk was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Chunk with id=${id}. Maybe Chunk was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Chunk with id=" + id
      });
    });
};

// Delete all Chunk from the database.
exports.deleteAll = (req, res) => {
  Chunk.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Chunk were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all chunk."
      });
    });
};

// Find all published Chunk
exports.findAllPublished = (req, res) => {

};

export default exports;