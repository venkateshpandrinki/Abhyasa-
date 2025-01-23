'use client'
import { useParams } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback,  } from "@/components/ui/avatar" 
import { Clock, User } from "lucide-react"

import { blogPosts } from "@/lib/blogdata"
import Navbar from "@/components/Navbar"
import ExportedImage from "next-image-export-optimizer"


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function BlogPostPage() {
  const tbdata = [
    {
        "FC": "start_gui",
        "Innovus": "win",
        "Requirement": " open the gui from shell"
    },
    {
        "FC": "stop_gui",
        "Innovus": "win off",
        "Requirement": " close the gui"
    },
    {
        "FC": "fc_shell  -f    <file_path.tcl>",
        "Innovus": "innovus   -init    <file_path.tcl>",
        "Requirement": " source a file while launching the tool"
    },
    {
        "FC": "open_lib test.ndm",
        "Innovus": " source test.enc or",
        "Requirement": " open a design"
    },
    {
        "FC": "open_block test.design",
        "Innovus": "restoreDesign test.enc.dat <block name>",
        "Requirement": ""
    },
    {
        "FC": "set_host_options  ",
        "Innovus": "setMultiCpuUsage",
        "Requirement": " To use multicpu"
    },
    {
        "FC": "check_design",
        "Innovus": " check_design",
        "Requirement": " Get the design stats and sanity checks"
    },
    {
        "FC": "check_timing",
        "Innovus": " check_timing",
        "Requirement": " Timing sanity check"
    },
    {
        "FC": "check_pg_drc",
        "Innovus": "checkDesign -floorplan  -noHtml  -outfile   checkDesign.ascii",
        "Requirement": " check powerplan"
    },
    {
        "FC": "set_technology  -node ",
        "Innovus": "setDesignMode",
        "Requirement": "sets the technology node"
    },
    {
        "FC": "get_cells , get_nets, get_* commands",
        "Innovus": "get_cells , get_nets, get_* commands",
        "Requirement": "Find objects in the design"
    },
    {
        "FC": "change_selection  [get_cells <inst name>]",
        "Innovus": " SelectInst <inst name>",
        "Requirement": " Select a particular instance in the design"
    },
    {
        "FC": "change_selection [get_nets <net name>]",
        "Innovus": "selectNet <net name>",
        "Requirement": " Select a net in the design"
    },
    {
        "FC": "get_cells  -hier   -filter   \"\"ref_name==<lib cell name>\"\"",
        "Innovus": "get_cells  -hier   -filter {ref_lib_cell_name == <lib cell name>}",
        "Requirement": " Find cells with lib name"
    },
    {
        "FC": "Get_attribute [get_core_area] name",
        "Innovus": "dbGet top.name",
        "Requirement": " Find the top name of the design"
    },
    {
        "FC": "report_attributes [get_cells hbi_ns] -application\n",
        "Innovus": "dbGet selected.??\n",
        "Requirement": "Get all the attributes of a selected object"
    },
    {
        "FC": "get_attribute [get_selection] <press tab here>\n",
        "Innovus": "dbGet top.<press tab here>\n",
        "Requirement": " If you press tab key after a . (dot) it will display all the possible options there.  you can try\n"
    },
    {
        "FC": "get_attribute [get_selection] name\n",
        "Innovus": "dbGet selected.name\n",
        "Requirement": "Get the name of the selected object (instance, net, ports or any other objects).\n"
    },
    {
        "FC": "Get_attribute [get_selection] ref_name\n",
        "Innovus": "dbGet selected.cell.name\n",
        "Requirement": " Get the cell name of a selected  Instance. \n"
    },
    {
        "FC": "get_pins -of_objects [get_selection] \n",
        "Innovus": "dbGet selected.cell.terms.name\n",
        "Requirement": " Get all the pins of a selected  Instance. \n"
    },
    {
        "FC": "Report_units \n",
        "Innovus": "dbGet head.dbUnits\n",
        "Requirement": " Get the database unit \n"
    },
    {
        "FC": "<>",
        "Innovus": "dbGet head.mfgGrid\n",
        "Requirement": " Get the manufacturing grid value \n"
    },
    {
        "FC": "get_layers -all_purposes",
        "Innovus": "dbGet head.layers.name\n",
        "Requirement": "Get all  the layers name\n"
    },
    {
        "FC": "get_object_name [get_layers -filter layer_type==interconnect]\n",
        "Innovus": "dbGet [dbGet head.layers.type routing -p].name",
        "Requirement": "Get all  the routing layers name\n"
    },
    {
        "FC": "get_attribute [get_layers TM1] min_width\n",
        "Innovus": "dbGet [dbGet [dbGet head.layers.type routing -p].name *2 -p].minWidth\n",
        "Requirement": " Get the parameters of any particular routing layer (like Masks, Directions, pitch, minWidth, minSpacing etc )\n"
    },
    {
        "FC": "get_attribute [get_lib_cells *] function\n",
        "Innovus": "dbGet head.libCells.name <cell_name> \n",
        "Requirement": " Get the information of a cell which is present in std. cell library but not in design.\n"
    },
    {
        "FC": "<>\n",
        "Innovus": "dbGet [dbGet head.allCells.objType libCell -p]{.numRefs > 100}\n",
        "Requirement": " Get the pointers of all the cells which are used more than 100 times in the design\n"
    },
    {
        "FC": "get_lib_cells */* -filter \"\"cell_footprint=~*inv*\"",
        "Innovus": "dbGet [dbGet head.libCells.isInverter 1 -p].name \n",
        "Requirement": " Get all the inverter cells available in the library.\n"
    },
    {
        "FC": "get_attribute [get_core_area] bbox",
        "Innovus": "dbGet top.fPlan.box.size\n",
        "Requirement": " Get  the size of your block\n"
    },
    {
        "FC": "get_attribute [get_core_area ] area\n",
        "Innovus": "dbGet top.fPlan.area\n",
        "Requirement": "Get the area of your block"
    },
    {
        "FC": "get_power_domains * -hierarchical\n",
        "Innovus": "dbGet top.fPlan.groups.pd.name \n",
        "Requirement": "Get all the power domains availble in the design\n"
    },
    {
        "FC": "Get_attribute [get_ports *] name\n",
        "Innovus": "dbGet top.terms.name\n",
        "Requirement": " Find all the block level ports name \n"
    },
    {
        "FC": "lsort -u [get_attribute [get_ports *] layer_name]\n",
        "Innovus": "dbGet top.terms.pins.allShapes.layer.name -u\n",
        "Requirement": "Find the metal layers used in block level IO ports\n"
    },
    {
        "FC": "sizeof_collection [get_ports *]   (or)  llength [dbGet top.terms]\n",
        "Innovus": "dbGet top.numTerms\n",
        "Requirement": "Get the count of block level ports \n"
    },
    {
        "FC": "llength [dbGet top.terms.inOutput 1 -p]\nsizeof_collection [get_ports * -filter \"\"direction==out\"\"]\n",
        "Innovus": "dbGet top.numInputs\n",
        "Requirement": "Get all input and output ports \n"
    },
    {
        "FC": "get_attribute [get_ports *] is_clock      \nget_attribute [get_ports *] is_scan\n",
        "Innovus": "llength [dbGet top.terms.isClk 1 -p]     \nllength [dbGet top.terms.isScanClk 1 -p]\n",
        "Requirement": "Get all clock and scan clock pins\n"
    },
    {
        "FC": "get_attribute [get_ports *] edge_number\n",
        "Innovus": "dbGet [dbGet top.terms.name <port_name> -p].edge \n",
        "Requirement": " Get the edge number where a port is placed\n"
    },
    {
        "FC": " get_ports *FT* -filter \"\"edge_number==3\"",
        "Innovus": "dbGet [dbGet top.terms.edge 3 -p].name *ft*  \n",
        "Requirement": "Get all the feedthru ports name which is placed on a particular edge number (suppose 3)\n"
    },
    {
        "FC": "get_attribute [get_flat_cells *] name\n",
        "Innovus": "dbGet top.insts.name\n",
        "Requirement": "Get the name of all the instances present in the design. \n"
    },
    {
        "FC": "get_cells * -hier -filter \"\"ref_name=~*<cell_name>*\"",
        "Innovus": "dbGet [dbGet top.insts.cell.name <cell_name> -p2].name\n",
        "Requirement": "Get all the instances name of a particular cell \n"
    },
    {
        "FC": "Get_cells * -hier -filter \"\"is_physical_only==true\"",
        "Innovus": "dbGet [dbGet top.insts.cell.isPhyOnly 1 -p].name -u\n",
        "Requirement": "Get all the physical cells present in the design \n"
    },
    {
        "FC": "join [get_object_name [get_ports *]] \\n\n",
        "Innovus": "join [dbGet [dbGet top.insts.cell.isPhyOnly 1 -p].name -u ] \\n\n",
        "Requirement": "Suppose you want to print all the names in a new line, you can use join them like below.\n"
    },
    {
        "FC": "llength [get_object_name [get_ports *]]\n",
        "Innovus": "llength [dbGet [dbGet top.insts.cell.isPhyOnly 1 -p].name -u ]\n",
        "Requirement": "Suppose you want only a number that how many types of physical cells have been used, llength can be used in that case before the dbGet command.\n"
    },
    {
        "FC": "llength [get_object_name [get_cells * -hier -filter \"\"is_physical_only==true\"\"]]\n",
        "Innovus": "llength [dbGet top.insts.cell.isPhyOnly 1 -p2]\n",
        "Requirement": "Find the total number of physical cell instances used in the design  \n"
    },
    {
        "FC": "<>\n",
        "Innovus": "llength [dbGet top.insts.cell.numTerms 1 -p2]\n",
        "Requirement": " Find all the instances which have only one pins (like tie cells, antenna cells)\n"
    },
    {
        "FC": "llength [get_object_name [get_cells *TAP* -hier -filter \"\"is_physical_only==true\"\"]]\n",
        "Innovus": "llength [dbGet top.insts.cell.name <*TAP*> -p2]\n",
        "Requirement": " Find total numbers of well tap instances used in the design \n"
    },
    {
        "FC": "llength [lsort -u [get_attribute [get_cells *TAP* -hier -filter \"\"is_physical_only==true\"\"] ref_name]]\n",
        "Innovus": "llength [dbGet top.insts.cell.name <*TAP*> -p -u]",
        "Requirement": " Find total types of well tap cells used in the design \n"
    },
    {
        "FC": "lsort -u [get_attribute [get_cells *TAP* -hier -filter \"\"is_physical_only==true\"\"] ref_name]\n",
        "Innovus": "dbGet [dbGet top.insts.cell.name <*TAP*> -p].name -u\n",
        "Requirement": " Find  the name of all uniq types of well tap cells used in the design \n"
    },
    {
        "FC": "lsort -u [get_attribute [get_cells *BOUNDARY* -hier -filter \"\"is_physical_only==true\"\"] ref_name]\n",
        "Innovus": "dbGet [dbGet top.insts.cell.name <*BOUNDARY*> -p].name -u\n",
        "Requirement": "Find the name of all the unique types of boundary cells used in the design\n"
    },
    {
        "FC": "get_cells * -hier -filter \"\"is_hard_macro==true\"",
        "Innovus": "dbGet [dbGet top.insts.cell.baseClass block -p2].name",
        "Requirement": " Find the name of all the macro’s in your design"
    },
    {
        "FC": "get_cells * -hier -filter \"\"is_hard_macro==true&&ref_name!~*<ref name you want to exclude*\"",
        "Innovus": "dbGet [dbGet top.insts.cell.baseClass block -p2].name -v <uniq_name_pattern_of those_macros>",
        "Requirement": "Suppose you want to exclude few macros like ESD cells or any othere from this list, then you can use -v option with this. like below."
    },
    {
        "FC": "get_cells * -hier -filter \"\"is_sequential==true\"",
        "Innovus": "dbGet [dbGet top.insts.cell.isSequential 1 -p2].name",
        "Requirement": " Find the name of all sequential elements (registers/flip flops) in the design"
    },
    {
        "FC": "get_cells * -hier -filter \"\"dont_touch==true\"",
        "Innovus": "dbGet [dbGet top.insts.isDontTouch 1 -p].name",
        "Requirement": " Find the name of all the don’t touch instance"
    },
    {
        "FC": "get_cells * -hier -filter \"\"physical_status==fixed\"",
        "Innovus": "dbGet [dbGet top.insts.pStatus fixed -p].name",
        "Requirement": " Get the name of all the instance in your design which has fixed placement status"
    },
    {
        "FC": "get_attribute [get_cells <> -hier] ll\n",
        "Innovus": "dbGet [dbGet top.insts.name <inst_name> -p].pt\n",
        "Requirement": " Find the lower left cordinate of an instance \n"
    },
    {
        "FC": "get_attribute [get_selection] ll\n",
        "Innovus": "dbGet selected.pt\n",
        "Requirement": "Or you can first select the instance and then use following command.\n"
    },
    {
        "FC": "get_attribute [get_selection] ll_x\nget_attribute [get_selection] ll_y\n",
        "Innovus": "dbGet selected.pt_x \ndbGet selected.pt_y\n",
        "Requirement": "In case you want only x-coordinate or only y coordinate, you may use following command.\n"
    },
    {
        "FC": "get_attribute [get_cells <> -hier ] width\nget_attribute [get_cells <> -hier ] hieght\n",
        "Innovus": "set width [dbGet [dbGet top.insts.cell.name <cell_name> -p].size_x -u]\nset height [dbGet [dbGet top.insts.cell.name <cell_name> -p].size_y -u]\n",
        "Requirement": "Find the width and height of a cell\n"
    },
    {
        "FC": "get_attribute [get_selection] width\nget_attribute [get_selection] height\n",
        "Innovus": "dbGet [dbGet selected.cell.name <cell_name> -p].size_x -u\n",
        "Requirement": "Or we can select the instance and use following command\n"
    },
    {
        "FC": "get_attribute [get_lib_cells */*<name>*] height\n",
        "Innovus": "dbGet [dbGet head.libCells.name <cell_name> -p].size_x -u\n",
        "Requirement": "Or If that cell is not present in the design we can use following command\n"
    },
    {
        "FC": "get_attribute [get_pins *<name>*] bbox\n",
        "Innovus": "dbGet [dbGet top.insts.instTerms.name <inst_term_name> -p].pt\n",
        "Requirement": "Find the cordinate of a pin of an instance \n"
    },
    {
        "FC": "get_attribute [get_cells *<name>* -hier] physical_status\n",
        "Innovus": "dbGet [dbGet top.insts.name <inst_name> -p].pStatus\n",
        "Requirement": " Find the placement status of an instance\n"
    },
    {
        "FC": "set_attribute [get_cells *<name>* -hier] -name physical_status -value <fixed/placed/unrestricted>\n",
        "Innovus": "dbSet [dbGet top.insts.name <inst_name> -p].pStatus <fixed | placed >\n",
        "Requirement": "We can also change the pStatus of an instance using dbSet command.\n"
    },
    {
        "FC": "Get_attribute [get_nets *] name\n",
        "Innovus": "dbGet top.nets.name \n",
        "Requirement": "Get the name of all the nets in the design\n"
    },
    {
        "FC": "get_attribute [get_nets * -filter \"\"net_type==power || net_type==ground\"\"] name",
        "Innovus": "dbGet [dbGet top.nets.isPwrOrGnd 1 -p].name\n",
        "Requirement": " Get all the power and ground nets name in the design \n"
    },
    {
        "FC": "get_attribute [get_nets * -filter \"\"net_type!=power && net_type!=ground\"\"] name\n",
        "Innovus": "dbGet [dbGet [dbGet [dbGet top.nets.isClock 0 -p].isPwr 0 -p].isGnd 0 -p].name\n",
        "Requirement": "Get all the signal nets only (except clock, power nad ground) \n"
    },
    {
        "FC": "get_nets *<pattern>*",
        "Innovus": "dbGet top.nets.name <*pattern*>",
        "Requirement": "Find the name of all the nets with a particular pattern in net name"
    },
    {
        "FC": "get_attribute [get_nets * -filter \"\"net_type==clock\"\"] name\n",
        "Innovus": "dbGet [dbGet top.nets.isCTSClock 1 -p].name \n",
        "Requirement": " Find the name of all the CTS clock nets\n"
    },
    {
        "FC": "get_nets -of_objects [get_pins <pin_name> -hier] \n",
        "Innovus": "dbGet [dbGet top.insts.instTerms.name <full_inst_pin_name> -p2].net.name \n",
        "Requirement": "Find the net name connected to a pin of an instance\n"
    },
    {
        "FC": "get_attribute [get_shapes -of_objects [get_nets *<pattern>*]] shape_use",
        "Innovus": "dbGet [dbGet top.nets.name <net_name>].wires.status\n",
        "Requirement": "Get the routing status of a net \n"
    },
    {
        "FC": "set_attribute [get_shapes -of_objects [get_nets *<pattern>*]] -name shape_use -value <global/shield/user/detail>\nset_attribute [get_shapes -of_objects [get_nets *<pattern>*]] -name physical_status -value <fixed/locked/unrestricted>\n",
        "Innovus": "dbSet [dbGet top.nets.name <net_name>].wires.status <fixed | routed>",
        "Requirement": "Further we can change the routing status of the net using dbSet command \n"
    },
    {
        "FC": "report_routing_rules\nreport_clock_routing_rules\n",
        "Innovus": "dbGet head.rules.name",
        "Requirement": " Get all the NDR used in the design\n"
    },
    {
        "FC": "change_selection [get_cells <name> -hier]\nset box [get_attribute [get_selection] bbox]\nforeach {x1 y1 x2 y2} [lindex $box 0] {break;}\n",
        "Innovus": "selectInst <inst_name>\nset box [dbGet [dbGet top.insts.name <inst_name> -p].box]\nforeach {x1 y1 x2 y2} [lindex $box 0] {break;}\n",
        "Requirement": " llx lly urx ury all four coordinate in four variable of an instance \n"
    },
    {
        "FC": "set un [get_selection]\nget_attribute [get_selection] object_type\n",
        "Innovus": "set un selected.name\ndbGet [dbGetObjByName $un].objType \n",
        "Requirement": " Get object type of an unknown object\n"
    },
    {
        "FC": "sizeof_collection [get_cells * -hier -filter \"\"ref_name=~*ULVT* && is_physical_only==false\"\"]",
        "Innovus": "llength [dbGet [dbGet top.insts.isPhyOnly 0 -p].cell.name *ULVT* -e]",
        "Requirement": "Get the count of ULVT cells in the design (excluding  physical only cells)\n"
    },
    {
        "FC": "get_attribute [get_cells ctmTdsLR_1_31388] bbox",
        "Innovus": "dbget [dbget top.insts.name I_PRO_FE_PSBC3430_N_preCTS_FE_OFN1626848_CL0_CPU0_HRDATAD_dbg_13_N_bbuf -p1].box",
        "Requirement": "llx lly urx ury all four coordinate of an instance"
    },
    {
        "FC": "report_routing_rules",
        "Innovus": "dbget [dbget [dbget top.nets.name * -p1].isClock 1 -p1].rule.name -u",
        "Requirement": "Get all the NDR used in the design"
    },
    {
        "FC": "get_attribute [get_nets net_name ] physical status",
        "Innovus": "dbget [dbget top.nets.name CL0_CPU0_IRQ[248] -p1].wires.status -u",
        "Requirement": "Get the routing status of a net"
    },
    {
        "FC": "get_flat_nets -all -filter “net_type==clock”",
        "Innovus": "dbget [dbget [dbget top.nets.name * -p1].isCTSClock 1 -p1].name",
        "Requirement": "Find the name of all the CTS clock nets"
    },
    {
        "FC": "get_nets -of_objects AES_core_keymem/key_mem_reg_9__90_/CP",
        "Innovus": "dbget [dbget [dbget top.insts.name I_PRO_FE_PSBC3401_CL0_PAXI_S_IF_WDATA_48_N_bbuf -p1].instTerms.name * -p].net.name",
        "Requirement": "Find the net name connected to a pin of an instance"
    },
    {
        "FC": "get_nets <net_pattern*>",
        "Innovus": "dbget top.nets.name *<pattern>*",
        "Requirement": "Find the name of all the nets with a particular pattern in net name"
    },
    {
        "FC": "get_attribute [get_flat_nets -all -filter “net_type==signal”] name",
        "Innovus": "dbget [dbget [dbget top.nets.name * -p1] {.isClock == 0 && .isPwr ==0 && .isGnd == 0}].name -u",
        "Requirement": "Get all the signal nets only (except clock, power and ground)"
    },
    {
        "FC": "get_nets",
        "Innovus": "dbget top.nets.name *",
        "Requirement": "Get the name of all the nets in the design"
    },
    {
        "FC": "get_attribute [get_cells <cell_name>] physical_status",
        "Innovus": "dbget [dbget top.insts.name I_PRO_FE_PSBC3295_HBUS_S_AXI_ARID_3_N_bbuf -p1].pStatus",
        "Requirement": "Find the placement status of an instance"
    },
    {
        "FC": "report_net_fanout -threshold 50",
        "Innovus": "foreach i [get_object_name [get_nets *]] { if {[llength [get_object_name [all_connected [get_nets $i]]]] > 2} { puts $i}}",
        "Requirement": "Get all nets having max fanout greater than specified number"
    },
    {
        "FC": "get_attribute [get_cells ctmTdsLR_1_31388] height",
        "Innovus": "dbget [dbget top.insts.name I_PRO_FE_PSBC3389_N_ccopt_FE_OFN1804932_CL1_CPU1_HRDATAD_dbg_14_N_bbuf -p1].box_sizeY",
        "Requirement": "Find the width and height of a cell"
    },
    {
        "FC": "report_corners",
        "Innovus": "report_analysis_views",
        "Requirement": "Get the temperature and delay corners of design"
    },
    {
        "FC": "get_cells -filter “physical_status == fixed”",
        "Innovus": "dbget [dbget [dbget top.insts.name * -p1 ].pStatus fixed -p1].name",
        "Requirement": "Get the name of all the instance in your design which has fixed placement status"
    },
    {
        "FC": "report_dont_touch –all",
        "Innovus": "dbget [dbget [dbget top.insts.name * -p1 ].dontTouch true -p1].name",
        "Requirement": "Find the name of all the don’t touch instance"
    }
]
  useParams();
  const post = blogPosts[2]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className=" bg-gradient-to-br from-black via-gray-900 to-gray-800 ">
    <Navbar/>
    <div className="min-h-screen text-white flex items-center justify-center p-4">
      <Card className="w-full md:max-w-7xl max-w-4xl bg-gray-800 bg-opacity-50 border-none">
        <CardContent className="p-6 md:p-8">
          <div className="space-y-6">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <ExportedImage
                src={post.imageUrl}
                alt={post.title}
                fill
                className="transition-transform duration-300 object-contain  hover:scale-105"
                />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              <p className="text-lg text-gray-200">{post.excerpt}</p>
              <p className="mt-4 text-gray-300 whitespace-break-spaces">

              <Table className="border border-gray-600  text-wrap">
                <TableHeader className=" ">
                  <TableRow className="">
                    <TableHead className="border border-gray-600 text-white text-lg">Fc</TableHead>
                    <TableHead className="border border-gray-600 text-white text-lg">Innovus</TableHead>
                    <TableHead className="border border-gray-600 text-white text-lg">Requirement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tbdata.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className=" border  border-gray-600">{row.FC}</TableCell>
                      <TableCell  className=" border border-gray-600 ">{row.Innovus}</TableCell>
                      <TableCell className=" border border-gray-600">{row.Requirement}</TableCell>
                    </TableRow>
                  ))}
                  
                 
                </TableBody>
                  </Table>
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
                </div>
  )
}
