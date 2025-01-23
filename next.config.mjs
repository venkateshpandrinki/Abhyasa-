/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      loader: "custom",
      imageSizes: [],
      deviceSizes: [360, 480, 768, 992, 1200, 1920],
    },
    transpilePackages: ["next-image-export-optimizer"],
    env: {
      nextImageExportOptimizer_imageFolderPath: "public/images",
      nextImageExportOptimizer_exportFolderPath: "out",
      nextImageExportOptimizer_quality: "75",
      nextImageExportOptimizer_storePicturesInWEBP: "true",
      nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
      nextImageExportOptimizer_generateAndUseBlurImages: "true",
      nextImageExportOptimizer_remoteImageCacheTTL: "0",
    },
};

export default nextConfig;
