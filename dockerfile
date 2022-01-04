FROM envoyproxy/envoy:v1.20-latest

COPY ./envoy.yaml /etc/envoy/envoy.yaml

RUN apt update

RUN apt install -y curl

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log