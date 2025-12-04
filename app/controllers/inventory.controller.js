import db from "../models/index.js";
const Inventory = db.Inventory;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Inventory
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Inventory
  const modelData = req.body;

  // Save Inventory in the database
  Inventory.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Inventory."
      });
    });
};

// Retrieve all Inventory from the database.
exports.findAll = (req, res) => {
  Inventory.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving inventory."
      });
    });
};

// Find a single Inventory with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Inventory.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Inventory with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Inventory with id=" + id
      });
    });
};

// Update a Inventory by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Inventory.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Inventory was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Inventory with id=${id}. Maybe Inventory was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Inventory with id=" + id
      });
    });
};

// Delete a Inventory with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Inventory.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Inventory was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Inventory with id=${id}. Maybe Inventory was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Inventory with id=" + id
      });
    });
};

// Delete all Inventory from the database.
exports.deleteAll = (req, res) => {
  Inventory.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Inventory were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all inventory."
      });
    });
};

// Find all published Inventory
exports.findAllPublished = (req, res) => {

};

export default exports;