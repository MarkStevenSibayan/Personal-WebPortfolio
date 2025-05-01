const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

const sizes = [16, 32, 48, 64, 128, 256]
const inputFile = path.join(__dirname, "public", "favicon.svg")
const outputDir = path.join(__dirname, "public")

async function generateFavicons() {
  for (const size of sizes) {
    await sharp(inputFile)
      .resize(size, size)
      .toFile(path.join(outputDir, `favicon-${size}x${size}.png`))
  }

  console.log("Favicons generated successfully!")
}

generateFavicons().catch(console.error)
