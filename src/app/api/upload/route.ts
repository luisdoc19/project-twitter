import { NextRequest, NextResponse } from "next/server";
import { BlobServiceClient } from "@azure/storage-blob";

export async function POST(req: NextRequest, res: NextResponse) {
  const { base64data } = await req.json();

  const data = base64data.split(",")[1];

  const storageAccount = "subirarchivos";
  const containerName = "imagenes";
  const connectionString = `DefaultEndpointsProtocol=https;AccountName=subirarchivos;AccountKey=GNhIUcvWHRG8qz0oTggDovpbfhBpQ14kffgfmIjSsvldZRD5QUroxrcuFhUg7ICxRJyc8n5whd/o+AStvipKkA==;EndpointSuffix=core.windows.net`;

  const blobServiceClient =
    BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const filename = `${Date.now()}.png`;
  const imageBuffer = Buffer.from(data, "base64");
  const blockBlobClient = containerClient.getBlockBlobClient(filename);
  const response = await blockBlobClient.uploadData(imageBuffer, {
    blobHTTPHeaders: { blobContentType: "image/png" },
  });

  return NextResponse.json({
    link: `https://${storageAccount}.blob.core.windows.net/${containerName}/${filename}`,
  });
}
