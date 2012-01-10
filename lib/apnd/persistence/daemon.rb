module APND
  class Daemon
    #
    # Sends each notification in the store upstream to Apple
    #
    def process_notifications!
      pending = APND::Notification.limit(100)
      if pending.size > 0
        @apple.connect!
        while !pending.empty?
          APND.logger "Processnig #{pending.size} item#{pending.size == 1 ? '' : 's'}"
          sent = []
          pending.each do |notification|
            begin
              APND.logger "Sending notification for #{notification.token}"
              @apple.write(notification.to_bytes)
              sent << notification._id
           rescue Errno::EPIPE, OpenSSL::SSL::SSLError
              APND.logger "Error, notification will be sent next time around"
              @apple.reconnect!
            rescue RuntimeError => error
              APND.logger "Error: #{error}"
            end
          end
          APND::Notification.where(:id => { :$in => sent }).remove
          pending = APND::Notification.limit(100)
        end
        @apple.disconnect!
      end
    end

  end

  #
  # Daemon::ServerConnection links APND::Daemon::Protocol to EM
  #
  class Daemon::ServerConnection < ::EventMachine::Connection

    def enqueue_notification(n)
      n.save!
    end

  end

end
