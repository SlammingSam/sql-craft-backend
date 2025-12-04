import db from "../models/index.js";
const Materials = db.Materials;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Materials
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Materials
  const modelData = req.body;

  // Save Materials in the database
  Materials.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Materials."
      });
    });
};

// Retrieve all Materials from the database.
exports.findAll = (req, res) => {
  Materials.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Materials."
      });
    });
};

// Find a single Materials with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Materials.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Materials with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Materials with id=" + id
      });
    });
};

// Update a Materials by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Materials.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Materials was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Materials with id=${id}. Maybe Materials was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Materials with id=" + id
      });
    });
};

// Delete a Materials with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Materials.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Materials was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Materials with id=${id}. Maybe Materials was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Materials with id=" + id
      });
    });
};

// Delete all Materials from the database.
exports.deleteAll = (req, res) => {
  Materials.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Materials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Materials."
      });
    });
};

// Find all published Materials
exports.findAllPublished = (req, res) => {

};

export default exports;