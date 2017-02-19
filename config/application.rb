require File.expand_path('../boot', __FILE__)

require 'rails/all'
require 'json'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

## turn on GC::Profiler
#GC::Profiler.enable

module TextAnimationTests
  class Application < Rails::Application
    config.time_zone = 'Eastern Time (US & Canada)'

    config.assets.paths << Rails.root.join('vendor', 'assets', 'fonts')
    config.assets.paths << Rails.root.join('vendor', 'assets', 'images')
    config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif)
    config.assets.precompile += %w(*.svg *.eot *.woff *.woff2 *.ttf)

    css = [
      'text.css',
      'pin.css',
      'text-fade.css'
    ]

    js = [
      'application.js',
      'pin.js',
      'text-fade.js'
    ]

    config.assets.precompile += css
    config.assets.precompile += js

    config.autoload_paths += Dir[Rails.root.join('lib', '**/') ]
    config.autoload_paths += Dir[Rails.root.join('app', 'services', 'concerns')]
    config.autoload_paths += Dir[Rails.root.join('app', 'models', '**/')]
    config.autoload_paths += Dir[Rails.root.join('app', 'serializers', '**/')]
    config.autoload_paths += Dir[Rails.root.join('app', 'services', '**/')]
    config.autoload_paths += Dir[Rails.root.join('app', 'queries', '**/')]
    config.autoload_paths += Dir[Rails.root.join('app', 'filters', '**/')]
    config.autoload_paths += Dir[Rails.root.join('app', 'templates', '**/')]
    config.middleware.use Rack::Deflater
    config.action_dispatch.perform_deep_munge = false
    config.active_record.raise_in_transactional_callbacks = true
  end
end
