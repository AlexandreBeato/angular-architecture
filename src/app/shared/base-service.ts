import { APP_SETTINGS } from "../settings/appsettings";

export abstract class BaseService {
    protected readonly API_ENDPOINT: string;

    protected constructor() {
        this.API_ENDPOINT = APP_SETTINGS.API_ENDPOINTS.Default;
    }
}
