import db from "../models/index.js";
const Mobs = db.mobs;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Mobs
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Mobs
  const modelData = req.body;

  // Save Mobs in the database
  Mobs.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mobs."
      });
    });
};

// Retrieve all Mobs from the database.
exports.findAll = (req, res) => {
  Mobs.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving mobs."
      });
    });
};

// Find a single Mobs with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Mobs.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Mobs with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Mobs with id=" + id
      });
    });
};

// Update a Mobs by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Mobs.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Mobs was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Mobs with id=${id}. Maybe Mobs was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Mobs with id=" + id
      });
    });
};

// Delete a Mobs with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Mobs.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Mobs was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Mobs with id=${id}. Maybe Mobs was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Mobs with id=" + id
      });
    });
};

// Delete all Mobs from the database.
exports.deleteAll = (req, res) => {
  Mobs.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Mobs were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all mobs."
      });
    });
};

// Find all published Mobs
exports.findAllPublished = (req, res) => {

};

export default exports;