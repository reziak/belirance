import { Router } from "express";
import { CancelRecurringEntryController } from "./controllers/CancelRecurringEntry.controller";
import { UpdateRecurringEntryController } from "./controllers/UpdateRecurringEntry.controller";
import { CreateEntryController } from "./controllers/CreateEntry.controller";
import { ShowAllEntriesController } from "./controllers/ShowAllEntries.controller";

const entryRoutes = Router();

const createEntryController = new CreateEntryController();
const updateRecurringEntryController = new UpdateRecurringEntryController();
const cancelRecurringEntryController = new CancelRecurringEntryController();
const showAllEntriesController = new ShowAllEntriesController();

entryRoutes.post('/', createEntryController.handle);
entryRoutes.put('/:id/cancel', cancelRecurringEntryController.handle);
entryRoutes.put('/:id/edit', updateRecurringEntryController.handle);
entryRoutes.get('/', showAllEntriesController.handle);

export { entryRoutes }
