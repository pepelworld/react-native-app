import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native';
import { COLORS } from '../../constants/theme';
import PushNotification, { Importance } from 'react-native-push-notification';

const SwitchSelector = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    useEffect(() => {
        if (isEnabled) {
            PushNotification.createChannel(
                {
                    channelId: 'workers',
                    channelName: 'WORKERS',
                    channelDescription:
                        'A channel to categorise your notifications',
                    playSound: true,
                    soundName: 'default',
                    importance: Importance.HIGH,
                    vibrate: true,
                },
                created => console.log(`createChannel returned '${created}'`),
            );
        } else {
            PushNotification.deleteChannel('workers');
        }
    }, [isEnabled]);

    return (
        <Switch
            value={isEnabled}
            thumbColor={COLORS.white}
            trackColor={{
                false: COLORS.gray,
                true: COLORS.lightAccent,
            }}
            onValueChange={toggleSwitch}
            style={{ marginRight: 5 }}
        />
    );
};

export default SwitchSelector;
