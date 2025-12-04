import db from "../models/index.js";
const Entity = db.Entity;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Entity
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Entity
  const modelData = req.body;

  // Save Entity in the database
  Entity.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Entity."
      });
    });
};

// Retrieve all Entity from the database.
exports.findAll = (req, res) => {
  Entity.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving entity."
      });
    });
};

// Find a single Entity with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Entity.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Entity with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Entity with id=" + id
      });
    });
};

// Update a Entity by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Entity.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Entity was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Entity with id=${id}. Maybe Entity was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Entity with id=" + id
      });
    });
};

// Delete a Entity with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Entity.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Entity was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Entity with id=${id}. Maybe Entity was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Entity with id=" + id
      });
    });
};

// Delete all Entity from the database.
exports.deleteAll = (req, res) => {
  Entity.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Entity were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all entity."
      });
    });
};

// Find all published Entity
exports.findAllPublished = (req, res) => {

};

export default exports;