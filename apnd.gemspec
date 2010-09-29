$LOAD_PATH.unshift 'lib'

require 'apnd/version'

Gem::Specification.new do |s|
  s.name             = 'apnd'
  s.version          = APND::Version
  s.date             = Time.now.strftime('%Y-%m-%d')
  s.summary          = 'APND: Apple Push Notification Daemon sends Apple Push Notifications to iPhones'
  s.homepage         = 'http://github.com/itspriddle/apnd'
  s.authors          = ['Joshua Priddle']
  s.email            = 'jpriddle@nevercraft.net'

  s.files            = %w[ Rakefile README.markdown ]
  s.files           += Dir['bin/**/*']
  s.files           += Dir['lib/**/*']
  s.files           += Dir['test/**/*']

  s.executables      = ['apnd', 'apnd-push']

  s.add_dependency('eventmachine')
  s.add_dependency('json')
  s.add_dependency('daemons')

  s.extra_rdoc_files = ['README.markdown']
  s.rdoc_options     = ["--charset=UTF-8"]

  s.description = <<-DESC
    APND (Apple Push Notification Daemon) is a ruby library to send Apple Push
    Notifications (APNs) to iPhones.
  DESC
end
