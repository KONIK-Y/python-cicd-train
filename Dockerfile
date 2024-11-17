FROM ubuntu:20.04

RUN apt-get update && apt-get install -y \
    curl \
    python3 \
    python3-pip 

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" \
    && nvm install 22 \
    && nvm use 22


WORKDIR /app

CMD ["bash"]
