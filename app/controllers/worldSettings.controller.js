import db from "../models/index.js";
const WorldSettings = db.worldSettings;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new WorldSettings
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a WorldSettings
  const modelData = req.body;

  // Save WorldSettings in the database
  WorldSettings.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the WorldSettings."
      });
    });
};

// Retrieve all WorldSettings from the database.
exports.findAll = (req, res) => {
  WorldSettings.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving worldSettings."
      });
    });
};

// Find a single WorldSettings with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  WorldSettings.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find WorldSettings with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving WorldSettings with id=" + id
      });
    });
};

// Update a WorldSettings by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  WorldSettings.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "WorldSettings was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update WorldSettings with id=${id}. Maybe WorldSettings was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating WorldSettings with id=" + id
      });
    });
};

// Delete a WorldSettings with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  WorldSettings.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "WorldSettings was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete WorldSettings with id=${id}. Maybe WorldSettings was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete WorldSettings with id=" + id
      });
    });
};

// Delete all WorldSettings from the database.
exports.deleteAll = (req, res) => {
  WorldSettings.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} WorldSettings were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all worldSettings."
      });
    });
};

// Find all published WorldSettings
exports.findAllPublished = (req, res) => {

};

export default exports;