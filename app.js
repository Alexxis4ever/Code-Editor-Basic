const codeEntered = document.getElementById('codeEntered')
const renderedCode = document.getElementById('renderedCode')
const btnRun = document.getElementById('btnRun')
const btnClear = document.getElementById('btnClear')

btnRun.addEventListener('click', executeCode)
btnClear.addEventListener('click', clearDocument)

// Funcion para ejecutar el boton correr (run)
function executeCode() {
    // Se validan campos vacios
    if (codeEntered.value === "") {
        // Se invoca la biblioteca de alertas y se usa
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes ingresar codigo'
        });
        // De lo contrario el codigo invoca a la funcion ejecutar (execute)
    } else {
        execute()
    }
}

// Funcion para limpia el editor y el documento
function clearDocument() {
        codeEntered.value = ''
        renderedCode.srcdoc = ""
}

// Funcion que se encarga de tomar el valor de entrada en el editor y lo representa como contenido HTML
function execute() {
    // srcdoc es utilizado en iframes para ver la representacion en tiempo real de un valor de entrada de tipo html
    // seguidamente, se actualiza dinamicamente su contenido
    renderedCode.srcdoc = codeEntered.value
}
