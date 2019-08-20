# Base package: python v3.7.4
FROM python:3.7.4
LABEL maintainer="dvdgege5@gmail.com"

# install Python modules from requirements.txt
COPY ./requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

# copy source files
WORKDIR /flask
COPY . .

# run Flask server
ENTRYPOINT ["python"]
CMD ["app.py"]