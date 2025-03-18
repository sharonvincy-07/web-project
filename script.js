// Function to trigger different types of notifications
function triggerNotification(type, status) {
    const notificationContainer = document.getElementById('notification-container');
    let notificationMessage = '';

    switch (type) {
        case 'booking':
            notificationMessage = status === 'confirmed'
                ? 'Your booking has been confirmed!'
                : 'Your booking has been cancelled!';
            break;
        case 'cancellation':
            notificationMessage = 'Your booking has been cancelled.';
            break;
        case 'reminder':
            notificationMessage = 'This is a reminder for your upcoming booking!';
            break;
        case 'offer':
            notificationMessage = 'Special promotion! Get 20% off your next booking!';
            break;
    }

    const notification = document.createElement('div');
    notification.classList.add('notification', type);

    notification.innerHTML = notificationMessage;

    notificationContainer.appendChild(notification);

    // Automatically hide notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300); // Wait for fade out before removing
    }, 5000);
}
