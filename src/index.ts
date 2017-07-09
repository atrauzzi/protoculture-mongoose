import "./Extensions";

export { MongooseServiceProvider } from "./MongooseServiceProvider";

export const mongooseSymbols = {
    Configuration: Symbol("MongooseConfiguration"),
    Service: Symbol("MongooseService"),
};
