'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validation basique
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return {
        success: false,
        error: 'Tous les champs obligatoires doivent être remplis'
      }
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: 'Adresse email invalide'
      }
    }

    const { data, error } = await resend.emails.send({
      from: 'info@constructionmichaelaubut.com',
      to: 'info@pelti.co',
      replyTo: formData.email,
      subject: `Nouveau message du site - ${formData.firstName} ${formData.lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #ffc107;
                color: #1f2937;
                padding: 20px;
                text-align: center;
                border-radius: 5px 5px 0 0;
              }
              .content {
                background-color: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-radius: 0 0 5px 5px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #4b5563;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #1f2937;
                padding: 10px;
                background-color: white;
                border-radius: 3px;
                border: 1px solid #e5e7eb;
              }
              .message-box {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                margin-top: 20px;
                text-align: center;
                color: #6b7280;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nouveau message de contact</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Nom complet:</span>
                  <div class="value">${formData.firstName} ${formData.lastName}</div>
                </div>
                
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
                </div>
                
                <div class="field">
                  <span class="label">Téléphone:</span>
                  <div class="value">${formData.phone || 'Non fourni'}</div>
                </div>
                
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value message-box">${formData.message}</div>
                </div>
                
                <div class="footer">
                  <p>Reçu le ${new Date().toLocaleString('fr-CA', { 
                    timeZone: 'America/Toronto',
                    dateStyle: 'long',
                    timeStyle: 'short'
                  })}</p>
                  <p>Vous pouvez répondre directement à cet email pour contacter ${formData.firstName}.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    })

    if (error) {
      console.error('Erreur Resend:', error)
      return {
        success: false,
        error: 'Erreur lors de l\'envoi de l\'email'
      }
    }

    console.log('Email envoyé avec succès:', data)
    return {
      success: true,
      message: 'Votre message a été envoyé avec succès!'
    }

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    return {
      success: false,
      error: 'Une erreur est survenue lors de l\'envoi'
    }
  }
}

