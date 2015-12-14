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

  # TODO: Figure out a way of changing the Content-Type and Content-Encoding
  # so that S3 serves GZipped files properly
  #
  # after_build do |builder|
  #   Dir.chdir(::Middleman::Application.server.inst.build_dir) do
  #     files = Dir.glob('**/*.gz')
  #     files.map { |file| file[0..-4] }.each do |f| # find corresponding non-gz file by removing ".gz" at the end
  #       unless File.directory?(f)
  #         output_filename = f + '.txt'
  #         File.rename(f, output_filename)
  #         File.rename("#{f}.gz", f)
  #         builder.say_status :mv, output_filename
  #       end
  #     end
  #   end
  # end
end
