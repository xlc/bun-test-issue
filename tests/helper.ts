import { test, expect } from 'bun:test'

export const buildTest = (name: string) => {
    test(name, () => {
        expect(name).toMatchSnapshot()
    })
}