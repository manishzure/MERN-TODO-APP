import todoModel from "../models/todoModel.js";

class todoController {
    static getAllTodos = async (req , res) => {

        try{
            const fetchAllTodos = await todoModel.find({});
            return res.status(200).json(fetchAllTodos);

        }
        catch(error){
            return res.status(400).json({message: error.message});
        }

    };

    static addNewTodo = async(req,res)=> {
        const { title, isCompleted } = req.body;
        try{
            
            if (title && isCompleted){
                const addTodo = new todoModel({
                    title,
                    isCompleted,
                });
                const savedTodo = await addTodo.save();
                return res.status(200).json({message: "todo created"});

            }
            else{
                return res.status(400).json({message:"all fields are required"});


            }

        }catch(error){
            return res.status(400).json({message: error.message});


        }
    };

    static getSingleData = async (req, res) =>{
        const { id } = req.params;
        try {
            if(id){
                const fetchSingleData = await todoModel.findById(id);
                return res.status(200).json(fetchSingleData);


            }
            else{
                return res.status(400).json({message: "id not found"});

            }

            
        } catch (error) {
            return res.status(400).json({message: error.message});

            
        }

    };

    static updateTodo = async (req, res) => {
        const {id} = req.params;
        try {
            if(id){
                await todoModel.findByIdAndUpdate(id, req.body);
                return res.status(200).json({message: "todo updated successfully"});


            }
            else{
                return res.status(400).json({message: "id not found"});


            }
            
        } catch (error) {
            return res.status(400).json({message: error.message});

            
        }
    };

    static deleteTodo = async (req, res) => {
        const {id} = req.params;
        try {
            if(id){
                await todoModel.findByIdAndDelete(id);
                return res.status(200).json({message: "todo deleted successfully"});


            }else{
                return res.status(400).json({message: "id not found"});

            }
            
        } catch (error) {
            return res.status(400).json({message: error.message});

        }
    }
}
export default todoController;