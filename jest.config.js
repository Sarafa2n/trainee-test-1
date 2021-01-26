module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src', 'libs'],
  transform: {
    '\\.js$': 'babel-jest'
  }
};
