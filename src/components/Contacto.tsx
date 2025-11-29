import { useState, FormEvent } from 'react';
import { FormData as ContactFormData } from '../types';

const Contacto = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Validar campos requeridos
    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.mensaje.trim()) {
      setSubmitStatus({ type: 'error', message: '⚠️ Por favor completa todos los campos requeridos.' });
      setIsSubmitting(false);
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      setSubmitStatus({ type: 'error', message: '⚠️ Por favor ingresa un email válido.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nombre', formData.nombre.trim());
      formDataToSend.append('email', formData.correo.trim());
      formDataToSend.append('telefono', formData.telefono.trim() || '');
      formDataToSend.append('mensaje', formData.mensaje.trim());

      const response = await fetch('/send-email.php', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: '✅ ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.' });
        setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
      } else {
        setSubmitStatus({ type: 'error', message: `❌ Error: ${data.message || 'No se pudo enviar el mensaje.'}` });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: '❌ Error de conexión. Por favor intenta nuevamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contacto section">
      <div className="container">
        <h2>Contacto</h2>
        <form id="form-contacto" onSubmit={handleSubmit}>
          {submitStatus.type && (
            <div className={`form-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <div className="campo">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="tu@email.com"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="telefono">Teléfono (opcional):</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="(+56) 9 1234 5678"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Cuéntanos sobre tu proyecto..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;

