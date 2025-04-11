"use client";

interface PdfViewerProps {
  file: string;
}

export default function PdfViewer({ file }: PdfViewerProps) {
  // Verifica se é uma URL do Google Drive e transforma em URL de visualização
  const transformDriveUrl = (url: string) => {
    if (url.includes("drive.google.com")) {
      const fileId = url.match(/\/file\/d\/([^\/]+)/)?.[1];
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return url;
  };

  return (
    <div className="w-full h-full">
      {file === "none" ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-bold text-2xl">
            We can't deliver this book yet.
          </h1>
          <h1 className="font-bold text-md text-zinc-400">Want to help out?</h1>
        </div>
      ) : (
        <iframe
          src={transformDriveUrl(file)}
          className="w-full h-full border-none rounded-xl"
          title="PDF Viewer"
          allow="fullscreen"
        />
      )}
    </div>
  );
}
