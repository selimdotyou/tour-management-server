
import mongoose from 'mongoose';
import {Server} from 'http';
import app from './app.js';
import config from './app/config/index.js';

let server: Server;

// start the server
const startServer = async () => {
    try {
        await mongoose.connect(config.MONGO_URL as string);
        console.log('Connected to MongoDB');
        server = app.listen(config.PORT, () => {
            console.log(`Server is running on port ${config.PORT}`);
        });
    } catch (error) {
      console.error('Error starting the server:', error);  
    }
}

startServer();

// unHandle rejection error
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection... server is shutting down...', promise, 'reason: ', reason);
    if(server) {
        server.close(() => {
            process.exit(1);
        })
    }
    process.exit(1);
})

// unCaught exception error
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception... server is shutting down...', error);
        if(server) {
        server.close(() => {
            process.exit(1);
        }
        )
    }
})

// SIGINT signal
process.on('SIGINT', () => {
    console.log('SIGINT signal received. Shutting down gracefully...');
    if(server) {
        server.close(() => {
            console.log('Server closed. Exiting process.');
            process.exit(0);
        });
    } else {
        process.exit(0);
    }
})