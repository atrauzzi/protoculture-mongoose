import * as _ from "lodash";
import { ServiceProvider } from "protoculture";
import { mongooseSymbols } from "./index";
import * as mongoose from "mongoose";
import { MongooseConfiguration } from "./MongooseConfiguration";


(mongoose as any).Promise = Promise;

export class MongooseServiceProvider extends ServiceProvider {

    public async boot() {

        const configuration = this.bundle.container.get<MongooseConfiguration>(mongooseSymbols.Configuration);

        _.set(configuration, "options.useMongoClient", true);

        const service = await mongoose.connect(configuration.uris, configuration.options);

        this.bundle.container
            .bind(mongooseSymbols.Service)
            .toConstantValue(service);
    }
}
