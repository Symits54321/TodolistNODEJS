
// Schema import
const todoList = require('../models/todolist');


// Downloading from db and adding to home.ejs
module.exports.home = async function (req, res) {
    try {
        const todoListItems = await todoList.find({});
        return res.render('home', {
            title: "I am flying",
            todo_list: todoListItems
        });
    } catch (err) {
        console.error('Error in fetching:', err);
        return res.status(500).send('Internal Server Error');
    }
};

const date = require('date-and-time')
// Creating 
module.exports.addTask = async function (req, res) {
    try {
        const formattedDate = date.format(new Date(req.body.date), 'DD/MM/YYYY');
        const createdItem = await todoList.create({
            
            desc:req.body.desc,
            category:req.body.category,
            date:formattedDate

        });
        return res.redirect('back');
    } catch (err) {
        console.error('Error in creating list:', err);
        return res.status(500).send('Internal Server Error/ input field remained vacant');
    }
};





// Deleting
module.exports.deleteTask = async function (req, res) {


    try {
        console.log(req.body);
        let deletingItems=req.body.list;
        const deleteinputs = { _id: { $in: deletingItems } };
        const deleteResult = await todoList.deleteMany(deleteinputs);

        if (deleteResult.deletedCount > 0) {
            console.log("Delete successful");
            return res.redirect('back');
        } else {
            console.log("Delete not successful");
            return res.redirect('back');
        } 
    } catch (err) {
        console.error('Error in deleting list:', err);
        return res.status(500).send('Internal Server Error');
    }
};