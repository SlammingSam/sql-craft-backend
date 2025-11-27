import db from "../models/index.js";
const EnchantmentRecipe = db.enchantmentRecipe;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new EnchantmentRecipe
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a EnchantmentRecipe
  const modelData = req.body;

  // Save EnchantmentRecipe in the database
  EnchantmentRecipe.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the EnchantmentRecipe."
      });
    });
};

// Retrieve all EnchantmentRecipe from the database.
exports.findAll = (req, res) => {
  EnchantmentRecipe.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving enchantmentRecipe."
      });
    });
};

// Find a single EnchantmentRecipe with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  EnchantmentRecipe.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find EnchantmentRecipe with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving EnchantmentRecipe with id=" + id
      });
    });
};

// Update a EnchantmentRecipe by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  EnchantmentRecipe.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "EnchantmentRecipe was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update EnchantmentRecipe with id=${id}. Maybe EnchantmentRecipe was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating EnchantmentRecipe with id=" + id
      });
    });
};

// Delete a EnchantmentRecipe with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  EnchantmentRecipe.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "EnchantmentRecipe was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete EnchantmentRecipe with id=${id}. Maybe EnchantmentRecipe was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete EnchantmentRecipe with id=" + id
      });
    });
};

// Delete all EnchantmentRecipe from the database.
exports.deleteAll = (req, res) => {
  EnchantmentRecipe.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} EnchantmentRecipe were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all enchantmentRecipe."
      });
    });
};

// Find all published EnchantmentRecipe
exports.findAllPublished = (req, res) => {

};

export default exports;