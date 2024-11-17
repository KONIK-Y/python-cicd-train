import yaml


def load_yaml_template(template_name):
    with open(template_name, 'r') as file:
        return yaml.load(file, Loader=yaml.FullLoader)


def load_template(template_name):
    with open(template_name, 'r') as file:
        return file.read()
