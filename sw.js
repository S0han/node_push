self.addEventListener('push', () => {
    self.ServiceWorkerRegistration.sendNotificaiton('test message', {});
})