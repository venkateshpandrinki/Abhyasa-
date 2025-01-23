// components/Projects.js

import { Card, CardContent, CardHeader, CardTitle } from'./ui/card';
const projects = [
  { id: 1, title: "Dynamic Power Reduction Techniques through Clock Tree Optimization", category: "PD" },
  { id: 2, title: "Shielding Techniques to Enhance Signal Integrity in Routing", category: "PD" },
  { id: 3, title: "Critical Path Analysis and Timing Optimization", category: "PD" },
  { id: 4, title: "Design for Manufacturability and Yield Enhancement Techniques", category: "PD" },
  { id: 5, title: "Implementation of Decoupling Capacitance for Power Integrity", category: "PD" },
  { id: 17, title: "1X3 Router", category: "DV" },
  { id: 18, title: "ALU (Arithmetic Logic Unit)", category: "DV" },
  { id: 19, title: "UART Implementation", category: "DV" },
  { id: 20, title: "SPI Controller Design", category: "DV" },
  { id: 21, title: "PWM Generator Design", category: "DV" },
  // Add remaining projects with categories
];

const Projects = () => {
  const pdProjects = projects.filter((project) => project.category === "PD");
  const dvProjects = projects.filter((project) => project.category === "DV");

  return (
    <div className="py-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>

        {/* PD Section */}
        <section>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Physical Design (PD)</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pdProjects.map((project) => (
              <Card key={project.id} className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Project ID: {project.id}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>

        {/* DV Section */}
        <section>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Design Verification (DV)</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dvProjects.map((project) => (
              <Card key={project.id} className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Project ID: {project.id}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
