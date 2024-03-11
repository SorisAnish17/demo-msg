
import mongoose from "mongoose";

const AdminChatSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const AdminChatModel = mongoose.model("AdminChat", AdminChatSchema);

export default AdminChatModel