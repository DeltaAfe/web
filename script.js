// Lista de herramientas de IA
const tools = [
    { name: "Canva", link: "https://www.canva.com/es_es/" },
    { name: "Prezi", link: "https://prezi.com/" },
    { name: "Beautiful.ai", link: "https://www.beautiful.ai/" },
    { name: "Designs.ai", link: "https://designs.ai/" },
    { name: "Tome", link: "https://tome.app/" }
  ];
  
  // Función para cargar las herramientas en el HTML
  function loadTools() {
    const toolsList = document.getElementById("tools");
    tools.forEach(tool => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = tool.link;
      link.textContent = tool.name;
      link.target = "_blank";
      listItem.appendChild(link);
      toolsList.appendChild(listItem);
    });
  }
  
  // Cargar las herramientas al cargar la página
  document.addEventListener("DOMContentLoaded", loadTools);
  