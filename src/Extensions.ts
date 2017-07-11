import { ServiceProvider } from "protoculture";
import { mongooseSymbols } from "./index";
import { MongooseConfiguration } from "./MongooseConfiguration";


declare module "protoculture/lib/ServiceProvider" {

    export interface ServiceProvider {

        configureMongoose(mongooseConfiguration: MongooseConfiguration): void;
    }
}

// tslint:disable-next-line:only-arrow-functions
ServiceProvider.prototype.configureMongoose = function (mongooseConfiguration: MongooseConfiguration) {

    this.bundle.container
        .bind(mongooseSymbols.Configuration)
        .toConstantValue(mongooseConfiguration);
};
