# Catalog

This is the code Repo for a Catalog website served by Linux Ubuntu. This code base was used to learn how to serve websites on Linux Ubuntu through Amazon Web Services.

## IP Address and SSH Port
* IP Address: http://35.167.160.22
* SSH Port: 2200

## Python Libraries The code in this repository assumes the following python libraries are installed:
* Flask
* SQLAlchemy
* httplib
* requests
* oauth2client
* bcrypt
* hmac
* random 
* string
* httplib2
* json
* requests
* re
* flask-httpauth

## Configuration Changes to Linux Ubuntu Server
* Setup firewall using ufw to only allow incoming connections for SSH, HTTP, and NTP.
* Install and configure Apache to serve a Python mod_wsgi application.
* Install and configure PostgreSQL.

## Third Party Resources used
* https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-application-on-an-ubuntu-vps
* https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04
