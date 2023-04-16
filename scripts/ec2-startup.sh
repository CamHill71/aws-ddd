#!/bin/bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
sudo yum install -y nodejs
sudo yum install -y git
cd /home/ec2-user
git clone https://github.com/CamHill71/aws-ddd.git
cd aws-ddd
sudo npm run build
sudo npm i
npm run start

# The above commands base64 encoded for entering into UserData
# IyEvYmluL2Jhc2gKY3VybCAtby0gaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL252bS1zaC9udm0vdjAuMzkuMy9pbnN0YWxsLnNoIHwgYmFzaApzdWRvIHl1bSBpbnN0YWxsIC15IG5vZGVqcwpzdWRvIHl1bSBpbnN0YWxsIC15IGdpdApjZCAvaG9tZS9lYzItdXNlcgpnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL0NhbUhpbGw3MS9hd3MtZGRkLmdpdApjZCBhd3MtZGRkCnN1ZG8gbnBtIHJ1biBidWlsZApzdWRvIG5wbSBpCm5wbSBydW4gc3RhcnQK