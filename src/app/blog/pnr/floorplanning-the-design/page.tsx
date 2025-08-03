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
              <CardTitle level="h1"  className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
                Floorplanning the design
              </CardTitle>
              {/* <CardDescription>
                Efficiently manage large VLSI designs with trimDesign.
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">
                1.Target Utilization Display (TU){" "}
              </h2>
              <p className=" mb-4">
                TU metric estimates how much of a module's area will be occupied
                by standard cells and hard macros. It does not account for
                placement blockages or routing constraints. Target Utilization
                (TU%) is specified by the user. When defining a floorplan or
                module constraints, the user sets a target utilization value to
                estimate how much of the area should be occupied by standard
                cells and hard macros. This percentage helps in balancing space
                usage while leaving enough room for routing and design
                adjustments. The initial TU values are specified during design
                import.
              </p>
              <p>
                <strong> Calculation:</strong>
                TU= (Standard Cell Area + Hard Macro Area)/(Module area) <br />
                <strong>Usage and Constraints:</strong> TU values guide the
                customization of module shapes in the floorplan. When reshaping
                modules with the same area, they retain their TU values. The
                position of the module guide is a placement constraint, and the
                final definition of the module is determined by several factors,
                where the highest priority is given to connectivity between
                modules, while other constraints like preplaced blocks and
                routing blockages are considered but with lower priority.
              </p>
              <ExportedImage
                src="/images/blog/floorplan0.png"
                alt="Parasitic Transistors Formation"
                unoptimized
                width={400}
                height={200}
                className=" mx-auto"
              />
              <p>
                A stronger constraint can be used to keep modules SH19 and SH7
                close together by using the Group Instances form, and an even
                stronger constraint can be applied by saving the regrouped
                netlist.
              </p>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  2. Effective Utilization Display (EU)
                </h2>
                <p className="mb-4">
                  EU represents the actual utilization of cells and hard macros
                  within fences or regions, considering placement or routing
                  blockages, partition cuts, and other floorplan constraints. It
                  provides a more accurate measure of utilization within
                  specific areas of the design. • EU values are updated manually
                  by clicking the Query Area Density toolbar widget. • Usage: EU
                  values should be updated before running placement to ensure
                  accurate utilization. If EU exceeds 100%, the fence or region
                  is converted to a guide. Since calculating EU values can be
                  time-consuming for large designs, it is important to update
                  them before placement.
                </p>

                <h2 className="text-2xl font-semibold mb-2">
                  3. Calculating Density
                </h2>
                <p className="mb-4 ">
                  These calculations help specify the floorplan by determining
                  the core and module sizes based on total density or standard
                  cell density. The size of the core is smaller once floorplan
                  is specified using Cell Utilization. <br />
                  <strong>Core Utilization: </strong> Determines the initial
                  size of the core area and module guides. <br />
                  Core Size=(Standarad cell area + Macro area + Halo)/(Core
                  Utilization) <br />
                  Higher core utilization means a smaller core size, while lower
                  core utilization results in a larger core size with more
                  whitespace. <br />
                  <strong>Cell Utilization:</strong> Determines how densely
                  objects can be packed by weighing standard cell density
                  separately from hard macro density. <br /> Core size=
                  (Standard cell area)/(Cell utilization) +Macro area + Halo{" "}
                  <br />A lower cell utilization value results in more
                  whitespace, reducing congestion but increasing die area.
                  Higher cell utilization makes the design more compact but may
                  lead to congestion issues.
                </p>

                <h2 className="text-2xl font-semibold mb-2">
                  4. Standard Row Spacing
                </h2>
                <p>
                  The rows can be configured using the setFPlanRowSpacingAndType
                  command, the createRow command, or the options from the
                  Standard Cells Rows panel of the Specify Floorplan form.{" "}
                  <br />• The following are the row configurations supported:
                </p>
                <ExportedImage
                  src="/images/blog/floorplan1.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={400}
                  height={200}
                  className=" mx-auto"
                />
                <p>
                  • Example 1: Bottom R0 and flip/abut : createRow -limitInCore
                  -site CORE -spacing 5.4
                </p>
                <ExportedImage
                  src="/images/blog/floorplan2.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={400}
                  height={200}
                  className=" mx-auto"
                />
                <p>
                  • Example 2: Bottom R0 : createRow -limitInCore –noAbut
                  –noFlip -site CORE -spacing 5.4 <br />
                  By default, spaces are inserted between pairs of rows. When
                  -noAbut is enabled spaces are inserted between every row as
                  well.
                </p>
                <ExportedImage
                  src="/images/blog/floorplan3.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={400}
                  height={200}
                  className=" mx-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  5. Grouping Instances{" "}
                </h2>
                <ul className=" list-disc ml-6 mb-4">
                  <li>
                    Instance groups are used to create a new logical hierarchy
                    unit, and all power domains associated with an instance
                    group are assigned a constraint fence. You can create a new
                    instance group using the createInstGroup command or the
                    Group Instances form, even outside the core boundary.
                  </li>
                  <li>
                    A constraint fence ensures that only its own standard cells
                    are placed inside, and no other cells are allowed within.
                  </li>
                  <li>
                    Cadence recommends that physical-logical coherence for
                    constraint fences must always be preserved. This requirement
                    applies not only to instance groups but also to all hinsts
                    and instance groups having constraint fences.
                  </li>
                  <li>
                    Simply put, if fence A is logically part of fence B, then
                    fence A must be physically placed inside fence B to maintain
                    coherence.
                  </li>
                  <li>
                    When a new instance group is created, its hierarchy is
                    formed at the common point of the modules and submodules
                    added to that group. For example, if submodules B and F are
                    added to a new group called group_A, the hierarchy is
                    adjusted starting from their common connection point.
                  </li>

                  <ExportedImage
                    src="/images/blog/floorplan4.png"
                    alt="Parasitic Transistors Formation"
                    unoptimized
                    width={400}
                    height={200}
                    className=" mx-auto"
                  />
                  <li>
                    To add an instance to an existing instance group, use the
                    addInstToInstGroup command or select the module(s), then go
                    to Floorplan → Instance Group and choose the group name.
                  </li>
                  <li>
                    To delete an instance from an instance group, use the
                    deleteInstFromInstGroup command or select the module(s) in
                    Tools → Design Browser, and click the Delete Group/Group
                    Member icon.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  6. Defining the Bounding Box
                </h2>
                <div className="mb-4">
                  <p>
                    <strong> setObjFPlanBox </strong>– Innovus command used in
                    floorplan to define a bounding box of a specified object.{" "}
                    <br />
                  </p>
                  <p>
                    <strong> setObjFPlanBoxList –</strong> Innovus command used
                    to define rectilinear shape of an object, which is comprised
                    of two or more boxes.
                  </p>
                </div>

                <p>Eg 1</p>
                <Card className="w-full mb-6 border border-gray-700">
                  <CardContent className="p-4 bg-gray-900 rounded-md">
                    <pre className="whitespace-pre-wrap break-words text-sm">
                      setObjFPlanBox Module A 142.0 120.0 605.0 545.0
                    </pre>
                  </CardContent>
                </Card>

                <ExportedImage
                  src="/images/blog/floorplan5.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={400}
                  height={200}
                  className=" mx-auto"
                />
                <p>Eg 2</p>
                <Card className="w-full mb-6 border border-gray-700">
                  <CardContent className="p-4 bg-gray-900 rounded-md">
                    <pre className="whitespace-pre-wrap break-words text-sm">
                      setObjFPlanBoxList Module B 356.46 532.6 692.50 720.7
                      483.46 720.7 692.50 934.67  <br />The rectilinear boundary is
                      made up of two bounding boxes: (356.46 532.6 692.50 720.7)
                      and (483.46 720.7 692.50 934.67)
                    </pre>
                  </CardContent>
                </Card>

                <ExportedImage
                  src="/images/blog/floorplan6.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={400}
                  height={200}
                  className=" mx-auto"
                />
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">
                  7. Adding Logical Hierarchy Without Creating Additional
                  Hierarchy
                </h2>
                <p className="mb-6">
                  Innovus software enables to add logical hierarchy without
                  creating additional hierarchy.
                </p>
                <Card className="w-full mb-6 border border-gray-700">
                  <CardContent className="p-4 bg-gray-900 rounded-md">
                    <pre className="whitespace-pre-wrap break-words text-sm text-gray-200">
                      createInstGroup /TTT -isPhyHier <br />
                      addInstToInstGroup /TTT U5 <br />
                      addInstToInstGroup /TTT U7 <br />
                      createLogicHierarchy -commit -cell aa -newHinst TTT -objects U5 U7
                    </pre>
                  </CardContent>
                </Card>

                <ExportedImage
                  src="/images/blog/floorplan7.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={400}
                  height={200}
                  className="mx-auto my-6"
                />
                <p className="mb-8">
                  The leading slash character (/) in /TTT is required for the software to create a temporary group named /TTT.
                </p>
              </div>
              
              <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Logical Hierarchy Manipulation:
              </h2>

                <p className="mb-4">
                •	To move an instance to a new top module named TOP101, the following are the Innovus commands: 
                </p>
                <Card className="w-full mb-6 border border-gray-700">
                  <CardContent className="p-4 bg-gray-900 rounded-md">
                    <pre className="whitespace-pre-wrap break-words text-sm text-gray-200">
                    createInstGroup TOP101 -isPhyHier <br />
                    addInstToInstGroup TOP101 PMEMDSP/PRAMDLD/U10 <br />
                    addInstToInstGroup TOP101 PMEMDSP/PRAMDLD/U11 <br />
                    createLogicHierarchy -commit -cell aa -newHinst TOP101 -objects PMEMDSP/PRAMDLD/U10 PMEMDSP/PRAMDLD/U11 <br />
                    </pre>
                  </CardContent>
                </Card>
                <p className="mb-4">
                •	To move an instance to an existing module named DRAMDSP/DRAMDLD,  
                </p>
                <Card className="w-full mb-6 border border-gray-700">
                  <CardContent className="p-4 bg-gray-900 rounded-md">
                    <pre className="whitespace-pre-wrap break-words text-sm text-gray-200">
                    createInstGroup /DRAMDSP/DRAMDLD -isPhyHier <br />
                    addInstToInstGroup /DRAMDSP/DRAMDLD DIFTOP/DIF/U13 <br />
                    addInstToInstGroup /DRAMDSP/DRAMDLD DIFTOP/DIF/U14 <br />
                    createLogicHierarchy -commit -cell aa -newHinst /DRAMDSP/DRAMDLD -objects DIFTOP/DIF/U13 DIFTOP/DIF/U14 <br />
                    
                    </pre>
                  </CardContent>
                </Card>
              </div>

              
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;
