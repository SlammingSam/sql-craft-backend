import db from "../models/index.js";
const Recipies = db.recipies;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Recipies
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Recipies
  const modelData = req.body;

  // Save Recipies in the database
  Recipies.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Recipies."
      });
    });
};

// Retrieve all Recipies from the database.
exports.findAll = (req, res) => {
  Recipies.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recipies."
      });
    });
};

// Find a single Recipies with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Recipies.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Recipies with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Recipies with id=" + id
      });
    });
};

// Update a Recipies by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Recipies.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Recipies was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Recipies with id=${id}. Maybe Recipies was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Recipies with id=" + id
      });
    });
};

// Delete a Recipies with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Recipies.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Recipies was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Recipies with id=${id}. Maybe Recipies was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Recipies with id=" + id
      });
    });
};

// Delete all Recipies from the database.
exports.deleteAll = (req, res) => {
  Recipies.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Recipies were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all recipies."
      });
    });
};

// Find all published Recipies
exports.findAllPublished = (req, res) => {

};

export default exports;