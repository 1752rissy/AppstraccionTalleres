<li>
	✅ <strong>Modalidad:</strong> Google Meet (Se comparte el link el día del taller)
</li>
import './App.css'
import { useState, useEffect } from 'react'

const modulos = [
	{
		titulo: 'MÓDULO 1: ARQUITECTURA DE AGENTES',
		temas: [
			'Patrones de diseño para agentes autónomos',
			'Flujos de trabajo y chain-of-thought',
			'Diseño de sistemas multi-agente',
			'Gestión de estado y contexto',
		],
	},
	{
		titulo: 'MÓDULO 2: IMPLEMENTACIÓN CON GEMINI FLASH-LITE',
		temas: [
			'Configuración y autenticación de API',
			'Prompt engineering para agentes',
			'Manejo de rate limits y errores',
			'Estrategias de caching y retry',
		],
	},
	{
		titulo: 'MÓDULO 3: SISTEMAS DE MEMORIA CON REDIS',
		temas: [
			'Almacenamiento vectorial para contexto',
			'Gestión de sesiones de usuario',
			'Persistencia de historial de conversaciones',
			'Optimización de queries',
		],
	},
	{
		titulo: 'MÓDULO 4: OPTIMIZACIÓN Y BUENAS PRÁCTICAS',
		temas: [
			'Control de costos de API LLM',
			'Monitoreo de rendimiento',
			'Estrategias de fallback',
			'Security best practices',
		],
	},
]

