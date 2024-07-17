import React, { useState } from 'react';
import '../components/NotificationSettings.css';

const NotificationSettings = () => {
  const [isNotificationsOn, setIsNotificationsOn] = useState(true);
  const [settings, setSettings] = useState({
    notificationSound: true,
    advertisements: false,
    popUpNotifications: true,
  });

  const handleToggle = () => {
    setIsNotificationsOn(!isNotificationsOn);
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings({
      ...settings,
      [name]: checked,
    });
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
  };

  return (
    <div className="notification-settings">
      <div className="header">
        <h2>Notifications</h2>
        <label className="switch">
          <input type="checkbox" checked={isNotificationsOn} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="settings">
        <label>
          Notification Sound
          <input
            type="checkbox"
            name="notificationSound"
            checked={settings.notificationSound}
            onChange={handleChange}
          />
        </label>
        <label>
          Advertisements
          <input
            type="checkbox"
            name="advertisements"
            checked={settings.advertisements}
            onChange={handleChange}
          />
        </label>
        <label>
          Pop-Up Notifications
          <input
            type="checkbox"
            name="popUpNotifications"
            checked={settings.popUpNotifications}
            onChange={handleChange}
          />
        </label>
      </div>
      <button className="save-button" onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default NotificationSettings;
