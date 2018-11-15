## A Simple Server with Node.js Express

This is a simple skeleton Express server project that works on any of the [balena][balena-link] supported devices.

This project serves up `"Hello World!"` on port `:80` of your balena device.

To get this project up and running, you will need to signup for a balena account [here][signup-page] and set up a device, have a look at our [Getting Started tutorial][gettingStarted-link]. Once you are set up with balena, you will need to clone this repo locally:
```
$ git clone git@github.com:balena-io-projects/simple-server-node.git
```
Then add your balena application remote repository to your local repository:
```
$ git remote add balena username@git.balena-cloud.com:username/myapp.git
```
and push the code to the newly added remote:
```
$ git push balena master
```
It should take a few minutes for the code to push. While you wait, lets enable device URLs so we can see the server outside of our local network. This option can be found in the `Actions` tab in your device dashboard. You'll also need to make sure that [local mode][local-mode] is disabled.

![Actions Tab](/img/enable-public-URLs.png)

Once the device is updated, you should see this in your logs:
![log output](/img/log-output.png)

Then in your browser you should be able to open the device URL and see the message "Hello World!".


[balena-link]:https://balena.io/
[signup-page]:https://dashboard.balena-cloud.com/signup
[gettingStarted-link]:http://balena.io/docs/learn/getting-started/
[local-mode]:https://www.balena.io/docs/learn/develop/local-mode/
