const Winery = require("../models/Winery");

exports.createWinery = async (req, res) => {
  try {
    let winery;

    winery = new Winery(req.body);

    await winery.save();
    res.send(winery);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un problema");
  }
};

exports.getWineries = async (req, res) => {
  try {
    const winery = await Winery.find();
    res.json(winery);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un problema");
  }
};

exports.updateWinery = async (req, res) => {
  try {
    const { name, zone } = req.body;
    let winery = await Winery.findById(req.params.id);
    if (!winery) {
      res.status(404).json({ msg: "Bodega inexistente" });
    }

    winery.name = name;
    winery.zone = zone;
    winery = await Winery.findOneAndUpdate({ _id: req.params.id }, winery, {
      new: true,
    });

    res.json(winery);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un problema");
  }
};

exports.getWinery = async (req, res) => {
  try {
    let winery = await Winery.findById(req.params.id);
    if (!winery) {
      res.status(404).json({ msg: "Bodega inexistente" });
    }

    res.json(winery);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un problema");
  }
};

exports.deleteWinery = async (req, res) => {
  try {
    let winery = await Winery.findById(req.params.id);
    if (!winery) {
      res.status(404).json({ msg: "Bodega inexistente" });
    }
    await Winery.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Bodega eliminada correctamente!!!" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un problema");
  }
};
