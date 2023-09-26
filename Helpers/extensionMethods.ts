
import * as tsclientWebapi from "@superoffice/tsclient.webapi";
import { ContactEntity, PersonEntity, SaleEntity, ProjectEntity, TicketEntity } from "@superoffice/tsclient.webapi/dist/Carriers";


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


class ExtendedProjectAgent extends tsclientWebapi.ProjectAgent {
    createDefaultProjectEntityAsync(): Promise<ProjectEntity> {
        return this.CreateDefaultProjectEntity();
    }
    getProjectEntityAsync(id: number): Promise<ProjectEntity> {
        return this.GetProjectEntity(id);
    }
    saveProjectEntityAsync(entity: ProjectEntity): Promise<ProjectEntity> {
        return this.SaveProjectEntity(entity);
    }
    deleteProjectEntityAsync(id: number): Promise<void> {
        return this.DeleteProjectEntity(id);
    }
}


class ExtendedTicketAgent extends tsclientWebapi.TicketAgent {
    createDefaultTicketEntityAsync(): Promise<TicketEntity> {
        return this.CreateDefaultTicketEntity();
    }
    getTicketEntityAsync(id: number): Promise<TicketEntity> {
        return this.GetTicketEntity(id);
    }
    saveTicketEntityAsync(entity: TicketEntity): Promise<TicketEntity> {
        return this.SaveTicketEntity(entity);
    }
    deleteTicketEntityAsync(id: number): Promise<void> {
        return this.DeleteTicketEntity(id);
    }
}


export const RTL = {
    ContactAgent: ExtendedContactAgent,
    PersonAgent: ExtendedPersonAgent,
    SaleAgent: ExtendedSaleAgent,
    ProjectAgent: ExtendedProjectAgent,
    TicketAgent: ExtendedTicketAgent
};

