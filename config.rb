###
# Helpers
###

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

activate :directory_indexes

# Build-specific configuration
configure :build do
  
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Gzip
  activate :gzip

  # Minify HTML
  activate :minify_html
end

# Configuration variables specific to each project
#------------------------------------------------------------------------
AWS_BUCKET                      = '2016.bathruby.uk'
AWS_CLOUDFRONT_DISTRIBUTION_ID  = 'E2UCPTMXLPN6TX'

# Variables: Sent in on CLI by rake task via ENV
#------------------------------------------------------------------------
AWS_ACCESS_KEY                  = ENV['AWS_ACCESS_KEY']
AWS_SECRET                      = ENV['AWS_SECRET']

# https://github.com/fredjean/middleman-s3_sync
activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = AWS_BUCKET
  s3_sync.region                     = 'eu-west-1'
  s3_sync.aws_access_key_id          = AWS_ACCESS_KEY
  s3_sync.aws_secret_access_key      = AWS_SECRET
  s3_sync.delete                     = false # We delete stray files by default.
end

# https://github.com/andrusha/middleman-cloudfront
activate :cloudfront do |cf|
  cf.access_key_id                    = AWS_ACCESS_KEY
  cf.secret_access_key                = AWS_SECRET
  cf.distribution_id                  = AWS_CLOUDFRONT_DISTRIBUTION_ID
  # cf.filter = /\.html$/i
end
