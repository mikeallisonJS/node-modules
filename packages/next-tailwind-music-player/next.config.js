module.exports = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  }
}
