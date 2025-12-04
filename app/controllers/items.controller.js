import db from "../models/index.js";
const Items = db.Items;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Items
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Items
  const modelData = req.body;

  // Save Items in the database
  Items.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Items."
      });
    });
};

// Retrieve all Items from the database.
exports.findAll = (req, res) => {
  Items.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items."
      });
    });
};

// Find a single Items with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Items.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Items with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Items with id=" + id
      });
    });
};

// Update a Items by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Items.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Items was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Items with id=${id}. Maybe Items was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Items with id=" + id
      });
    });
};

// Delete a Items with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Items.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Items was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Items with id=${id}. Maybe Items was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Items with id=" + id
      });
    });
};

// Delete all Items from the database.
exports.deleteAll = (req, res) => {
  Items.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Items were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all items."
      });
    });
};

// Find all published Items
exports.findAllPublished = (req, res) => {

};

export default exports;