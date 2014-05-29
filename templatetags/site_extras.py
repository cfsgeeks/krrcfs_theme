from django import template
import os
register = template.Library()

@register.simple_tag
def autoversion(filename):
	return int(os.path.getmtime(filename))

@register.simple_tag
def include_external(url):
    import urllib2
    return urllib2.urlopen(url).read()