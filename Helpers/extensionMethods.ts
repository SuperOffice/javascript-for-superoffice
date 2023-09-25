
import * as tsclientWebapi from "@superoffice/tsclient.webapi";
import { ContactEntity, PersonEntity, SaleEntity } from "@superoffice/tsclient.webapi/dist/Carriers";


class ExtendedContactAgent extends tsclientWebapi.ContactAgent {
    createDefaultContactEntityAsync(): Promise<ContactEntity> {
        return this.CreateDefaultContactEntity();
    }
    getContactEntityAsync(id: number): Promise<ContactEntity> {
        return this.GetContactEntity(id);
    }
    saveContactEntityAsync(entity: ContactEntity): Promise<ContactEntity> {
        return this.SaveContactEntity(entity);
    }
    deleteContactEntityAsync(id: number): Promise<void> {
        return this.DeleteContactEntity(id);
    }
}


class ExtendedPersonAgent extends tsclientWebapi.PersonAgent {
    createDefaultPersonEntityAsync(): Promise<PersonEntity> {
        return this.CreateDefaultPersonEntity();
    }
    getPersonEntityAsync(id: number): Promise<PersonEntity> {
        return this.GetPersonEntity(id);
    }
    savePersonEntityAsync(entity: PersonEntity): Promise<PersonEntity> {
        return this.SavePersonEntity(entity);
    }
    deletePersonEntityAsync(id: number): Promise<void> {
        return this.DeletePersonEntity(id);
    }
}


class ExtendedSaleAgent extends tsclientWebapi.SaleAgent {
    createDefaultSaleEntityAsync(): Promise<SaleEntity> {
        return this.CreateDefaultSaleEntity();
    }
    getSaleEntityAsync(id: number): Promise<SaleEntity> {
        return this.GetSaleEntity(id);
    }
    saveSaleEntityAsync(entity: SaleEntity): Promise<SaleEntity> {
        return this.SaveSaleEntity(entity);
    }
    deleteSaleEntityAsync(id: number): Promise<void> {
        return this.DeleteSaleEntity(id);
    }
}


export const RTL = {
    ContactAgent: ExtendedContactAgent,
    PersonAgent: ExtendedPersonAgent,
    SaleAgent: ExtendedSaleAgent
};

