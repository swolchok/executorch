Search.setIndex({"docnames": ["compiler-custom-compiler-passes", "compiler-delegate-and-partitioner", "compiler-kernel-fusion-pass", "compiler-memory-planning", "export-overview", "export-user-guide", "getting-started-architecture", "getting-started-setup", "index", "intro-how-it-works", "intro-overview", "ir-exir", "ir-high-order-operators", "ir-ops-set-definition", "kernel-library-custom-aten-kernel", "kernel-library-overview", "markdown-sphinx-tips-tricks", "quantization-custom-quantization", "runtime-api", "runtime-backend-delegate-implementation-and-linking", "runtime-build-and-cross-compilation", "runtime-custom-memory-allocator", "runtime-error-handling", "runtime-overview", "runtime-platform-abstraction-layer", "sdk-bundled-io", "sdk-debugging", "sdk-delegate-integration", "sdk-profiling", "tutorials/export-to-executorch-tutorial", "tutorials/index", "tutorials/sg_execution_times", "tutorials/template_tutorial"], "filenames": ["compiler-custom-compiler-passes.md", "compiler-delegate-and-partitioner.md", "compiler-kernel-fusion-pass.md", "compiler-memory-planning.md", "export-overview.rst", "export-user-guide.rst", "getting-started-architecture.md", "getting-started-setup.md", "index.rst", "intro-how-it-works.md", "intro-overview.md", "ir-exir.md", "ir-high-order-operators.md", "ir-ops-set-definition.md", "kernel-library-custom-aten-kernel.md", "kernel-library-overview.md", "markdown-sphinx-tips-tricks.md", "quantization-custom-quantization.md", "runtime-api.md", "runtime-backend-delegate-implementation-and-linking.md", "runtime-build-and-cross-compilation.md", "runtime-custom-memory-allocator.md", "runtime-error-handling.md", "runtime-overview.md", "runtime-platform-abstraction-layer.md", "sdk-bundled-io.md", "sdk-debugging.md", "sdk-delegate-integration.md", "sdk-profiling.md", "tutorials/export-to-executorch-tutorial.rst", "tutorials/index.rst", "tutorials/sg_execution_times.rst", "tutorials/template_tutorial.rst"], "titles": ["Custom Compiler Passes and Partitioners", "Backend and Delegate", "Kernel Fusion Pass", "Memory Planning", "Exporting to Executorch", "Export User Guide", "High-level Architecture and Components of ExecuTorch", "Setting Up ExecuTorch", "Welcome to the ExecuTorch Documentation", "How does ExecuTorch work", "ExecuTorch Overview", "EXIR", "High-order Operators", "OpSet definition", "Custom ATen Compliant Kernel Implementation and Linking", "Kernel Library Overview", "Markdown in Sphinx Tips and Tricks", "Custom Quantization", "Runtime API", "Backend Delegate Implementation and Linking", "Build and cross-compilation", "Custom Memory Allocator", "Runtime Error Handling", "Runtime Overview", "Platform Abstraction Layer", "BundledIO", "Debugging", "Delegate Integration", "Profiling", "Exporting to ExecuTorch Tutorial", "Tutorials", "Computation times", "Template Tutorial"], "terms": {"can": [0, 1, 8, 9, 16, 29, 32], "roughli": 0, "categor": 0, "coupl": [0, 1], "ax": 0, "axi": 0, "A": [0, 1, 4, 8, 16, 29], "creat": [0, 1, 29, 32], "one": [0, 1, 8, 16, 29, 32], "map": [0, 1, 16], "exampl": [0, 1, 16, 29, 30, 32], "decomposit": 0, "mani": 0, "fusion": [0, 9], "b": [0, 1, 16, 29], "perform": [0, 1, 8, 9], "forward": [0, 1, 29], "iter": 0, "shape": [0, 9, 29], "propag": 0, "backward": [0, 8], "dead": 0, "code": [0, 1, 30, 32], "elimin": [0, 9], "c": [0, 9, 16, 29], "depend": [0, 1], "node": [0, 1, 9, 29], "eg": 0, "out": [0, 1, 8, 9, 29], "variant": [0, 29], "convers": [0, 9, 29], "global": 0, "graph": [0, 1, 8, 9, 29], "memori": [0, 9], "plan": [0, 1, 9], "our": [0, 29], "project": [0, 8], "frequenc": 0, "us": [0, 1, 8, 9, 16, 29, 32], "case": [0, 1, 9, 29], "ar": [0, 1, 8, 9, 29], "For": [0, 1, 8, 16, 32], "look": [0, 1, 16, 29], "we": [0, 1, 8, 9, 16, 29], "helper": [0, 1], "class": [0, 1, 16, 29], "call": [0, 1, 9, 29], "exportpass": [0, 29], "thi": [0, 1, 5, 8, 9, 16, 18, 29, 32], "an": [0, 1, 8, 9, 16, 18, 29], "interpret": 0, "wai": [0, 1, 29], "where": [0, 1, 9, 29], "execut": [0, 9, 31], "each": [0, 29], "recreat": 0, "except": [0, 8, 29], "transform": [0, 1, 29], "specifi": [0, 1, 29], "allow": [0, 9, 16, 29], "preserv": [0, 9], "ir": [0, 1, 8, 29], "spec": [0, 1, 29], "ensur": 0, "all": [0, 1, 8, 29, 30, 32], "while": [0, 1, 9, 29], "meet": 0, "includ": [0, 1, 9, 16, 29], "metadata": [0, 29], "stack": [0, 29], "trace": [0, 1, 29], "faketensor": 0, "valu": [0, 1, 29], "torch": [0, 1, 8, 29, 32], "nn": [0, 1, 29], "modul": 0, "heirarchi": 0, "updat": 0, "made": [0, 9], "To": [0, 1, 8, 29, 32], "implement": [0, 1, 9, 29], "subclass": 0, "expos": 0, "function": [0, 1, 9, 29], "when": [0, 1, 9, 29], "run": [0, 1, 8, 9, 32], "new": [0, 9, 29], "contain": [0, 1, 29], "chang": [0, 1, 8, 29], "mean": [0, 1, 29], "must": [0, 29], "runnabl": [0, 8], "cpu": [0, 29], "invari": 0, "maintain": [0, 8], "after": [0, 1, 16, 29], "want": [0, 1, 8, 29], "replac": [0, 29], "op": [0, 9, 29], "anoth": [0, 1, 16], "given": [0, 1, 8, 9, 29], "fx": [0, 1, 29], "graphmodul": [0, 1, 29], "everi": 0, "time": [0, 8, 9, 29, 32], "see": [0, 1, 8, 16, 29], "return": [0, 1, 29], "consid": [0, 9], "follow": [0, 1, 9, 29, 32], "replaceinplacereluwithoutofplacerelupass": 0, "relu_": 0, "place": [0, 29], "version": 0, "relu": [0, 29], "which": [0, 1, 9, 29], "def": [0, 1, 16, 29], "call_oper": [0, 29], "self": [0, 1, 16, 29], "arg": [0, 1, 29], "kwarg": [0, 29], "meta": [0, 1, 29], "aten": [0, 9, 29], "default": [0, 29], "super": [0, 1, 29], "replace_pass": 0, "new_graph_modul": 0, "graph_modul": [0, 29], "The": [0, 1, 9, 16, 29, 32], "call_funct": 0, "result": [0, 1, 9, 29, 32], "oper": [0, 1, 8, 9, 29], "argument": [0, 29], "If": [0, 1, 8, 29, 32], "do": [0, 1, 9, 29, 32], "like": [0, 1, 8, 16, 29, 32], "other": [0, 1, 16, 29, 32], "would": [0, 29], "make": [0, 1, 9, 29, 32], "replaceaddwithmulsub": 0, "origin": [0, 9, 29], "f": [0, 1, 29], "y": [0, 1, 29], "z": [0, 29], "add": [0, 1, 16, 29, 32], "mul_r": 0, "mul": [0, 1, 29], "sub": [0, 29], "remov": [0, 32], "just": [0, 1], "removedetachpass": 0, "detach": 0, "detach_copi": 0, "assert": 0, "len": 0, "0": [0, 1, 9, 29, 31, 32], "convert": [0, 1, 9, 29], "scalar": [0, 29], "within": [0, 1, 29], "tensor": [0, 9, 29, 32], "It": [0, 1, 4, 5, 9, 29], "might": [0, 8, 18, 29], "someth": [0, 1], "args_map": 0, "fn": 0, "isinst": 0, "tupl": [0, 29], "dict": 0, "list": [0, 1, 9, 16, 29], "copi": [0, 32], "kei": [0, 32], "schema": 0, "i": [0, 16, 29], "enumer": 0, "_schema": 0, "name": [0, 1, 16, 29], "elif": 0, "kwarg_onli": 0, "scalartotensorpass": 0, "try_coerc": 0, "float": 0, "int": 0, "bool": 0, "type": [0, 1, 29], "tensortyp": 0, "els": [0, 29], "s": [0, 1, 9, 29], "rewrit": 0, "pattern": 0, "match": 0, "inplac": 0, "input": [0, 1, 9, 29], "callabl": [0, 29], "written": [0, 9], "same": [0, 9, 29], "exir": [0, 1, 8, 9, 29], "you": [0, 8, 16, 29, 32], "so": [0, 29], "find": [0, 1], "correct": 0, "treat": 0, "wildcard": 0, "from": [0, 1, 8, 9, 16, 29, 32], "import": [0, 1, 29, 32], "subgraph_rewrit": 0, "replace_pattern": 0, "replaced_pattern": 0, "replace_pattern_with_filt": 0, "traced_modul": 0, "replacedpattern": 0, "dataclass": 0, "wa": [0, 9, 29], "found": [0, 1, 16, 29], "anchor": 0, "larger": 0, "nodes_map": 0, "were": [0, 32], "ad": [0, 1], "have": [0, 1, 9, 29, 32], "normal": 0, "stack_trac": 0, "val": 0, "nn_module_stack": 0, "third": [0, 1, 9, 29], "most": [0, 1, 9, 16, 29], "basic": 0, "passbas": 0, "content": [0, 16, 29], "addition": [0, 9, 29], "requir": [0, 1, 29], "befor": [0, 1, 8, 16, 29], "note": [0, 16, 29], "also": [0, 1, 8, 9, 29], "overridden": 0, "directli": [0, 1, 29], "instanc": 0, "replaceaddpass": 0, "__init__": [0, 1, 16, 29], "replace_op": 0, "gm": [0, 1], "target": [0, 9, 29], "option": [0, 1, 29], "rais": [0, 29], "valueerror": 0, "No": [0, 9, 29], "replace_add_with_div": 0, "div": [0, 29], "passmanag": 0, "multipl": [0, 1, 9, 29], "initi": 0, "set": [0, 9, 29], "flag": [0, 8], "collect": 0, "executorch": [0, 1, 30, 31], "pass_manag": 0, "pm": 0, "replace_div_with_mul": 0, "run_checks_after_each_pass": 0, "true": 0, "suppress_check_failur": 0, "fals": [0, 29], "graph_module_out": 0, "common": [0, 16], "check": [0, 8, 29], "set_check": 0, "take": [0, 1, 29], "check_div_target": 0, "should": [0, 1, 8], "add_check": 0, "There": [0, 1, 9, 29], "partit": 0, "howev": [0, 1, 8], "necessarili": 0, "produc": [0, 1], "compliant": [0, 9], "care": 0, "them": [0, 8, 29], "specif": [0, 1, 9, 29, 32], "subgraphmatch": 0, "attribut": [0, 29], "placehold": [0, 1], "match_output": 0, "output": [0, 9, 16, 29, 32], "part": [0, 1, 8, 9], "ignor": [0, 29], "dure": [0, 1, 9, 29], "match_placehold": 0, "remove_overlapping_match": 0, "overlap": 0, "onli": [0, 1, 9, 16, 29, 32], "first": [0, 1, 9, 29], "ignore_liter": 0, "liter": 0, "equal": [0, 29], "instead": [0, 29], "matcher_util": 0, "largemodel": 0, "_weight": 0, "paramet": [0, 1, 16, 29], "ones": [0, 1, 29], "_bia": 0, "addmm": 0, "large_model_graph": 0, "captur": [0, 1, 9, 29], "large_input": 0, "to_edg": [0, 1, 29], "patternmodel": 0, "_weight_1": 0, "5": [0, 1, 29, 32], "_bias_1": 0, "pattern_graph": 0, "pattern_input": 0, "subgraph_match": 0, "match_result": 0, "internalmatch": 0, "field": 0, "default_factori": 0, "placeholder_nod": 0, "returning_nod": 0, "largest": 0, "support": [0, 1, 9], "capabilitybasedpartition": 0, "operator_support": 0, "operatorsupportbas": 0, "object": [0, 29], "determin": 0, "allows_single_node_partit": 0, "singl": 0, "form": 0, "non_compute_op": 0, "sequenc": 0, "str": [0, 1], "non": [0, 1], "comput": [0, 9, 29], "ex": 0, "view": 0, "_oper": 0, "getitem": [0, 29], "allowed_single_node_partition_op": 0, "belong": 0, "done": [0, 1, 29], "overrid": 0, "is_node_support": 0, "chain": 0, "operatorsuppportbas": 0, "ani": [0, 1, 9, 29], "any_chain": 0, "infra": 0, "addmuloperatorsupport": 0, "submodul": [0, 1], "capability_partition": 0, "op_support": 0, "partition_list": 0, "propose_partit": 0, "mai": [0, 1, 8, 9], "fuse_partit": 0, "modifi": [0, 16], "toplevel": 0, "through": [0, 1, 8, 9, 29, 32], "call_modul": 0, "becaus": [0, 8, 9, 29], "provid": [0, 1, 8, 9, 29], "generate_pattern_op_partit": 0, "These": [0, 1, 8, 9], "obtain": 0, "recommend": 0, "symbol": [0, 29], "accur": 0, "edg": [0, 1, 9], "dialect": [0, 1], "manual": 0, "craft": 0, "get": [0, 1, 30], "create_op_support": 0, "create_pattern_support": 0, "togeth": 0, "possibl": [0, 9], "union": 0, "more": [0, 1, 16, 29], "complic": 0, "user": [0, 1, 8, 32], "higher": 0, "linear": [0, 29], "now": [0, 1, 29], "decompos": [0, 1, 9], "permut": 0, "get_source_partit": 0, "wanted_sourc": 0, "sourcepartit": 0, "leaf": 0, "dictionari": [0, 29], "correspond": 0, "flatten": [0, 29], "particular": 0, "module_typ": 0, "need": [0, 1, 8, 9, 18, 29], "input_nod": 0, "being": [0, 1, 9, 29], "outsid": [0, 29], "output_nod": 0, "param": [0, 29], "m": [0, 29], "linear1": 0, "linear2": 0, "randn": [0, 1, 29], "edge_graph": 0, "print": [0, 1, 16, 29, 32], "arg0": [0, 29], "_param_constant0": [0, 29], "get_attr": [0, 1], "permute_default": 0, "permute_copi": 0, "_param_constant1": [0, 29], "addmm_default": 0, "t_default": 0, "_param_constant0_1": 0, "permute_default_1": 0, "_param_constant1_1": 0, "addmm_default_1": 0, "t_default_1": 0, "relu_default": [0, 29], "_param_constant2": 0, "permute_default_2": 0, "_param_constant3": 0, "addmm_default_2": 0, "t_default_2": 0, "module_partit": 0, "modulepartit": 0, "activ": [0, 9], "entri": [1, 9, 29], "point": [1, 9, 29], "process": [1, 9, 29, 32], "pytorch": [1, 4, 5, 8, 9, 29, 30, 32], "program": [1, 8, 9, 29], "leverag": 1, "effici": [1, 9], "benefit": 1, "special": [1, 9, 29], "hardwar": [1, 9], "still": [1, 29], "experi": [1, 8], "close": 1, "At": [1, 9, 29], "high": [1, 9, 29], "level": [1, 9, 29], "defin": 1, "compon": 1, "repres": [1, 9, 29], "api": [1, 8, 9, 29], "aot": 1, "e": [1, 9, 29], "g": [1, 9], "compil": [1, 9, 29], "optim": [1, 9], "destroi": 1, "releas": [1, 8], "own": 1, "resourc": 1, "compos": 1, "expect": [1, 8], "blob": [1, 29], "binari": [1, 8, 9, 29], "desir": 1, "profil": [1, 9], "inform": [1, 16, 29], "serial": [1, 29], "file": [1, 16, 18, 31, 32], "load": [1, 9, 29], "devic": [1, 8, 9, 29], "edge_program": [1, 29], "exportedprogram": [1, 29], "compile_spec": 1, "compilespec": 1, "preprocessresult": 1, "demo": [1, 29], "here": [1, 4, 16, 29, 32], "loop": 1, "sin": [1, 29], "instruct": [1, 9], "string": 1, "later": [1, 29], "pars": 1, "pass": [1, 9], "custom": [1, 8, 9, 29], "init": 1, "respons": [1, 9], "further": [1, 9, 29, 32], "unit": 1, "well": [1, 9, 16], "handl": 1, "And": 1, "final": [1, 9, 29], "some": [1, 8, 29], "its": [1, 9, 29], "lifespan": 1, "__et_nodiscard": 1, "virtual": 1, "delegatehandl": 1, "freeablebuff": 1, "arrayref": 1, "memoryalloc": 1, "memory_alloc": 1, "evalu": 1, "held": 1, "void": 1, "__et_unus": 1, "onc": 1, "readi": [1, 8], "thei": 1, "regist": [1, 29], "simpli": 1, "test": [1, 8, 29, 32], "backend_with_compiler_demo": [1, 29], "backendwithcompilerdemo": [1, 29], "via": [1, 29], "register_backend": 1, "const": 1, "three": [1, 9, 29], "good": 1, "stage": [1, 8, 9, 29], "reus": [1, 29], "export": [1, 8, 9, 30, 31], "accord": 1, "partition": [1, 29], "model": [1, 4, 8, 9], "both": [1, 16, 29], "streamlin": [1, 9], "procecss": 1, "start": [1, 16, 30], "represent": [1, 8, 9, 29], "loweredbackendmodul": [1, 29], "document": [1, 5, 16, 29], "python": [1, 9, 16, 29, 30, 32], "refer": [1, 16, 29], "backend_api": [1, 29], "py": [1, 16, 29, 31, 32], "to_backend": [1, 29], "backend_id": [1, 29], "emit": 1, "flatbuff": [1, 29], "put": 1, "back": 1, "parent": 1, "eventu": 1, "methodcompilespec": 1, "In": [1, 8, 9, 16, 29], "lowerablesubmodel": 1, "x": [1, 9, 29, 32], "to_be_low": 1, "example_input": 1, "to_be_lowered_exir_submodul": 1, "lowered_modul": [1, 29], "format": [1, 9, 29], "save": [1, 9], "local": [1, 32], "save_path": [1, 29], "pte": [1, 29], "open": [1, 9, 29], "wb": [1, 29], "write": [1, 29], "buffer": [1, 29], "altern": [1, 29], "executor": 1, "nonlowerablesubmodel": 1, "bia": [1, 29], "lowerpart": 1, "compositemodel": 1, "non_lower": [1, 29], "ret": [1, 29], "composite_model": 1, "model_input": 1, "exec_prog": 1, "to_executorch": [1, 29], "certain": 1, "overload": 1, "tpartition": 1, "tag": [1, 8, 29], "meant": 1, "partition_tag": 1, "avail": [1, 5, 8, 9], "insert": [1, 29], "top": 1, "op_partitioner_demo": [1, 29], "addmulpartitionerdemo": [1, 29], "executorchbackendconfig": [1, 29], "specproppass": 1, "store": [1, 29], "real": 1, "warn": [1, 16, 29], "pybind": 1, "partner": 1, "preview": 1, "pleas": [1, 29], "size_test_all_op": 1, "executor_runn": 1, "cpp": 1, "mvp": 1, "executorch_modul": 1, "_load_for_executorch_from_buff": 1, "model_output": 1, "debug": [1, 9, 29], "handler": 1, "thrown": 1, "surfac": 1, "sourc": [1, 9, 16, 29, 30, 32], "below": [1, 32], "tan": 1, "problemat": 1, "tanmodul": 1, "tan_modul": 1, "edgeir_m": 1, "lowered_tan_modul": 1, "compositemodelwithtan": 1, "lowered_tan": 1, "output_from_submodul": 1, "composite_model_with_tan": 1, "buff": 1, "throw": 1, "tan_default": 1, "debug_handl": [1, 29], "how": [1, 8, 16, 29], "data": [1, 29], "lift": 1, "static": [1, 29], "weight": 1, "bias": 1, "suppli": 1, "access": [1, 29], "get_param": 1, "_export": [1, 29], "util": [1, 29], "emb": 1, "d": 1, "state": [1, 9, 29], "descript": 1, "haven": 1, "t": [1, 9], "yet": [1, 8], "4": [1, 16, 29], "show": 1, "up": [1, 29], "control": [1, 9, 29, 32], "won": 1, "hold": 1, "ye": 1, "two": [1, 9, 29], "differ": [1, 29], "backend_1": 1, "backend_2": 1, "paritition": 1, "backend_1_paritition": 1, "backend_2_partition": 1, "Will": 1, "algorithm": 1, "exported_program_backend_1": 1, "exported_program": [1, 29], "rest": 1, "backend_2_paritition": 1, "exported_program_backend_1_and_2": 1, "conret": 1, "qnnpack": 1, "xnnpack": 1, "box": 1, "easi": 1, "try": [1, 29], "becuas": 1, "usual": 1, "order": 1, "better": [1, 9, 29], "go": [1, 9, 29, 32], "sai": 1, "backend_1_2_partition": 1, "insid": 1, "logic": 1, "regardless": 1, "backend2": 1, "none": [1, 29], "delegation_spec_1": 1, "delegationspec": 1, "backend1": 1, "delegation_spec_2": 1, "edge_graph_modul": 1, "partiton": 1, "node_to_backend_1": 1, "select": 1, "delegation_tag": 1, "backend2_tag": 1, "partitioner_1": 1, "id": 1, "node_to_backend_2": 1, "partitioner_2": 1, "6": 1, "Is": 1, "tba": [2, 3, 6, 7, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], "tutori": [4, 31], "redirect": [4, 5], "3": [4, 5, 29, 32], "second": [4, 5, 29, 32], "http": [5, 29, 30], "org": [5, 30], "doc": [5, 29], "2": [5, 9, 16, 29, 32], "1": [5, 9, 16, 29, 32], "html": [5, 30, 32], "platform": [8, 9], "infrastructur": 8, "everywher": 8, "vr": 8, "wearabl": [8, 9], "standard": [8, 9, 16], "io": [8, 9], "android": [8, 9], "mobil": [8, 9], "deploy": [8, 9], "One": 8, "main": [8, 9], "goal": [8, 29], "enabl": [8, 9], "wider": 8, "capabl": [8, 9], "heavili": 8, "reli": 8, "technolog": [8, 9], "torchdynamo": [8, 9], "familiar": [8, 9], "read": [8, 32], "about": [8, 29], "dive": 8, "featur": 8, "describ": [8, 9, 32], "classifi": 8, "statu": 8, "stabl": 8, "long": 8, "term": [8, 9, 29], "gener": [8, 9, 29, 30, 32], "major": 8, "limit": 8, "gap": 8, "compat": [8, 9], "although": 8, "break": 8, "happen": 8, "notic": [8, 29], "ahead": [8, 9, 29], "beta": 8, "base": [8, 9], "feedback": 8, "improv": [8, 9, 29], "coverag": 8, "across": [8, 9], "complet": 8, "commit": 8, "classif": 8, "prototyp": 8, "typic": [8, 9], "distribut": 8, "pypi": 8, "conda": [8, 29], "sometim": 8, "behind": 8, "earli": 8, "topic": [8, 32], "section": [8, 16], "help": [8, 29], "what": [8, 32], "gentl": 8, "introduct": 8, "learn": [8, 9, 32], "your": [8, 16, 32], "step": [8, 9, 29], "intermedi": [8, 9], "interact": 8, "templat": [8, 30, 31], "delet": 8, "deleg": [8, 9], "quantiz": [8, 9], "lower": 8, "runtim": [8, 9, 29], "page": [9, 16], "laptop": 9, "phone": 9, "iot": 9, "express": [9, 32], "seri": 9, "addit": [9, 29], "convolut": [9, 29], "safe": [9, 29], "semant": 9, "low": 9, "infer": 9, "compress": 9, "reduc": 9, "size": 9, "subgraph": [9, 29], "down": 9, "acceler": 9, "latenc": 9, "locat": 9, "footprint": 9, "imag": 9, "lightweight": 9, "embed": 9, "ha": [9, 16, 29], "alreadi": 9, "been": 9, "calcul": 9, "highli": 9, "constrain": 9, "figur": 9, "illustr": 9, "engin": 9, "who": 9, "deploi": 9, "machin": 9, "robust": 9, "power": 9, "fast": 9, "eager": [9, 29], "mode": [9, 29], "flexibl": 9, "experiment": 9, "isn": 9, "cannot": 9, "deliv": 9, "flow": [9, 29], "wide": 9, "rang": [9, 29], "dynam": 9, "tool": 9, "fulli": [9, 29], "exist": [9, 29], "littl": 9, "effort": 9, "small": [9, 29], "core": [9, 29], "librari": 9, "link": [9, 32], "without": 9, "setup": 9, "swap": 9, "parti": [9, 29], "interfac": 9, "aka": 9, "oss": 9, "ecosystem": 9, "abov": 9, "vendor": 9, "either": 9, "partial": 9, "full": [9, 29, 32], "greater": [9, 29], "easier": [9, 29], "integr": 9, "ai": 9, "sdk": 9, "toolchain": 9, "due": 9, "build": [9, 32], "unifi": [9, 29], "develop": 9, "microcontrol": 9, "gain": 9, "product": 9, "easili": 9, "inspect": 9, "workflow": [9, 29], "necessari": [9, 29], "design": 9, "principl": 9, "number": 9, "problem": 9, "face": 9, "lack": 9, "debugg": 9, "themselv": 9, "abl": 9, "fail": [9, 29], "eas": 9, "even": 9, "architectur": 9, "appli": [9, 29], "techniqu": 9, "storag": 9, "trade": 9, "off": 9, "registr": 9, "overhead": 9, "linux": 9, "system": 9, "bare": 9, "metal": 9, "configur": 9, "those": [9, 29], "minim": 9, "conv": [9, 29], "highlight": [9, 32], "advantag": 9, "categori": 9, "portabl": 9, "ideal": 9, "choic": 9, "titl": 11, "repositori": [16, 32], "restructuredtext": 16, "author": [16, 29, 32], "direct": 16, "expand": 16, "contribut": 16, "myst": 16, "parser": 16, "similarli": 16, "extens": 16, "syntax": 16, "extend": 16, "width": 16, "align": [16, 29], "_static": 16, "img": 16, "png": 16, "s_demo_note_sourc": 16, "alt": 16, "bg": 16, "primari": 16, "150px": 16, "center": 16, "caption": 16, "my": 16, "emphas": 16, "line": [16, 29], "lineno": 16, "between": [16, 29], "end": [16, 29, 32], "marker": 16, "literalinclud": 16, "sampl": 16, "person": 16, "ag": 16, "introduc": [16, 29], "hello": 16, "am": 16, "year": 16, "old": 16, "alic": 16, "25": 16, "rst": 18, "download": [29, 30, 32], "angela": 29, "yi": 29, "ml": 29, "optiz": 29, "cover": [29, 32], "prepar": 29, "ll": 29, "instal": 29, "environ": [29, 32], "googl": 29, "colab": 29, "pip": 29, "q": 29, "condacolab": 29, "10": 29, "forg": 29, "clone": 29, "sure": 29, "github": 29, "privat": 29, "repo": 29, "git": 29, "github_usernam": 29, "token": 29, "com": 29, "cd": 29, "bash": 29, "install_requir": 29, "sh": 29, "undergo": 29, "longer": 29, "issu": 29, "detail": 29, "capture_pre_autograd_graph": 29, "posit": 29, "keywork": 29, "shown": 29, "constraint": 29, "conv2d": 29, "in_channel": 29, "out_channel": 29, "16": 29, "kernel_s": 29, "pad": 29, "example_arg": 29, "256": 29, "pre_autograd_aten_dialect": 29, "pre": 29, "autograd": 29, "aten_dialect": 29, "fx_pytre": 29, "tree_flatten_spec": 29, "_in_spec": 29, "conv2d_default": 29, "pytre": 29, "tree_unflatten": 29, "_out_spec": 29, "info": 29, "print_read": 29, "arg0_1": 29, "f32": 29, "arg1_1": 29, "arg2_1": 29, "tutorials_sourc": 29, "82": 29, "83": 29, "signatur": 29, "exportgraphsignatur": 29, "user_input": 29, "user_output": 29, "inputs_to_paramet": 29, "inputs_to_buff": 29, "buffers_to_mut": 29, "backward_signatur": 29, "assertion_dep_token": 29, "doe": 29, "hierarchi": 29, "furthermor": 29, "3000": 29, "train": 29, "cleaner": 29, "pure": 29, "side": 29, "effect": 29, "mutat": 29, "alias": 29, "180": 29, "along": 29, "stacktrac": 29, "sinc": 29, "By": 29, "assum": 29, "than": 29, "error": 29, "traceback": 29, "tb": 29, "work": 29, "correctli": [29, 32], "print_exc": 29, "recent": 29, "last": 29, "146": 29, "opt": 29, "env": 29, "py_3": 29, "lib": 29, "python3": 29, "site": 29, "packag": 29, "365": 29, "__call__": 29, "_check_input_constraint": 29, "ordered_param": 29, "ordered_buff": 29, "552": 29, "_assertion_graph": 29, "726": 29, "call_wrap": 29, "_wrapped_cal": 29, "305": 29, "292": 29, "cl": 29, "obj": 29, "misc": 29, "1519": 29, "_wrapped_call_impl": 29, "_call_impl": 29, "1528": 29, "forward_cal": 29, "eval_with_kei": 29, "34": 29, "11": 29, "_assert_async": 29, "msg": 29, "scalar_tensor": 29, "_op": 29, "458": 29, "runtimeerror": 29, "dynamic_dim": 29, "dimens": 29, "less": 29, "s0": 29, "158": 29, "rangeconstraint": 29, "min_val": 29, "max_val": 29, "s1": 29, "9223372036854775806": 29, "inputdim": 29, "input_nam": 29, "dim": 29, "let": 29, "violat": 29, "15": 29, "198": 29, "68": 29, "20": 29, "_assert_async_3": 29, "scalar_tensor_3": 29, "204": 29, "73": 29, "As": 29, "entir": 29, "ultim": 29, "best": 29, "compar": 29, "prepare_pt2": 29, "compare_pt2": 29, "prepare_fx": 29, "convert_fx": 29, "arugu": 29, "annot": 29, "properli": 29, "ao": 29, "quantize_pt2": 29, "convert_pt2": 29, "xnnpack_quant": 29, "get_symmetric_quantization_config": 29, "xnnpackquant": 29, "set_glob": 29, "prepared_graph": 29, "converted_graph": 29, "observ": 29, "1220": 29, "userwarn": 29, "calculate_qparam": 29, "scale": 29, "zero": 29, "339": 29, "quantize_per_tensor": 29, "i8": 29, "quantized_decompos": 29, "128": 29, "127": 29, "int8": 29, "dequantize_per_tensor": 29, "quantize_per_tensor_1": 29, "dequantize_per_tensor_1": 29, "quantize_per_tensor_2": 29, "dequantize_per_tensor_2": 29, "next": 29, "server": 29, "dtype": 29, "namespac": 29, "agnost": 29, "edgeprogrammanag": 29, "aten_convolution_default": 29, "executorch_exir_dialects_edge__ops_aten_convolution_default": 29, "aten_relu_default": 29, "executorch_exir_dialects_edge__ops_aten_relu_default": 29, "structur": 29, "combin": 29, "encod": 29, "decod": 29, "encode_arg": 29, "aten_encod": 29, "decode_arg": 29, "aten_decod": 29, "method": 29, "303": 29, "aten_randn_default": 29, "executorch_exir_dialects_edge__ops_aten_randn_default": 29, "pin_memori": 29, "aten_permute_copy_default": 29, "executorch_exir_dialects_edge__ops_aten_permute_copy_default": 29, "aten_mm_default": 29, "executorch_exir_dialects_edge__ops_aten_mm_default": 29, "307": 29, "depth": 29, "valid": 29, "thing": 29, "rather": 29, "exir_op": 29, "pass_bas": 29, "convertrelutosigmoid": 29, "sigmoid": 29, "transformed_edge_program": 29, "aten_sigmoid_default": 29, "executorch_exir_dialects_edge__ops_aten_sigmoid_default": 29, "parit": 29, "lowerablemodul": 29, "to_be_lowered_modul": 29, "noqa": 29, "processed_byt": 29, "original_modul": 29, "numel": 29, "float32": 29, "395": 29, "aten_sin_default": 29, "executorch_exir_dialects_edge__ops_aten_sin_default": 29, "_pytre": 29, "540": 29, "pytree_to_str": 29, "deprec": 29, "treespec_dump": 29, "tell": 29, "notlowerablemodul": 29, "composedmodul": 29, "lowered_module_0": 29, "lowered_backend_modul": 29, "261": 29, "executorch_call_deleg": 29, "lowered_module_1": 29, "executorch_call_delegate_1": 29, "450": 29, "aten_add_tensor": 29, "executorch_exir_dialects_edge__ops_aten_add_tensor": 29, "aten_add_tensor_1": 29, "_tensor_constant0": 29, "previous": 29, "separ": 29, "mm": 29, "delegated_program": 29, "496": 29, "497": 29, "498": 29, "aten_sub_tensor": 29, "executorch_exir_dialects_edge__ops_aten_sub_tensor": 29, "499": 29, "aten_mm_default_1": 29, "500": 29, "getitem_1": 29, "cohes": 29, "532": 29, "alloc": 29, "choos": 29, "executorchprogrammanag": 29, "memoryplanningpass": 29, "executorch_program": 29, "memory_planning_pass": 29, "greedi": 29, "executorch_exir_memory_alloc": 29, "530": 29, "alloc_1": 29, "531": 29, "alloc_2": 29, "alloc_3": 29, "533": 29, "alloc_4": 29, "534": 29, "kernel": 29, "prealloac": 29, "planner": 29, "lifetim": 29, "analysi": 29, "much": 29, "rand": [29, 32], "clamp": 29, "min": 29, "max": 29, "custombackendquant": 29, "custombackendpartition": 29, "went": 29, "over": 29, "total": [29, 31, 32], "script": [29, 32], "minut": [29, 32], "045": [29, 31], "jupyt": [29, 30, 32], "notebook": [29, 30, 32], "ipynb": [29, 32], "galleri": [29, 30, 32], "sphinx": [29, 30, 32], "template_tutori": [30, 31, 32], "tutorials_python": 30, "zip": 30, "tutorials_jupyt": 30, "00": 31, "06": 31, "212": 31, "05": 31, "mb": 31, "01": 31, "167": [31, 32], "firstnam": 32, "lastnam": 32, "item": 32, "prerequisit": 32, "v2": 32, "gpu": 32, "video": 32, "gallery_pattern": 32, "variabl": 32, "respect": 32, "regular": 32, "neural_style_transfer_tutori": 32, "command": 32, "_build": 32, "beginner_sourc": 32, "directori": 32, "Then": 32, "verifi": 32, "why": 32, "relev": 32, "research": 32, "paper": 32, "walk": 32, "automat": 32, "1508": 32, "2759": 32, "8863": 32, "7016": 32, "7026": 32, "4119": 32, "7652": 32, "0117": 32, "8987": 32, "7328": 32, "2098": 32, "4111": 32, "6038": 32, "8646": 32, "1605": 32, "practic": 32, "knowledg": 32, "nlp": 32, "scratch": 32, "summar": 32, "concept": 32, "takeawai": 32, "link1": 32, "link2": 32}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"custom": [0, 14, 17, 21], "compil": [0, 20], "pass": [0, 2, 29], "partition": 0, "level": [0, 6], "1": [0, 1], "One": 0, "x": 0, "none": 0, "util": 0, "local": 0, "inform": 0, "2": [0, 1], "3": [0, 1], "manag": 0, "subgraph": 0, "matcher": 0, "capabl": 0, "base": 0, "combin": 0, "sourc": 0, "backend": [1, 19, 29], "deleg": [1, 19, 27, 29], "interfac": 1, "ahead": 1, "time": [1, 31], "preprocess": 1, "runtim": [1, 18, 22, 23], "initi": 1, "execut": 1, "frontend": 1, "flow": 1, "lower": [1, 29], "whole": [1, 29], "modul": [1, 29], "composit": 1, "partit": [1, 29], "error": [1, 22], "messag": 1, "common": 1, "question": 1, "kernel": [2, 14, 15], "fusion": 2, "memori": [3, 21, 29], "plan": [3, 29], "export": [4, 5, 29], "executorch": [4, 6, 7, 8, 9, 10, 29], "user": [5, 29], "guid": 5, "high": [6, 12], "architectur": 6, "compon": 6, "set": 7, "up": 7, "welcom": 8, "document": 8, "get": 8, "start": 8, "tutori": [8, 29, 30, 32], "exampl": 8, "how": 9, "doe": 9, "work": 9, "kei": 9, "benefit": 9, "overview": [10, 15, 23, 32], "exir": 11, "order": 12, "oper": 12, "opset": 13, "definit": 13, "aten": 14, "compliant": 14, "implement": [14, 19], "link": [14, 19, 29], "librari": 15, "markdown": 16, "sphinx": 16, "tip": 16, "trick": 16, "admonit": 16, "imag": 16, "code": [16, 29], "block": 16, "quantiz": [17, 29], "api": 18, "build": 20, "cross": 20, "alloc": 21, "handl": 22, "platform": 24, "abstract": 24, "layer": 24, "bundledio": 25, "debug": 26, "integr": 27, "profil": 28, "prerequisit": 29, "model": 29, "express": 29, "dynam": 29, "address": 29, "untrac": 29, "perform": 29, "edg": 29, "dialect": 29, "compos": 29, "anoth": 29, "part": 29, "run": 29, "defin": 29, "save": 29, "file": 29, "conclus": [29, 32], "mention": 29, "comput": 31, "templat": 32, "step": 32, "option": 32, "addit": 32, "exercis": 32}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx.ext.intersphinx": 1, "sphinx": 56}})