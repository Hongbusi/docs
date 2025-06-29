import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})

// Export the final Next.js config with Nextra included
export default withNextra({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hongbusi.com',
      },
    ],
  },
  // ... Add regular Next.js options here
})
