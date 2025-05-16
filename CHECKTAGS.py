import os

TARGET_STRINGS = [
    "*",
    ":root",
    "@media (max-width: 600px)",
    "@media (min-width: 1100px)",
    "MenuList",
    "a",
    "a:hover",
    "a.product",
    "about",
    "band-description",
    "band-home-logo",
    "band-txt",
    "bg-placeholder",
    "book-now",
    "button.submitBtn",
    "center-bottom",
    "div",
    "emailRow",
    "emailRow button",
    "extraMenuBar",
    "formGrid",
    "formGrid div",
    "formGrid input",
    "h1",
    "h1 span",
    "h3",
    "h3.sam-brief",
    "head-box",
    "header",
    "home-header-band",
    "home-header-band h1",
    "home-header-band h1 span",
    "id",
    "img-box",
    "input",
    "label",
    "left",
    "left h3",
    "long-sam-description",
    "main",
    "main.about",
    "main.sam",
    "main.signup",
    "menuBar",
    "menuBar .site-links",
    "menuBar a",
    "menuBar a:hover",
    "moreLink:hover + .menuBar",
    "para1",
    "para2",
    "para3",
    "para4",
    "para5",
    "product",
    "product-box",
    "right",
    "root",
    "sam-big-name",
    "sam-brief",
    "sam-brief.book-now",
    "sam-description",
    "sam-header",
    "select",
    "site-links",
    "small",
    "submitBtn",
    "tag"
]

def find_missing_strings(target_strings):
    found = set()
    html_files = [f for f in os.listdir('.') if f.lower().endswith('.html')]

    if not html_files:
        print("No HTML files found in current directory.")
        return

    for file in html_files:
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                for s in target_strings:
                    if s in content:
                        found.add(s)
        except Exception as e:
            print(f"Error reading {file}: {e}")

    print("\nStrings **not found** in any HTML file:\n")
    for s in target_strings:
        if s not in found:
            print(s)

if __name__ == "__main__":
    find_missing_strings(TARGET_STRINGS)
