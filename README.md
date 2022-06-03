# A Simple Server with NodeJS Express

[![balena deploy button](https://www.balena.io/deploy.svg)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/balena-io-examples/balena-node-hello-world)

This is a simple skeleton NodeJS server project that works on any of the [devices supported][devices-supported] by [balena][balena-link].

This project serves up a welcome page on port `:80` of your balena device.

To get this project up and running, you will need to [sign-up][signup-page] for a balena account. Have a look at our [Getting Started tutorial][gettingStarted-link] to help you kickstart your journey in creating a fleet of devices. Once you are set up with balena, you will need to clone or download this repository. 

After downloading, navigate to the directory and run the `balena push` command using the [balena CLI][balena-cli]. This command will package up and push the code to the balena builders, where it will be compiled, built and deployed to every device in the fleet. When it completes, you'll have a NodeJS powered web server running on your device and you can see some logs on your [device dashboard][balena-dashboard].

```bash
cd balena-nodejs-hello-world/
balena push <FLEET_NAME>
```

To give your device a public URL, access the device page on the [balenaCloud dashboard][balena-dashboard], and choose the _Public Device URL_ toggle. Once the device is updated, check the Public Device URL to find the welcome page showing up from your device. That's it, you have deployed your first balena device!


[balena-cli]:https://www.balena.io/docs/reference/cli/
[balena-dashboard]:https://dashboard.balena-cloud.com/
[balena-link]:https://balena.io/ 
[devices-supported]:https://www.balena.io/docs/reference/hardware/devices/
[gettingStarted-link]:https://www.balena.io/docs/learn/getting-started/raspberrypi3/NodeJS/
[signup-page]:https://dashboard.balena-cloud.com/signup
