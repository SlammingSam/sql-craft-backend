import db from "../models/index.js";
const Effects = db.Effects;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Effects
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Effects
  const modelData = req.body;

  // Save Effects in the database
  Effects.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Effects."
      });
    });
};

// Retrieve all Effects from the database.
exports.findAll = (req, res) => {
  Effects.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving effects."
      });
    });
};

// Find a single Effects with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Effects.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Effects with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Effects with id=" + id
      });
    });
};

// Update a Effects by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Effects.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Effects was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Effects with id=${id}. Maybe Effects was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Effects with id=" + id
      });
    });
};

// Delete a Effects with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Effects.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Effects was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Effects with id=${id}. Maybe Effects was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Effects with id=" + id
      });
    });
};

// Delete all Effects from the database.
exports.deleteAll = (req, res) => {
  Effects.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Effects were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all effects."
      });
    });
};

// Find all published Effects
exports.findAllPublished = (req, res) => {

};

export default exports;