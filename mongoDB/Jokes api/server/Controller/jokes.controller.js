const Joke = require("../Model/jokes.model");

const createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newjoke) => {
      res.status(201).json(newjoke);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
const getAllJokes = async (req, res) => {
  try {
    const allJokes = await Joke.find();
    await res.status(201).json(allJokes);
    // return result;
  } catch (err) {
    const result = res.json(err);
    // return result;
  }

  // .then((allJokes) => {
  //   res.status(201).json(allJokes);
  // })
  // .catch((err) => {
  //   res.json({ message: "something went wrong", error: err });
  // });
};

const getJokesbyID = (req, res) => {
  Joke.findById(req.params.id)
    .then((joke) => {
      res.status(201).json(joke);
    })
    .catch((err) => {
      res.json({ message: "something went wrong", error: err });
    });
};

const updateJokebyId = (req, res) => {
  Joke.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedJoke) => {
      res.json(updatedJoke);
    })
    .catch((err) => {
      res.json(err);
    });
};
const deleteAllJoke = (request, response) => {
  Joke.deleteMany({})
    .then((jokes) => {
      response.json(jokes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const deleteJoke = (request, response) => {
  Joke.findByIdAndDelete(request.params.id)
    .then((jokes) => {
      response.json(jokes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  getAllJokes,
  createJoke,
  deleteAllJoke,
  deleteJoke,
  getJokesbyID,
  updateJokebyId,
};
