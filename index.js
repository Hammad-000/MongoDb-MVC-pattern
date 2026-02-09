import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json()); 
app.use( userRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/school")
  .then(() => console.log("DB connected!"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("server running !");
});

app.use("/users", userRoutes);

app.listen(2000, () => console.log("Server running on 2000"));



// const app = express();

// mongoose.connect("mongodb://127.0.0.1:27017/school")
//   .then(() => console.log("DB connected!"))
//   .catch(err => console.log(err));

// const User = mongoose.model(
//   "User",
//   new mongoose.Schema({
//     name: String,
//     age: Number,
//     gender: String,
//   })
// );

// app.get("/", (req, res) => {
//   res.send("Hi");
// });

// // app.get("/create", async (req, res) => {
// //   try {
// //     const users = await User.insertMany([
// //       { name: "Esha", age: 18, gender: "Female" },
// //       { name: "Haris", age: 20, gender: "Male" },
// //       { name: "Anus", age: 25, gender: "Male" },
// //     ]);
// //     res.send(users);
// //   } catch (err) {
// //     res.status(500).send(err.message);
// //   }
// // }); 
// // app.get("/remove", async (req, res) => {
// //   try {
// //     const result = await User.deleteMany({ name: "Esha" });
// //     res.send(result);
// //   } catch (err) {
// //     res.status(500).send(err.message);
// //   }
// // });

// app.get("/remove", async (req, res) => {
//   try {
//     const result = await User.deleteMany({ name: "Esha" });
//     res.send({
//       message: "All Esha records deleted",
//       deletedCount: result.deletedCount
//     });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });



// app.get("/read", async (req, res) => {
//   res.send(await User.find());
// });

// app.listen(2000, () => {
//   console.log("Server running on 2000");
// });


