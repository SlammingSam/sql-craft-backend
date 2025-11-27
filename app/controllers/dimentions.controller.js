import db from "../models/index.js";
const Dimentions = db.dimentions;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Dimentions
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Dimentions
  const modelData = req.body;

  // Save Dimentions in the database
  Dimentions.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dimentions."
      });
    });
};

// Retrieve all Dimentions from the database.
exports.findAll = (req, res) => {
  Dimentions.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dimentions."
      });
    });
};

// Find a single Dimentions with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Dimentions.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Dimentions with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Dimentions with id=" + id
      });
    });
};

// Update a Dimentions by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Dimentions.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dimentions was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Dimentions with id=${id}. Maybe Dimentions was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Dimentions with id=" + id
      });
    });
};

// Delete a Dimentions with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Dimentions.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dimentions was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Dimentions with id=${id}. Maybe Dimentions was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Dimentions with id=" + id
      });
    });
};

// Delete all Dimentions from the database.
exports.deleteAll = (req, res) => {
  Dimentions.destroy({
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