function App() {
	const [showDetail, setShowDetail] = useState(false)
	const [showTemario, setShowTemario] = useState(false)
	const [showPracticos, setShowPracticos] = useState(false)
	const [showBeneficios, setShowBeneficios] = useState(false)
	const [showInfoPractica, setShowInfoPractica] = useState(false)
	const [showInstructor, setShowInstructor] = useState(false)
	const [showFechaArancel, setShowFechaArancel] = useState(false)
	const [showFormulario, setShowFormulario] = useState(false)
	const [comprobante, setComprobante] = useState(null)
	const [showDatosPago, setShowDatosPago] = useState(false)
	const [formData, setFormData] = useState({ nombre: '', apellido: '', correo: '', telefono: '', comprobante: null })
	const [showSuccess, setShowSuccess] = useState(false)

	// Eliminamos el auto-cierre del popup de éxito para que el usuario decida cuándo cerrarlo
	// y al cerrar, redirigimos al home (pantalla principal)
	// useEffect eliminado

	return (
		<div className="home-bg">
			<h1 className="main-title">Appstraccion</h1>
			<p className="subtitle">Desarrollo de soluciones con IA</p>
							{!showDetail &&
							!showTemario &&
							!showPracticos &&
							!showBeneficios &&
							!showInfoPractica &&
							!showInstructor &&
							!showFechaArancel &&
							!showFormulario ? (
								<div className="home-main-row">
									<div className="card-motiva animate-led-glow">
										<div className="led-border"></div>
										<h2 className="motiva-title">🚀 Empezá a dominar la Creación de Agentes de IA!!!</h2>
										<p className="motiva-desc">Taller Intensivo Práctico | 2 Horas | Gemini model LLM + Redis + Python</p>
										<p className="motiva-call">👇 Inscríbete ahora, los conocimientos que necesitas no pueden esperar más!!!</p>
									</div>
									<div className="card-taller animate-fade-in">
										<div className="branding-logo">
											<span role="img" aria-label="robot">
												🤖
											</span>
										</div>
										<h2 className="taller-title">
											<a
												href="#"
												className="taller-link"
												onClick={() => setShowDetail(true)}
											>
												Taller Intensivo: Desarrollo de Agentes de IA con Python y Gemini
											</a>
										</h2>
										<h3 className="taller-subtitle">
											De Cero a Agente Funcional en 2 Horas intensivas!!
										</h3>
										<div className="card-taller-btns">
											<button
												className="temario-btn"
												onClick={() => setShowTemario(true)}
											>
												Ver Temario Detallado
											</button>
											<button
												className="practicos-btn"
												onClick={() => setShowPracticos(true)}
											>
												Componentes prácticos
											</button>
											<button
												className="beneficios-btn"
												onClick={() => setShowBeneficios(true)}
											>
												Beneficios específicos
											</button>
											<button
												className="info-practica-btn"
												onClick={() => setShowInfoPractica(true)}
											>
												Información práctica
											</button>
											<button
												className="instructor-btn"
												onClick={() => setShowInstructor(true)}
											>
												Instructor y experiencia
											</button>
											<button
												className="fecha-arancel-btn"
												onClick={() => setShowFechaArancel(true)}
											>
												Fecha y Arancel
											</button>
										</div>
									</div>
								</div>
			) : showDetail ? (
				<div className="card-detalle animate-fade-in">
					<h2 className="detalle-title">Descripción del Taller</h2>
					<ul className="detalle-list">
						<li>Enfoque 100% práctico y hands-on</li>
						<li>
							Público objetivo: desarrolladores Python, ingenieros de software,
							entusiastas de IA
						</li>
						<li>Prerrequisitos: Conocimientos básicos de Python</li>
					</ul>
					<h2 className="detalle-title">Objetivos de Aprendizaje</h2>
					<ul className="detalle-list">
						<li>Diseñar arquitecturas escalables para agentes de IA</li>
						<li>Implementar sistemas de memoria con Redis</li>
						<li>Optimizar costos y rendimiento de APIs LLM</li>
						<li>Desplegar agentes en entornos productivos</li>
					</ul>
					<button
						className="volver-btn"
						onClick={() => setShowDetail(false)}
					>
						Volver
					</button>
				</div>
			) : showPracticos ? (
				<div className="card-detalle animate-fade-in">
					<h2 className="detalle-title">Componentes Prácticos</h2>
					<ul className="detalle-list">
						<li>
							<span role="img" aria-label="check">
								✅
							</span>{' '}
							Proyecto real: Desarrollar un agente de soporte automatizado
						</li>
						<li>
							<span role="img" aria-label="check">
								✅
							</span>{' '}
							Kit de herramientas completo proporcionado
						</li>
						<li>
							<span role="img" aria-label="check">
								✅
							</span>{' '}
							Ejercicios guiados paso a paso
						</li>
						<li>
							<span role="img" aria-label="check">
								✅
							</span>{' '}
							Código fuente y repositorio GitHub incluido
						</li>
					</ul>
					<button
						className="volver-btn"
						onClick={() => setShowPracticos(false)}
					>
						Volver
					</button>
				</div>
			) : showBeneficios ? (
				<div className="card-detalle animate-fade-in">
					<h2 className="detalle-title">Beneficios Específicos</h2>
					<ul className="detalle-list">
						<li>
							✅ <strong>Arquitectura</strong>: Aprender patrones escalables y
							mantenibles
						</li>
						<li>
							✅ <strong>Rendimiento</strong>: Técnicas para latencia optimizada
						</li>
						<li>
							✅ <strong>Costos</strong>: Estrategias para reducir gastos en APIs
							LLM hasta 70%
						</li>
						<li>
							✅ <strong>Producción</strong>: Guidelines para deployment seguro
						</li>
					</ul>
					<button
						className="volver-btn"
						onClick={() => setShowBeneficios(false)}
					>
						Volver
					</button>
				</div>
			) : showInfoPractica ? (
				<div className="card-detalle animate-fade-in">
					<h2 className="detalle-title">Información Práctica</h2>
					<ul className="detalle-list">
						<li>
							✅ <strong>Duración:</strong> 2 horas (presencial/virtual)
						</li>
						<li>
							✅ <strong>Incluye:</strong> Materiales, código, certificado de
							participación
						</li>
						<li>
							✅ <strong>Requisitos técnicos:</strong> Python 3.9+, cuenta Google
							Cloud
						</li>
					</ul>
					<button
						className="volver-btn"
						onClick={() => setShowInfoPractica(false)}
					>
						Volver
					</button>
				</div>
			) : showInstructor ? (
				<div className="card-detalle animate-fade-in">
					<h2 className="detalle-title">Instructor y Experiencia</h2>
					<ul className="detalle-list">
						<li>✅ Ing. en Sistemas Gutierrez Andres</li>
						<li>
							✅{' '}
							<a
								href="https://www.linkedin.com/in/andres-emanuel-gutierrez-a90618203/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Perfil LinkedIn
							</a>
						</li>
						<li>✅ Experiencia en proyectos reales de IA</li>
						<li>✅ Casos de éxito implementados</li>
					</ul>
					<button
						className="volver-btn"
						onClick={() => setShowInstructor(false)}
					>
						Volver
					</button>
				</div>
					) : showFechaArancel ? (
						<div className="card-detalle animate-fade-in">
							<h2 className="detalle-title">Fecha y Arancel</h2>
							<ul className="detalle-list">
								<li>
									✅ <strong>Fecha de la capacitación:</strong> 4/11/2025
								</li>
								<li>
									✅ <strong>Horario:</strong> 18 a 20 Hs (Arg)
								</li>
								<li>
									✅ <strong>Modalidad:</strong> Google Meet (Se comparte el link el día del taller)
								</li>
								<li>
									✅ <strong>Precio especial:</strong> $23000
								</li>
								<li>
									✅ <strong>Forma de inscripción:</strong>{' '}
									<a href="#" onClick={(e) => {e.preventDefault(); setShowFechaArancel(false); setShowFormulario(true);}}>
										completa el formulario
									</a>
								</li>
								<li>
									✅ <strong>Contacto:</strong> 2996052287 / speedfc@hotmail.com
								</li>
							</ul>
							<button
								className="volver-btn"
								onClick={() => setShowFechaArancel(false)}
							>
								Volver
							</button>
						</div>
			) : showFormulario ? (
				<div className="card-formulario animate-fade-in">
					<h2 className="detalle-title">Formulario de Inscripción</h2>
					<form className="form-inscripcion" onSubmit={e => {e.preventDefault(); setShowDatosPago(true);}} autoComplete="off">
						<label htmlFor="nombre">Nombre</label>
						<input type="text" id="nombre" name="nombre" required pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$" title="Solo letras" inputMode="text" autoComplete="off" value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })} />
						<label htmlFor="apellido">Apellido</label>
						<input type="text" id="apellido" name="apellido" required pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$" title="Solo letras" inputMode="text" autoComplete="off" value={formData.apellido} onChange={e => setFormData({ ...formData, apellido: e.target.value })} />
						<label htmlFor="correo">Correo</label>
						<input type="email" id="correo" name="correo" required autoComplete="off" value={formData.correo} onChange={e => setFormData({ ...formData, correo: e.target.value })} />
						<label htmlFor="telefono">Teléfono</label>
						<input type="tel" id="telefono" name="telefono" required pattern="^[0-9 +()-]{7,}$" title="Ingrese un teléfono válido" autoComplete="off" value={formData.telefono} onChange={e => setFormData({ ...formData, telefono: e.target.value })} style={{
							padding: '0.6rem',
							borderRadius: '8px',
							border: 'none',
							background: '#2c5364',
							color: '#fff',
							fontSize: '1rem',
							boxShadow: '0 2px 8px #00c6ff44'
						}} />
						<button type="button" className="abonar-btn" style={{marginBottom: '0.7rem'}} onClick={() => setShowDatosPago(true)}>Ver CBU</button>
						<label htmlFor="comprobante">Adjuntar comprobante de pago</label>
						<input type="file" id="comprobante" name="comprobante" accept="image/*,application/pdf" required onChange={e => setFormData({ ...formData, comprobante: e.target.files[0] })} />
						{formData.comprobante && (
							<div className="comprobante-preview">
								<span>{formData.comprobante.name}</span>
							</div>
						)}
<button type="button" className="guardar-btn" style={{marginTop: '0.7rem'}} onClick={async () => {
	if (!formData.nombre.trim() || !formData.apellido.trim() || !formData.correo.trim() || !formData.comprobante) {
		alert('Por favor, completa todos los campos y adjunta el comprobante.');
		return;
	}
	const data = new FormData();
	data.append('nombre', formData.nombre);
	data.append('apellido', formData.apellido);
	data.append('correo', formData.correo);
		data.append('telefono', formData.telefono);
		data.append('comprobante', formData.comprobante);
	try {
		const res = await fetch('http://localhost:4000/inscripcion', {
			method: 'POST',
			body: data,
		});
		if (res.ok) {
			setShowSuccess(true);
		} else {
			const errorText = await res.text();
			console.error('Error backend:', errorText);
			alert('Error al enviar la inscripción.');
		}
	} catch (err) {
		console.error('Error conexión:', err);
		alert('No se pudo conectar con el servidor.');
	}
}}>
	Enviar Inscripción
</button>
					</form>
					{showDatosPago && (
						<div className="popup-overlay">
							<div className="card-datos-pago animate-fade-in">
								<h2 className="detalle-title">Datos para Transferencia Mercado Pago</h2>
								<ul className="detalle-list">
									<li><strong>Alias:</strong> reno.rito.aclare.mp</li>
									<li><strong>CVU:</strong> 0000003100000788521898</li>
									<li><strong>Nombre:</strong> Andres Emanuel Gutierrez</li>
								</ul>
								<p className="aviso-comprobante">Por favor, realiza la transferencia y adjunta el comprobante en el formulario.</p>
								<button className="volver-btn" onClick={() => setShowDatosPago(false)}>Cerrar</button>
							</div>
						</div>
					)}
					{showSuccess && (
  <div className="popup-overlay">
    <div className="popup-success animate-success">
      <span className="success-icon">🎉</span>
      <h2 className="success-title">¡Inscripción enviada!</h2>
      <p className="success-msg">Gracias por inscribirte.<br/>Pronto recibirás la confirmación en tu correo.<br/>¡Te esperamos en el taller!</p>
			<button className="volver-btn" onClick={() => {
				setShowSuccess(false);
				setShowFormulario(false);
				// Redirigir al home: ocultar todos los detalles y volver al estado inicial
				setShowDetail(false);
				setShowTemario(false);
				setShowPracticos(false);
				setShowBeneficios(false);
				setShowInfoPractica(false);
				setShowInstructor(false);
				setShowFechaArancel(false);
			}}>Cerrar</button>
    </div>
  </div>
)}
					<button
						className="volver-btn"
						onClick={() => setShowFormulario(false)}
					>
						Volver
					</button>
				</div>
			) : (
				<div className="temario-container animate-fade-in">
					<h2 className="detalle-title">Temario Detallado</h2>
					<div className="modulos-grid">
						{modulos.map((mod, idx) => (
							<div className="card-modulo animate-pop" key={idx}>
								<h3 className="modulo-title">{mod.titulo}</h3>
								<ul className="modulo-list">
									{mod.temas.map((tema, i) => (
										<li key={i}>{tema}</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<button
						className="volver-btn"
						onClick={() => setShowTemario(false)}
					>
						Volver
					</button>
				</div>
			)}
		</div>
	)
}

export default App
