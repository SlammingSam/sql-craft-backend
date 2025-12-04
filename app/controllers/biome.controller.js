import db from "../models/index.js";
const Biome = db.Biome;
const Op = db.Sequelize.Op;
const exports = {};

// Create and Save a new Biome
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Biome
  const modelData = req.body;

  // Save Biome in the database
  Biome.create(modelData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Biome."
      });
    });
};

// Retrieve all Biome from the database.
exports.findAll = (req, res) => {
  Biome.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving biome."
      });
    });
};

// Find a single Biome with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Biome.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Biome with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Biome with id=" + id
      });
    });
};

// Update a Biome by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Biome.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Biome was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Biome with id=${id}. Maybe Biome was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Biome with id=" + id
      });
    });
};

// Delete a Biome with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Biome.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Biome was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Biome with id=${id}. Maybe Biome was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Biome with id=" + id
      });
    });
};

// Delete all Biome from the database.
exports.deleteAll = (req, res) => {
  Biome.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Biome were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all biome."
      });
    });
};

// Find all published Biome
exports.findAllPublished = (req, res) => {

};

export default exports;