#!/bin/sh

render_template() {
  eval "echo \"$(cat $1)\""
}

prd_version=${PRD_VERS:-"alpha"}

twitter_host=${METRICS_TWITTER_HOST:-"http://172.16.111.86:3000/api/v1"}
twitter_stream=${METRICS_TWITTER_STREAM:-"http://172.16.111.86:3000/api/v1"}

chat_host=${METRICS_CHAT_HOST:-"http://192.168.210.164:3000/api/v1"}
chat_stream=${METRICS_CHAT_STREAM:-"http://192.168.210.164:3000/api/v1"}

default_source=${DEFAULT_SOURCE:-"CHAT_APP"} # ["TWITTER", "CHAT_APP"]
twitter_enable=${TWITTER_ENABLE:-"true"}
chat_app_enable=${CHAT_APP_ENABLE:-"true"}

render_template global_config_template.temp > public/static/config/global-config.js

exec "$@"
