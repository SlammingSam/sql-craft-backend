import db from "../models/index.js";
const Dimensions = db.Dimensions;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Dimensions
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Dimensions
  const modelData = req.body;

  // Save Dimensions in the database
  Dimensions.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dimensions."
      });
    });
};

// Retrieve all Dimensions from the database.
exports.findAll = (req, res) => {
  Dimensions.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dimensions."
      });
    });
};

// Find a single Dimensions with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Dimensions.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Dimensions with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Dimensions with id=" + id
      });
    });
};

// Update a Dimensions by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Dimensions.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dimensions was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Dimensions with id=${id}. Maybe Dimensions was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Dimensions with id=" + id
      });
    });
};

// Delete a Dimensions with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Dimensions.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dimensions was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Dimensions with id=${id}. Maybe Dimensions was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Dimensions with id=" + id
      });
    });
};

// Delete all Dimensions from the database.
exports.deleteAll = (req, res) => {
  Dimensions.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Dimentions were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all dimentions."
      });
    });
};

// Find all published Dimentions
exports.findAllPublished = (req, res) => {

};

export default exports;