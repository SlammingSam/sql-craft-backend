import db from "../models/index.js";
const Worlds = db.Worlds;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Worlds
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Worlds
  const modelData = req.body;

  // Save Worlds in the database
  Worlds.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Worlds."
      });
    });
};

// Retrieve all Worlds from the database.
exports.findAll = (req, res) => {
  Worlds.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving worlds."
      });
    });
};

// Find a single Worlds with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Worlds.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Worlds with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Worlds with id=" + id
      });
    });
};

// Update a Worlds by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Worlds.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Worlds was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Worlds with id=${id}. Maybe Worlds was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Worlds with id=" + id
      });
    });
};

// Delete a Worlds with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Worlds.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Worlds was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Worlds with id=${id}. Maybe Worlds was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Worlds with id=" + id
      });
    });
};

// Delete all Worlds from the database.
exports.deleteAll = (req, res) => {
  Worlds.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Worlds were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all worlds."
      });
    });
};

// Find all published Worlds
exports.findAllPublished = (req, res) => {

};

export default exports;