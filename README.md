# NGINX Beginner Project 🌐

## Introduction

This project aims to set up and configure NGINX as a web server and load balancer. Follow the steps below to download, set up, and test your NGINX configuration.

<br>

## Setup Instructions

### 1. Download and Setup **NGINX** 📥

Visit the [**NGINX** Official Website](https://nginx.org) to download the latest version of **NGINX**.

### 2. Clone the Repository 📂

Clone your [project repository](https://github.com/patricnilackshan/nginx-Beginner-Project) inside the **nginx** folder.

### 3. Set the Document Root 📂

Before starting NGINX, set the $root_folder variable in your configuration file ( nginx-Beginner-Project/**nginx.conf** ) to point to the NGINX installed directory. For example:

```text
set $root_folder "/usr/share/nginx/";
```

### 4. Start **NGINX** with Custom Configuration 🚀

To start **NGINX** using your custom configuration file, run the following command:

```shell
./nginx -c nginx-Beginner-Project/nginx.conf
```

### 5. Reload **NGINX** After Editing the Configuration 🔄

Whenever you edit the configuration file, reload **NGINX** to apply the changes:

```shell
./nginx -c nginx-Beginner-Project/nginx.conf -s reload
```

### 6. Create Multiple Slave Servers and Test **NGINX** Load Balancer ⚖️

To set up multiple slave servers for load balancing, navigate to the server directory and install the necessary dependencies:

```shell
cd nginx-Beginner-Project/server
npm install
npm run start
```

### 7. Stop NGINX 🛑

To stop the NGINX server, use the following command:

```shell
./nginx -s stop
```

<br>

## List of APIs That the Server Can Handle 📋

The following APIs are configured and can be accessed through the NGINX server:

```text
127.0.0.1:80/
127.0.0.1:80/proxy
127.0.0.1:80/vegetables/
127.0.0.1:80/carbs
127.0.0.1:80/carbss
127.0.0.1:80/fruits/
127.0.0.1:80/colors
127.0.0.1:80/counter/[0-9]+
127.0.0.1:80/numbers/<word>
```

<br>

### © PATRIC NILACKSHAN (pnilackshan@gmail.com)

<img align="right" src="https://visitor-badge.laobi.icu/badge?page_id=patricnilackshan.nginx-Beginner-Project" />
