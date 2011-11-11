module APND
  class Notification
    include MongoMapper::Document
        
    safe
    timestamps!
    
    set_collection_name :apnd_notifications

    key :token
    key :alert
    key :badge
    key :sound
    key :custom
  end
end
