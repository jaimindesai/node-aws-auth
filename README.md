# node-aws-auth

Build your Docker image using the following command.

docker build -t http-backend:latest .

To run the container, we write on the terminal:

docker run -it --rm -p 3000:3000 --name httpbe-shell http-backend:latest /bin/sh

docker run -p 3000:3000 -m 512M -d --name httpbe http-backend:latest

Retrieve the Docker login command that you can use to authenticate your Docker client to your registry:

aws ecr get-login --no-include-email --region us-east-1

With a completed build, tag your image with a keyword (For example, latest) so you can push the image to this repository:

docker tag http-backend:latest 805498960122.dkr.ecr.us-east-1.amazonaws.com/http-backend:latest

Run the following command to push this image to your newly created AWS repository:

docker push 805498960122.dkr.ecr.us-east-1.amazonaws.com/deeproot/http-backend
