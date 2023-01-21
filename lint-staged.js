module.exports = {
  '*.{ts,tsx}': ['npm run format', 'npm run lint --max-warnings=0', () => 'tsc-files --noEmit']
};
