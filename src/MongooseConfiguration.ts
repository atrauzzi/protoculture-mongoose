import * as mongoose from "mongoose";


export interface MongooseConfiguration {

    uris: string;

    options: mongoose.ConnectionOptions;
}
