// user.service.ts
export function createUser() {
  sendEmail();
}

// email.services
export function sendEmail() {
  createUser();
}