export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './configs/tsconfig.app.json' }],
  },
  testEnvironment: 'jest-environment-jsdom',
};
