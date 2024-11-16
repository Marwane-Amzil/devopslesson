import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getTeaByName, saveTea, generateNewTeaId } from './saver.js'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import * as saver from "./saver";
import {addTea} from "./index";

vi.mock('node:fs')

const teaDataFilename = 'data.json'

describe('saver.js', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe('getTeaByName', () => {
        it('should return undefined if the tea does not exist', () => {
            existsSync.mockReturnValue(false)
            expect(getTeaByName('nonexistent')).toBeUndefined()
        })

        it('should return the tea if it exists', () => {
            existsSync.mockReturnValue(true)
            readFileSync.mockReturnValue(JSON.stringify([{ id: 1, name: 'Green Tea', description: 'Healthy tea' }]))
            const tea = getTeaByName('Green Tea')
            expect(tea).toEqual({ id: 1, name: 'Green Tea', description: 'Healthy tea' })
        })
    })

    describe('saveTea', () => {
        it('should save a new tea correctly', () => {
            existsSync.mockReturnValue(true)
            readFileSync.mockReturnValue(JSON.stringify([]))
            const newTea = { id: 2, name: 'Black Tea', description: 'Strong tea' }
            saveTea(newTea)
            expect(writeFileSync).toHaveBeenCalledWith(teaDataFilename, JSON.stringify([newTea], null, 2))
        })

        it('should throw an error if a tea with the same name exists', () => {
            const newTea = { id: 2, name: 'Green Tea', description: 'Another green tea' }
            existsSync.mockReturnValue(true)
            readFileSync.mockReturnValue(JSON.stringify([{ id: 1, name: 'Green Tea', description: 'Healthy tea' }]))

            expect(() => saveTea(newTea)).toThrow('Tea with name Green Tea already exists')
        })

        it('should throw an error if a tea with the same ID exists', () => {
            const newTea = { id: 1, name: 'Black Tea', description: 'Strong tea' }
            existsSync.mockReturnValue(true)
            readFileSync.mockReturnValue(JSON.stringify([{ id: 1, name: 'Green Tea', description: 'Healthy tea' }]))

            expect(() => saveTea(newTea)).toThrow('Tea with id 1 already exists')
        })

        it.todo('should overwrite an existing tea with the same ID', () => {
            const existingTea = { id: 1, name: 'Green Tea', description: 'Healthy tea' }
            const newTea = { id: 1, name: 'Black Tea', description: 'Strong tea' }
            existsSync.mockReturnValue(true)
            readFileSync.mockReturnValue(JSON.stringify([existingTea]))

            saveTea(newTea)
            expect(writeFileSync).toHaveBeenCalledWith(teaDataFilename, JSON.stringify([newTea], null, 2))
        });
    });

    describe('generateNewTeaId', () => {
        it('should return a unique ID', () => {
            const id = generateNewTeaId()
            expect(id).toBeGreaterThan(0)
        })
    })
})
