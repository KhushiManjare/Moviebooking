import { Inngest } from "inngest";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "quickshow" });

// Create User
const syncUserCreation = inngest.createFunction(
  { id: "quickshow-sync-user-created" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    await User.create({
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      image: image_url
    });
  }
);

// Delete User
const syncUserDeletion = inngest.createFunction(
  { id: "quickshow-sync-user-deleted" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await User.findByIdAndDelete(id);
  }
);

// Update User
const syncUserUpdate = inngest.createFunction(
  { id: "quickshow-sync-user-updated" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    await User.findByIdAndUpdate(id, {
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      image: image_url
    });
  }
);

export const functions = [
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdate
];
