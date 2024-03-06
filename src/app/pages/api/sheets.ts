"use client";
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { Sheets } from '../../shared/types/sheets';
import jwt from './jwt';

// Config variables
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || '';
const RSVP_SHEET_ID = parseInt(process.env.RSVP_SHEET_ID || '');
const WISHES_SHEET_ID = parseInt(process.env.WISHES_SHEET_ID || '');

const doc = new GoogleSpreadsheet(SPREADSHEET_ID, jwt);

//@ts-ignore
export const appendSpreadsheet = async (row, sheetName: Sheets) => {
    try {
        await doc.loadInfo();
        let sheet;
        if (sheetName === 'RSVP') {
            sheet = doc.sheetsById[RSVP_SHEET_ID];
        } else {
            sheet = doc.sheetsById[WISHES_SHEET_ID];
        }
        const result = await sheet.addRow(row);
        return result;
    } catch (e) {
        console.error('Error: ', e);
    }
};

export const getWishes = async() => {
    try {
        await doc.loadInfo();
        const sheet = doc.sheetsById[WISHES_SHEET_ID];
        
        const rows = await sheet.getRows({ limit: 10 });
        return rows;
    } catch (e) {
        console.error('Error: ', e);
    }
}
