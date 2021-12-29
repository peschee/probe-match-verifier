import { ColorConverter } from 'cie-colorconverter';

import './app-component';

(async () => {
  const converter = new ColorConverter();

  const xyY = converter.XYZ_to_xyY([50.080456544802, 23.999465510573, -0.030842717841]);

  console.log('xyY', xyY);

  // // Open a file.
  // const blob = await fileOpen({
  //     mimeTypes: ['image/*'],
  // });
  //
  // // Open multiple files.
  // const blobs = await fileOpen({
  //     mimeTypes: ['image/*'],
  //     multiple: true,
  // });
  //
  // // Open files of different MIME types.
  // const blobs = await fileOpen([
  //     {
  //         description: 'Image files',
  //         mimeTypes: ['image/jpg', 'image/png', 'image/gif', 'image/webp'],
  //         extensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
  //         multiple: true,
  //     },
  //     {
  //         description: 'Text files',
  //         mimeTypes: ['text/*'],
  //         extensions: ['.txt'],
  //     },
  // ]);
  //
  // // Open all files in a directory,
  // // recursively including subdirectories.
  // const blobsInDirectory = await directoryOpen({
  //     recursive: true,
  // });
  //
  // // Save a file.
  // await fileSave(blob, {
  //     fileName: 'Untitled.png',
  //     extensions: ['.png'],
  // });
})();

const { hot } = module;
if (hot) {
  hot.accept(function () {
    window.location.reload();
  });
}
