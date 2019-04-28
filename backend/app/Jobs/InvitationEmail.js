"use strict";
const Mail = use("Mail");
class InvitationEmail {
  static get concurrency() {
    return 1;
  }

  static get key() {
    return "InvitationEmail-job";
  }

  async handle({ user, team, email }) {
    await Mail.send(
      ["emails.invitation"],
      { team: team.name, user: user.name },
      message => {
        message
          .to(email)
          .from("garciawell@gmail.com", "Wellington Garcia | Inundaweb")
          .subject(`Convite para o time ${time.name}`);
      }
    );
  }
}

module.exports = InvitationEmail;
