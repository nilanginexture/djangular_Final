#!/bin/bash
# wait-for-postgres.sh

set -e

host="$1"
shift
cmd="$@"

until ping -c 5 $host; do 
	echo "Postgres is not set yet"
	sleep 1  
	done;
exec $cmd

