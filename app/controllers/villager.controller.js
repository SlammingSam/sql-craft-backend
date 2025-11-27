import db from "../models/index.js";
const Villager = db.villager;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Villager
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Villager
  const modelData = req.body;

  // Save Villager in the database
  Villager.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Villager."
      });
    });
};

// Retrieve all Villager from the database.
exports.findAll = (req, res) => {
  Villager.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving villager."
      });
    });
};

// Find a single Villager with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Villager.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Villager with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Villager with id=" + id
      });
    });
};

// Update a Villager by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Villager.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Villager was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Villager with id=${id}. Maybe Villager was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Villager with id=" + id
      });
    });
};

// Delete a Villager with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Villager.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Villager was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Villager with id=${id}. Maybe Villager was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Villager with id=" + id
      });
    });
};

// Delete all Villager from the database.
exports.deleteAll = (req, res) => {
  Villager.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Villager were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all villager."
      });
    });
};

// Find all published Villager
exports.findAllPublished = (req, res) => {

};

export default exports;