require 'rubygems'
require 'test/unit'
require 'shoulda-context'

begin
  require 'turn'
rescue LoadError
end

require 'apnd-persistence'

class APND::Daemon::AppleConnection
  def connect!
  end
  
  def disconnect!    
  end
  
  def open
  end
  
  def write(data)
  end
end

class TestPersistenceDaemon < APND::Daemon
  include APND::Daemon::Protocol

  def initialize
    @apple = APND::Daemon::AppleConnection.new
    @queue   = []
    @address = [123, '10.10.10.1']
  end

  def queue
    @queue
  end

  def enqueue_notification(n)
      n.save!
  end

end

# Silence APND.logger in testing
def APND.logger(*args); end
