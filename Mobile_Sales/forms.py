from django import forms

class RegistrationForm(forms.Form):
    full_name = forms.CharField(max_length=100)
    username = forms.CharField(max_length=100)
    email = forms.EmailField()
    state = forms.CharField()
    district = forms.CharField()
    city = forms.CharField(max_length=100)
    pincode = forms.CharField(max_length=6)
    password = forms.CharField(widget=forms.PasswordInput)
