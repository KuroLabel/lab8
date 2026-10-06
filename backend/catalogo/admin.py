from django.contrib import admin
from .models import Servicio

@admin.register(Servicio)
class ServicioAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'precio', 'activo')
    list_filter = ('activo',)
    search_fields = ('nombre', 'descripcion')