import db from "../models/index.js";
const Enchantments = db.enchantments;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Enchantments
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Enchantments
  const modelData = req.body;

  // Save Enchantments in the database
  Enchantments.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Enchantments."
      });
    });
};

// Retrieve all Enchantments from the database.
exports.findAll = (req, res) => {
  Enchantments.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving enchantments."
      });
    });
};

// Find a single Enchantments with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Enchantments.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Enchantments with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Enchantments with id=" + id
      });
    });
};

// Update a Enchantments by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Enchantments.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Enchantments was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Enchantments with id=${id}. Maybe Enchantments was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Enchantments with id=" + id
      });
    });
};

// Delete a Enchantments with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Enchantments.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Enchantments was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Enchantments with id=${id}. Maybe Enchantments was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Enchantments with id=" + id
      });
    });
};

// Delete all Enchantments from the database.
exports.deleteAll = (req, res) => {
  Enchantments.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Enchantments were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all enchantments."
      });
    });
};

// Find all published Enchantments
exports.findAllPublished = (req, res) => {

};

export default exports;