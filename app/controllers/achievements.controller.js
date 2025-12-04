import db from "../models/index.js";
const Achievements = db.Achievements;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Achievements
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Achievements
  const modelData = req.body;

  // Save Achievements in the database
  Achievements.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Achievements."
      });
    });
};

// Retrieve all Achievements from the database.
exports.findAll = (req, res) => {
  Achievements.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving achievements."
      });
    });
};

// Find a single Achievements with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Achievements.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Achievements with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Achievements with id=" + id
      });
    });
};

// Update a Achievements by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Achievements.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Achievements was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Achievements with id=${id}. Maybe Achievements was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Achievements with id=" + id
      });
    });
};

// Delete a Achievements with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Achievements.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Achievements was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Achievements with id=${id}. Maybe Achievements was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Achievements with id=" + id
      });
    });
};

// Delete all Achievements from the database.
exports.deleteAll = (req, res) => {
  Achievements.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Achievements were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all achievements."
      });
    });
};

// Find all published Achievements
exports.findAllPublished = (req, res) => {

};

export default exports;