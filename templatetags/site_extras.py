from django import template
import os
register = template.Library()

@register.filter
def autoversion(filename):
	return int(os.path.getmtime(filename))