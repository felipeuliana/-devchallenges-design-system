module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.ts(x)?',
    '!src/components/**/stories.tsx'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['./src/'],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/']
}
