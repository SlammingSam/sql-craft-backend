import db from "../models/index.js";
const Redstone = db.redstone;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Redstone
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Redstone
  const modelData = req.body;

  // Save Redstone in the database
  Redstone.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Redstone."
      });
    });
};

// Retrieve all Redstone from the database.
exports.findAll = (req, res) => {
  Redstone.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving redstone."
      });
    });
};

// Find a single Redstone with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Redstone.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Redstone with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Redstone with id=" + id
      });
    });
};

// Update a Redstone by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Redstone.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Redstone was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Redstone with id=${id}. Maybe Redstone was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Redstone with id=" + id
      });
    });
};

// Delete a Redstone with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Redstone.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Redstone was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Redstone with id=${id}. Maybe Redstone was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Redstone with id=" + id
      });
    });
};

// Delete all Redstone from the database.
exports.deleteAll = (req, res) => {
  Redstone.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Redstone were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all redstone."
      });
    });
};

// Find all published Redstone
exports.findAllPublished = (req, res) => {

};

export default exports;