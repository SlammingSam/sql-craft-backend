import db from "../models/index.js";
const BlockLoot = db.BlockLoot;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new BlockLoot
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a BlockLoot
  const modelData = req.body;

  // Save BlockLoot in the database
  BlockLoot.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the BlockLoot."
      });
    });
};

// Retrieve all BlockLoot from the database.
exports.findAll = (req, res) => {
  BlockLoot.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving BlockLoot."
      });
    });
};

// Find a single BlockLoot with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  BlockLoot.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find BlockLoot with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving BlockLoot with id=" + id
      });
    });
};

// Update a BlockLoot by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  BlockLoot.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "BlockLoot was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update BlockLoot with id=${id}. Maybe BlockLoot was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating BlockLoot with id=" + id
      });
    });
};

// Delete a BlockLoot with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  BlockLoot.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "BlockLoot was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete BlockLoot with id=${id}. Maybe BlockLoot was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete BlockLoot with id=" + id
      });
    });
};

// Delete all BlockLoot from the database.
exports.deleteAll = (req, res) => {
  BlockLoot.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} BlockLoot were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all BlockLoot."
      });
    });
};

// Find all published BlockLoot
exports.findAllPublished = (req, res) => {

};

export default exports;