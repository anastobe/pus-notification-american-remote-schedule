import PushNotification, {Importance} from "react-native-push-notification";

// PushNotification.configure({
//     onNotification: function (notification) {
//         console.log('Local Notification', notification);
//     },

//     popInitialNotification: true,
//     requestPermissions: true
// })

// PushNotification.createChannel(
//     {
//         channelId: 'channel-id',
//         channelName: 'my channel',
//         channelDescription: 'Notification channel',
//         playSound: true,
//         soundName: 'default',
//         importance: 10,
//         vibrate: true,
//         vibration: 1000
//     },
//     (created) => console.log(`Channel Created ${created}`),
//     console.log("Error in channel creation")
// )

export const LocalNotification = () => {
        PushNotification.localNotification({
            channelId: 'channel-id',
            channelName: 'my channel',
            autoCancel: true,
            title: 'Hunaiza',
            message: 'Local Notification',
            playSound: true,
            soundName: 'default',
            importance: 10,
            vibrate: true,
            vibration: 1000
}),
PushNotification.localNotificationSchedule({
    title: 'Hunaiza',
    message: "Schedule Local Notification", 
    date: new Date(Date.now() + 1 * 1000), 
    allowWhileIdle: false,
    repeatTime: 1, 
    importance: 100,
  })
}