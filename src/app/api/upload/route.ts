import { NextRequest, NextResponse } from "next/server";
import { BlobServiceClient } from "@azure/storage-blob";

export async function POST(req: NextRequest, res: NextResponse) {
  const { base64data } = await req.json();

  const data = base64data.split(",")[1];

  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.CONNECTION_STRING || ""
  );
  const containerClient = blobServiceClient.getContainerClient(
    process.env.CONTAINER_NAME || ""
  );
  const filename = `${Date.now()}.png`;
  const imageBuffer = Buffer.from(data, "base64");
  const blockBlobClient = containerClient.getBlockBlobClient(filename);
  const response = await blockBlobClient.uploadData(imageBuffer, {
    blobHTTPHeaders: { blobContentType: "image/png" },
  });

  return NextResponse.json({
    link: `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net/${process.env.CONTAINER_NAME}/${filename}`,
  });
}
