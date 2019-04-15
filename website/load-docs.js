const fs = require('fs-extra');
const path = require('path');

function copyDocs(src, dest) {
  try {
    fs.copySync(src, dest, {
        overwrite: true
    });
  } catch (err) {
    console.error('failed to copy latest docs %s from %s', src, err.stack);
    process.exit(1);
  }
}

(async () => {

  // Copying sidebar config
  const sourceSidebarConfig = path.resolve(__dirname,'node_modules/compositjs/docs/sidebars.json');
  const destinationSidebarConfig = path.resolve(__dirname, 'sidebars.json');
  await copyDocs(sourceSidebarConfig, destinationSidebarConfig);

  // Copying docs
  const sourceDocs = path.resolve(__dirname,'node_modules/compositjs/docs/site');
  const destinationDocs = path.resolve(__dirname, '../docs');
  await copyDocs(sourceDocs, destinationDocs);

})();

