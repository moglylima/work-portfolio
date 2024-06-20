import sendmail from 'sendmail';

export async function sendEmail({ to, subject, text }) {
    return new Promise((resolve, reject) => {
        sendmail({
            from: 'seuemail@seudominio.com',
            to,
            subject,
            html: `<p>${text}</p>`
        }, function (err, reply) {
            if (err) {
                console.error('Erro ao enviar e-mail:', err);
                reject(err);
            } else {
                console.log('E-mail enviado com sucesso:', reply);
                resolve(reply);
            }
        });
    });
}
