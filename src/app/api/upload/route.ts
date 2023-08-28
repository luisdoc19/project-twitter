import { NextRequest, NextResponse } from "next/server";
import { BlobServiceClient } from "@azure/storage-blob";

export async function POST(req: NextRequest, res: NextResponse) {
  const { base64data } = await req.json();

  const data = base64data.split(",")[1];

  const conn = process.env.CONNECTION_STRING;
  const containerName = process.env.CONTAINER_NAME;
  const storageToken = process.env.STORAGE_ACCOUNT;

  const blobServiceClient = BlobServiceClient.fromConnectionString(conn || "");

  const containerClient = blobServiceClient.getContainerClient(
    containerName || ""
  );
  const filename = `${Date.now()}.png`;
  const imageBuffer = Buffer.from(data, "base64");
  const blockBlobClient = containerClient.getBlockBlobClient(filename);
  await blockBlobClient.uploadData(imageBuffer, {
    blobHTTPHeaders: { blobContentType: "image/png" },
  });

  return NextResponse.json({
    link: `https://${storageToken}.blob.core.windows.net/${containerName}/${filename}`,
  });
}
