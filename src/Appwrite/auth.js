import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    authChangeCallbacks = []; // List to store auth change callbacks

    constructor() {
        console.log("Appwrite URL:", conf.appwriteUrl); // Log URL
        console.log("Appwrite Project ID:", conf.appwriteProjectId); // Log Project ID
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // Register a callback for auth changes
    onAuthChange(callback) {
        this.authChangeCallbacks.push(callback);
    }

    // Remove a callback
    offAuthChange(callback) {
        this.authChangeCallbacks = this.authChangeCallbacks.filter(cb => cb !== callback);
    }

    // Notify all registered callbacks about the auth change
    emitAuthChange(isAuthenticated) {
        this.authChangeCallbacks.forEach(callback => callback(isAuthenticated));
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                const session = await this.login({ email, password });
                this.emitAuthChange(true); // Notify listeners about login
                return session;
            }
            return userAccount;
        } catch (error) {
            console.error("Error creating account:", error);
            throw new Error("Unable to create account. Please try again later.");
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            this.emitAuthChange(true); // Notify listeners about login
            return session;
        } catch (error) {
            console.error("Login error:", error);
            throw new Error("Invalid credentials. Please check your email and password.");
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("Current user:", user);
            return user;
        } catch (error) {
            console.error("Error fetching current user:", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            this.emitAuthChange(false); // Notify listeners about logout
            console.log("Successfully logged out");
        } catch (error) {
            console.error("Logout error:", error);
            throw new Error("Unable to logout. Please try again.");
        }
    }

    async isLoggedIn() {
        try {
            const user = await this.getCurrentUser();
            return user !== null;
        } catch (error) {
            console.error("Error checking login status:", error);
            return false;
        }
    }
}

const authService = new AuthService();
export default authService;

