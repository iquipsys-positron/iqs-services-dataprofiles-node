import { DataProfileV1 } from '../data/version1/DataProfileV1';

export interface IDataProfilesController {
    getProfile(correlationId: string, profileId: string,
        callback: (err: any, profile: DataProfileV1) => void): void;

    setProfile(correlationId: string, profile: DataProfileV1,
        callback: (err: any, profile: DataProfileV1) => void): void;
}
