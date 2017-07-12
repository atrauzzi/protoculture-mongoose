import * as mongoose from "mongoose";


export interface MongooseOptions extends mongoose.ConnectionOptions {

    useMongoClient: true;
}

export interface MongooseConfiguration {

    uris: string;

    options?: MongooseOptions;
}
