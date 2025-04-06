// import { User } from "@/lib/models/User";

// export const signup = async (req, res) => {
//     const {email, password, name} = req.body;
//     try {
//         if(!email || !password || !name){
//             throw new Error("All fields are required");
//         }

//         const userAlreadyExists =  await User.findOne({ email });
//         if(userAlreadyExists){
//             return res.status(400).json({ success: false, message: "User already exists" });

//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const verificationToken = generateVerificationCode();
//         const user = new User({
//             email, 
//             password: hashedPassword,
//             name,
//             verificationToken,
//             verficiationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
//         });

//         await user.save();

//         //jwt
//         generateTokenAndSetCookie(res, user._id);

//         res.status(201).json({ success: true , message : "User created successfully", user : {
//             ...user._doc,
//             password: null
//         }});

//     } catch (error) {
//         return res.status(400).json({ success: false, message : error.message });
//     }
// };