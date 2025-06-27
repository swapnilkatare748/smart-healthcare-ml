import axios from "axios";

const API_BASE_URL = "http://localhost:8000/apis/contacts";

// Create a new contact message
export const createContact = async (contactData) => {
  try {
    const response = await axios.post(API_BASE_URL, contactData);
    return response.data;
  } catch (error) {
    console.error("Error creating contact message:", error);
    throw error;
  }
};

// Get all contact messages
export const getContacts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    throw error;
  }
};

// Get a contact message by ID
export const getContactById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact message:", error);
    throw error;
  }
};

// Delete a contact message
export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting contact message:", error);
    throw error;
  }
};
