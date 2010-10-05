var search_data = {"index":{"searchIndex":["apnd","daemon","appleconnection","protocol","notification","settings","appleconnection","daemon","notification","apple()","aps()","aps_json()","configure()","connect!()","connected?()","create()","daemon()","disconnect!()","hex_token()","new()","new()","new()","new()","new()","new()","notification()","open()","open_upstream_socket()","parse()","post_init()","push!()","receive_data()","reconnect!()","run!()","run!()","settings()","to_bytes()","unbind()","upstream_socket()","valid?()","write()","license","readme.markdown","apnd.rb","daemon.rb","apple_connection.rb","protocol.rb","errors.rb","notification.rb","settings.rb","version.rb"],"longSearchIndex":["lib/apnd.rb","apnd","apnd::daemon","apnd::daemon","apnd","apnd","apnd::settings","apnd::settings","apnd::settings","apnd::settings","apnd::notification","apnd::notification","apnd","apnd::daemon::appleconnection","apnd::daemon::appleconnection","apnd::notification","apnd::settings","apnd::daemon::appleconnection","apnd::notification","apnd::daemon","apnd::daemon::appleconnection","apnd::notification","apnd::settings::appleconnection","apnd::settings::daemon","apnd::settings::notification","apnd::settings","apnd::daemon::appleconnection","apnd::notification","apnd::notification","apnd::daemon::protocol","apnd::notification","apnd::daemon::protocol","apnd::daemon::appleconnection","apnd::daemon","apnd::daemon","apnd","apnd::notification","apnd::daemon::protocol","apnd::notification","apnd::notification","apnd::daemon::appleconnection","files/license.html","files/readme_markdown.html","files/lib/apnd_rb.html","files/lib/apnd/daemon_rb.html","files/lib/apnd/daemon/apple_connection_rb.html","files/lib/apnd/daemon/protocol_rb.html","files/lib/apnd/errors_rb.html","files/lib/apnd/notification_rb.html","files/lib/apnd/settings_rb.html","files/lib/apnd/version_rb.html"],"info":[["APND","lib/apnd/daemon/apple_connection.rb","classes/APND.html"," < ","",1],["Daemon","APND","classes/APND/Daemon.html"," < Object","The APND::Daemon maintains a persistent secure connection with Apple, (APND::Daemon::AppleConnection).",1],["AppleConnection","APND::Daemon","classes/APND/Daemon/AppleConnection.html"," < Object","Daemon::AppleConnection handles the persistent connection between APND and Apple ",1],["Protocol","APND::Daemon","classes/APND/Daemon/Protocol.html"," < ::EventMachine::Connection","Daemon::Protocol handles incoming APNs ",1],["Notification","APND","classes/APND/Notification.html"," < Object","APND::Notification is the base class for creating new push notifications. ",1],["Settings","APND","classes/APND/Settings.html"," < Object","Settings for APND ",1],["AppleConnection","APND::Settings","classes/APND/Settings/AppleConnection.html"," < Object","Settings for APND::Daemon::AppleConnection ",1],["Daemon","APND::Settings","classes/APND/Settings/Daemon.html"," < Object","Settings for APND::Daemon ",1],["Notification","APND::Settings","classes/APND/Settings/Notification.html"," < Object","Settings for APND::Notification ",1],["apple","APND::Settings","classes/APND/Settings.html#M000023","()","Returns the AppleConnection settings ",2],["aps","APND::Notification","classes/APND/Notification.html#M000027","()","aps hash sent to Apple ",2],["aps_json","APND::Notification","classes/APND/Notification.html#M000029","()","Returns the Notification's aps hash as json ",2],["configure","APND","classes/APND.html#M000032","()","Yields APND::Settings ",2],["connect!","APND::Daemon::AppleConnection","classes/APND/Daemon/AppleConnection.html#M000002","()","Connect to Apple over SSL ",2],["connected?","APND::Daemon::AppleConnection","classes/APND/Daemon/AppleConnection.html#M000001","()","Returns true if the connection to Apple is open ",2],["create","APND::Notification","classes/APND/Notification.html#M000017","(params = {}, push = true)","Create a new APN ",2],["daemon","APND::Settings","classes/APND/Settings.html#M000024","()","Returns the Daemon settings ",2],["disconnect!","APND::Daemon::AppleConnection","classes/APND/Daemon/AppleConnection.html#M000003","()","Close connection ",2],["hex_token","APND::Notification","classes/APND/Notification.html#M000026","()","Token in hex format ",2],["new","APND::Daemon","classes/APND/Daemon.html#M000011","()","Create a connection to Apple and a new EM queue ",2],["new","APND::Daemon::AppleConnection","classes/APND/Daemon/AppleConnection.html#M000000","(params = {})","Setup a new connection ",2],["new","APND::Notification","classes/APND/Notification.html#M000021","(params = {})","Create a new Notification object from a hash ",2],["new","APND::Settings::AppleConnection","classes/APND/Settings/AppleConnection.html#M000015","()","",2],["new","APND::Settings::Daemon","classes/APND/Settings/Daemon.html#M000020","()","",2],["new","APND::Settings::Notification","classes/APND/Settings/Notification.html#M000022","()","",2],["notification","APND::Settings","classes/APND/Settings.html#M000025","()","Returns the Notification settings ",2],["open","APND::Daemon::AppleConnection","classes/APND/Daemon/AppleConnection.html#M000005","(&block)","Establishes a connection if needed and yields it Ex: open { |conn| conn.write('write to socket) } ",2],["open_upstream_socket","APND::Notification","classes/APND/Notification.html#M000016","(&block)","Opens a new socket upstream, yields it, and closes it ",2],["parse","APND::Notification","classes/APND/Notification.html#M000019","(data)","Parse raw data into a new Notification ",2],["post_init","APND::Daemon::Protocol","classes/APND/Daemon/Protocol.html#M000007","()","Called when a client connection is opened ",2],["push!","APND::Notification","classes/APND/Notification.html#M000028","()","Pushes notification to upstream host:port (default is localhost:22195) ",2],["receive_data","APND::Daemon::Protocol","classes/APND/Daemon/Protocol.html#M000009","(data)","Add incoming notification to the queue if it is valid ",2],["reconnect!","APND::Daemon::AppleConnection","classes/APND/Daemon/AppleConnection.html#M000004","()","Disconnect/connect to Apple ",2],["run!","APND::Daemon","classes/APND/Daemon.html#M000010","()","Create a new Daemon and run it ",2],["run!","APND::Daemon","classes/APND/Daemon.html#M000012","()","Run the daemon ",2],["settings","APND","classes/APND.html#M000031","()","Returns APND::Settings ",2],["to_bytes","APND::Notification","classes/APND/Notification.html#M000030","()","Format the notification as a string for submission to Apple ",2],["unbind","APND::Daemon::Protocol","classes/APND/Daemon/Protocol.html#M000008","()","Called when a client connection is closed ",2],["upstream_socket","APND::Notification","classes/APND/Notification.html#M000014","()","Creates a new socket to upstream_host:upstream_port ",2],["valid?","APND::Notification","classes/APND/Notification.html#M000018","(data)","Try to create a new Notification from raw data Used by Daemon::Protocol to validate incoming data ",2],["write","APND::Daemon::AppleConnection","classes/APND/Daemon/AppleConnection.html#M000006","(raw)","Write to the connection socket ",2],["LICENSE","files/LICENSE.html","files/LICENSE.html","","Copyright (c) 2010 Joshua Priddle <itspriddle@nevercraft.net>  Permission  is  hereby granted, free of",3],["README.markdown","files/README_markdown.html","files/README_markdown.html","","# APND  APND (Apple Push Notification Daemon) is a ruby library to send Apple Push Notifications to iPhones.",3],["apnd.rb","files/lib/apnd_rb.html","files/lib/apnd_rb.html","","",3],["daemon.rb","files/lib/apnd/daemon_rb.html","files/lib/apnd/daemon_rb.html","","",3],["apple_connection.rb","files/lib/apnd/daemon/apple_connection_rb.html","files/lib/apnd/daemon/apple_connection_rb.html","","",3],["protocol.rb","files/lib/apnd/daemon/protocol_rb.html","files/lib/apnd/daemon/protocol_rb.html","","",3],["errors.rb","files/lib/apnd/errors_rb.html","files/lib/apnd/errors_rb.html","","",3],["notification.rb","files/lib/apnd/notification_rb.html","files/lib/apnd/notification_rb.html","","",3],["settings.rb","files/lib/apnd/settings_rb.html","files/lib/apnd/settings_rb.html","","",3],["version.rb","files/lib/apnd/version_rb.html","files/lib/apnd/version_rb.html","","",3]]}}