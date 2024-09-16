/// <reference path="./crud.d.ts" />

import { RowElemnt, RowID } from './interface';
import * as CRUD from './crud';

const row: RowElemnt = {
    firstName: 'Guillaume',
    lastNAme: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElemnt = {
    age: 23
}

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
