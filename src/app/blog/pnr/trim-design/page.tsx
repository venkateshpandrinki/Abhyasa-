"use client";

import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ExportedImage from "next-image-export-optimizer";
import React from "react";


const page = () => {
  return (
    <>
      <div className=" bg-gradient-to-br from-black via-gray-900 to-gray-800 ">
        <Navbar />
        <div className="min-h-screen text-white flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl bg-gray-800 bg-opacity-50 border-none">
            <CardHeader>
              <CardTitle level="h1" className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
                Trimming a Design in Innovus (trimDesign)
              </CardTitle>
              <CardDescription>
                Efficiently manage large VLSI designs with trimDesign.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-white/80">
                In semiconductor design, it is not always practical to share the
                entire design, especially when it contains third-party IP data.
                Instead, a trimmed version of the design can be created,
                allowing engineers to focus on a smaller portion while
                maintaining confidentiality. The trimDesign command in Innovus
                facilitates this by extracting a specific section of the layout
                while retaining essential physical data. This approach
                significantly reduces memory usage and enhances debugging
                efficiency
              </p>

              <h2 className="text-2xl font-semibold mb-2">
                Benefits of trimDesign
              </h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  Enables engineers to debug and analyze smaller sections
                  independently.
                </li>
                <li>
                  Retains all placement and routing violations (checkPlace and
                  verify_drc).
                </li>
                <li>
                  Maintains crucial design elements like instances, macros,
                  routing/placement blockages, and wire attributes.
                </li>
                <li>
                  Eliminates hierarchical information for confidentiality.
                </li>
                <li>
                  Encrypts object names for added data protection (customizable
                  options).
                </li>
                <li>
                  Reduces memory footprint and improves turnaround time for
                  analysis
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-2">
                Working of trimDesign
              </h2>
              <p className="mb-4">
                The trimDesign process extracts a defined portion of a larger
                design by specifying a coordinate box. The extracted section
                retains its physical attributes while discarding timing and
                power domain data. However, since it remains physically
                equivalent to the original design, it allows for meaningful
                placement and DRC verification. The LEF file must be shared
                alongside the trimmed design for proper placement and DRC
                verification
              </p>
              <div className=" gap-4">
                A trimmed design is created using:
                <ExportedImage
                  src="/images/blog/trmd.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={600}
                  height={400}
                  className=" mx-auto"
                />
             <Card className="w-full">
  <CardContent className="p-4 bg-muted rounded-md">
    <pre className="whitespace-pre-wrap break-words text-sm">
      trimDesign –dir DB –name trim_db –area {`{300.0 200.0 900.0 700.0}`}
    </pre>
  </CardContent>
</Card>

                <br />
                This command defines a rectangular area within the full design,
                extracts the contained layout data, and stores the trimmed
                design in the specified directory. Alternatively, a routing
                blockage can be used to define the trim area with:
                <br />
                <div className=" w-full">

                <Card className="w-full">
  <CardContent className="p-4 bg-muted rounded-md">
    <pre className="whitespace-pre-wrap break-words text-sm">
    trimDesign –selectedRouteBlk
    </pre>
  </CardContent>
</Card>

                
                 <br />
                For added confidentiality, names of instances and nets can be
                encrypted using a custom name generation procedure. The
                following command demonstrates this:
                <Card className="w-full">
  <CardContent className="p-4 bg-muted rounded-md">
    <pre className="whitespace-pre-wrap break-words text-sm">
    trimDesign –dir DB –name trim_db –area &#123;300.0 200.0 800.0
    700.0&#125; -encryptName gen_new_name
    </pre>
  </CardContent>
</Card>

                </div>
              </div>
              <p className="mb-4">
                During the trim process, the specified trim box/area is snapped
                to the instance grid. All instances in the selected area lose
                their original logic hierarchy and appear flat in the new
                database. Any naming conflicts arising due to flattening are
                resolved automatically, with a mapping file generated for
                reference. Additionally, trimDesign does not save binary data;
                instead, it stores DEF, Verilog, and LEF information in .txt
                format.
              </p>

              <h2 className="text-2xl font-semibold mb-2">
                What Happens with the Trimmed Design?
              </h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  <b>Permanent Modification:</b> Once a design is trimmed, it
                  cannot be reconstructed back into the original design.
                  Attempting to merge it back is not supported.
                </li>
                <li>
                  <b>Flattened Structure:</b> Instances within the trim area
                  lose their original hierarchy and appear flat.
                </li>
                <li>
                  <b>Violation Preservation:</b> The checkPlace and verify_drc
                  commands will still detect the same placement and DRC
                  violations, except for those related to hierarchical
                  constraints
                </li>
                <li>
                  <b>Possible Additional DRC Violations:</b> Some minor extra
                  violations may appear due to boundary conditions in net wire
                  preservation
                </li>
                <li>
                  <b>Automated Naming Adjustments:</b> Instance and net names
                  are automatically modified if conflicts arise, with a mapping
                  file created for reference.
                </li>
                <li>
                  <b>Saving the data:</b> The trimDesign does not save binary
                  data; instead, it stores DEF, Verilog, and LEF information in
                  .txt format.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-2">
                Key Aspects of the Trimmed Design
              </h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  <b>Instances and Macros:</b> Instances inside the trim area
                  retain attributes, but hierarchical information is lost. Hard
                  macros overlapping the trim area are preserved.
                </li>
                <li>
                  <b>Naming Conflicts & Encryption:</b>Flattening the hierarchy
                  may cause name conflicts, which are resolved automatically
                  with unique suffixes. A mapping file is generated to track
                  original versus modified names.
                </li>
                <li>
                  <b>Nets and Wires:</b> Nets with instances inside the trim
                  area are retained, while those fully outside are discarded.
                  Ports are created for wires crossing the boundary.
                </li>
                <li>
                  <b>Physical Data Integrity:</b> The process preserves
                  regular/special wires, routing blockages, tracks, sites, rows,
                  and overlapping colors within the trim area.
                </li>
                <li>
                  <b>Loss of Hierarchical Information:</b> Since the trim
                  process flattens the design, hierarchical fences, instance
                  groups, and power domains are discarded.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-2">
                Limitations & Considerations
              </h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  <b>Non-Reversible Process:</b>: The trimmed design cannot be
                  restored or reintegrated into the original design.
                </li>
                <li>
                  <b>Flattened Hierarchy:</b>Instances within the trim area lose
                  their original hierarchical structure.
                </li>
                <li>
                  <b>Boundary Condition Effects:</b>Some additional DRC
                  violations may emerge due to the preservation of only certain
                  net wires crossing the trim area.
                </li>
                <li>
                  <b>Exclusion of Certain Design Features:</b> The trimming
                  process does not retain fences, regions, guides, instance
                  groups, and power domains.
                </li>
                <li>
                  <b>LEF File Requirement:</b>The trimmed design requires the
                  LEF technology file for correct placement and DRC
                  verification.
                </li>
                <li>
                  <b>Modified Naming Scheme:</b>Encrypted or altered instance
                  and net names require a mapping file for proper tracking.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
              <p className="mb-4">
                The trimDesign command in Innovus is an essential tool for
                handling large-scale VLSI designs efficiently. It allows
                engineers to isolate and analyze smaller sections while
                maintaining physical design integrity and confidentiality. By
                leveraging this functionality, debugging is accelerated, memory
                usage is reduced, and third-party IP protection is ensured,
                making it a valuable feature for modern semiconductor design
                workflows.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;
