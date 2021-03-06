const BookSchema = require('../models/models');

//Get all books
exports.getBooks = async (req, res, next) => {
  try {
    const book = await BookSchema.find();

    return res.status(200).json({
      succes : true,
      count : book.length,
      data : book
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({error :'Server Error!'})
  };
};

//add a book
exports.addBook = async (req, res, next) => {
  try {
    const book = await BookSchema.create(req.body);

    return res.status(200).json({
      succes : true,
      count : book.length,
      data : book
    });

  } catch (error) {
    console.error(error);
    if(error.code === 11000){
      return res.status(400).json({error : ' Book ID already exists!'})
    }

    return res.status(500).json({error : 'Server error!'});
  };
};

//update Book

exports.updateBook = async (req, res, next) => {
  try {
    const book = await BookSchema.findByIdAndUpdate({_id: req.params.id}, req.body);
    const updatedbook = await BookSchema.findOne({_id: req.params.id});
    return res.status(200).json({
      succes : true,
      count : updatedbook.length,
      data : updatedbook
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({error : 'Server Error!'});
  };
};

//Delete a book
exports.deleteBook = async (req, res, next) => {
  try {
    const book = BookSchema.findByIdAndRemove({_id: req.params.id}, req.body);

    return res.status(200).json({
      succes : true,
      count : book.length,
      data : book
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({error: 'Server Error!'})

  };
};
