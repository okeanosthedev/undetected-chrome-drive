import tempfile
import os
def create_and_run_script(code, executer):
    try:
        with tempfile.NamedTemporaryFile(mode='w+', suffix='.py', delete=False) as temp_file:
            temp_file.write(code)
            temp_file_path = temp_file.name

        # Execute the script
        os.system(executer + ' ' + temp_file_path)
        os.remove(temp_file_path)
    except Exception as e:
        print(f"Error: {e}")

def dr(cortoper, save_file):
    cmds = '\n'.join(cortoper)
    create_and_run_script(cmds, save_file)

