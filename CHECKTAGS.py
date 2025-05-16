import os

def replace_in_html_files(directory, old_str, new_str):
    for root, _, files in os.walk(directory):
        for filename in files:
            if filename.lower().endswith('.html'):
                filepath = os.path.join(root, filename)
                try:
                    with open(filepath, 'r', encoding='utf-8') as file:
                        content = file.read()

                    if old_str in content:
                        updated_content = content.replace(old_str, new_str)
                        with open(filepath, 'w', encoding='utf-8') as file:
                            file.write(updated_content)
                        print(f"Replaced in: {filepath}")
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    replace_in_html_files('.', 'para2', 'scheme2')
