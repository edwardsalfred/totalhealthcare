"""Tiny dev server that disables caching so CSS/JS edits show up on plain refresh."""
import http.server
import socketserver
import os

PORT = 8765
DIR = os.path.join(os.path.dirname(__file__), "site")
os.chdir(DIR)


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
    print(f"Serving {DIR} on http://localhost:{PORT}")
    httpd.serve_forever()
