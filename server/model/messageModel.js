import mongoose from "mongoose";

const AdminMessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AdminMessageModel = mongoose.model("AdminMessage", AdminMessageSchema);

export default AdminMessageModel;
