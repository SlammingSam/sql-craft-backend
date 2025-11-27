import db from "../models/index.js";
const GeneratedStructures = db.generatedStructures;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new GeneratedStructures
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a GeneratedStructures
  const modelData = req.body;

  // Save GeneratedStructures in the database
  GeneratedStructures.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the GeneratedStructures."
      });
    });
};

// Retrieve all GeneratedStructures from the database.
exports.findAll = (req, res) => {
  GeneratedStructures.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving generatedStructures."
      });
    });
};

// Find a single GeneratedStructures with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  GeneratedStructures.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find GeneratedStructures with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving GeneratedStructures with id=" + id
      });
    });
};

// Update a GeneratedStructures by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  GeneratedStructures.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "GeneratedStructures was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update GeneratedStructures with id=${id}. Maybe GeneratedStructures was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating GeneratedStructures with id=" + id
      });
    });
};

// Delete a GeneratedStructures with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  GeneratedStructures.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "GeneratedStructures was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete GeneratedStructures with id=${id}. Maybe GeneratedStructures was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete GeneratedStructures with id=" + id
      });
    });
};

// Delete all GeneratedStructures from the database.
exports.deleteAll = (req, res) => {
  GeneratedStructures.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} GeneratedStructures were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all generatedStructures."
      });
    });
};

// Find all published GeneratedStructures
exports.findAllPublished = (req, res) => {

};

export default exports;