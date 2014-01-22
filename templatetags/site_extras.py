from django import template
import os
register = template.Library()

@register.simple_tag
def autoversion(filename):
	return int(os.path.getmtime(filename))