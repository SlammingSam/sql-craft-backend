import db from "../models/index.js";
const Particles = db.Particles;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Particles
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Particles
  const modelData = req.body;

  // Save Particles in the database
  Particles.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Particles."
      });
    });
};

// Retrieve all Particles from the database.
exports.findAll = (req, res) => {
  Particles.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Particles."
      });
    });
};

// Find a single Particles with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Particles.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Particles with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Particles with id=" + id
      });
    });
};

// Update a Particles by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Particles.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Particles was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Particles with id=${id}. Maybe Particles was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Particles with id=" + id
      });
    });
};

// Delete a Particles with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Particles.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Particles was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Particles with id=${id}. Maybe Particles was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Particles with id=" + id
      });
    });
};

// Delete all Particles from the database.
exports.deleteAll = (req, res) => {
  Particles.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Particles were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Particles."
      });
    });
};

// Find all published Particles
exports.findAllPublished = (req, res) => {

};

export default exports;