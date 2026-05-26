FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

# System essentials
RUN apt-get update && apt-get install -y \
    curl \
    git \
    sudo \
    ca-certificates \
    gnupg \
    openssl \
    && rm -rf /var/lib/apt/lists/*

# Node.js 22 via NodeSource
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Docker (needed for PostgreSQL via docker compose)
RUN install -m 0755 -d /etc/apt/keyrings \
    && curl --retry 3 --retry-delay 5 -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg \
    && chmod a+r /etc/apt/keyrings/docker.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu noble stable" \
       | tee /etc/apt/sources.list.d/docker.list > /dev/null \
    && apt-get update \
    && apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin \
    && rm -rf /var/lib/apt/lists/*

# Docker-in-Docker workarounds for Cloud Agent environment
RUN apt-get update && apt-get install -y fuse-overlayfs iptables && rm -rf /var/lib/apt/lists/*
RUN mkdir -p /etc/docker && printf '%s\n' '{' '  "storage-driver": "fuse-overlayfs"' '}' > /etc/docker/daemon.json
RUN update-alternatives --set iptables /usr/sbin/iptables-legacy \
    && update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy

# Pre-install npm dependencies into the image
WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm install
