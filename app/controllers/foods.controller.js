import db from "../models/index.js";
const Foods = db.Foods;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Foods
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Foods
  const modelData = req.body;

  // Save Foods in the database
  Foods.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Foods."
      });
    });
};

// Retrieve all Foods from the database.
exports.findAll = (req, res) => {
  Foods.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Foods."
      });
    });
};

// Find a single Foods with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Foods.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Foods with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Foods with id=" + id
      });
    });
};

// Update a Foods by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Foods.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Foods was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Foods with id=${id}. Maybe Foods was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Foods with id=" + id
      });
    });
};

// Delete a Foods with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Foods.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Foods was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Foods with id=${id}. Maybe Foods was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Foods with id=" + id
      });
    });
};

// Delete all Foods from the database.
exports.deleteAll = (req, res) => {
  Foods.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Foods were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Foods."
      });
    });
};

// Find all published Foods
exports.findAllPublished = (req, res) => {

};

export default exports;