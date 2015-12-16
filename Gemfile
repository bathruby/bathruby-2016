# If you do not have OpenSSL installed, update
# the following line to use "http://" instead
source 'https://rubygems.org'

gem "middleman", "~>3.4.0"

# Live-reloading plugin
gem "middleman-livereload", "~> 3.1.0"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# Windows does not come with time zone data
gem "tzinfo-data", platforms: [:mswin, :mingw, :jruby]

# Sass Toolkit
gem 'bourbon'
gem 'neat'

# Servers
gem 'rack-contrib'

# Minify HTML
gem 'middleman-minify-html'

# Deploying to S3
gem 'middleman-aws'

# Even though already required by the middleman-aws gem, it appears middleman does not
#   pick up transitive dependency extensions early enough  to avoid the
#   "== Unknown Extension:" error.  Add these to your main project
#   (I wish this was unnecessary but don't know how to work around it)
gem 'middleman-s3_sync'
gem 'middleman-cloudfront'
