export const registerUser = async (req, res) => {

    res.status(200).json({
        success:true,
        message:"Register API Working"
    });

};

export const loginUser = async (req, res) => {

    res.status(200).json({
        success:true,
        message:"Login API Working"
    });

};