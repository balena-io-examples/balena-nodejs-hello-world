## A Simple Server with Node.js Express

This is a simple skeleton Express server project that works on any of the [resin.io][resin-link] supported devices.

This project simply serves up `"Hello World!"` on port `:80` of your resin.io device.

To get this project up and running, you will need to signup for a resin.io account [here][signup-page] and set up a device, have a look at our [Getting Started tutorial][gettingStarted-link]. Once you are set up with resin.io, you will need to clone this repo locally:
```
$ git clone git@github.com:resin-projects/simple-server-node.git
```
Then add your resin.io application's remote repository to your local repository:
```
$ git remote add resin username@git.resin.io:username/myapp.git
```
and push the code to the newly added remote:
```
$ git push resin master
```
It should take a few minutes for the code to push. While you wait, lets enable device URLs so we can see the server outside of our local network. This option can be found in the `Actions` tab in your device dashboard.

![Actions Tab](/img/enable-public-URLs.png)

Once the device is updated, you should see this in your logs:
![log output](/img/log-output.png)

Then in your browser you should be able to open the device URL and see the message "Hello World!".


[resin-link]:https://resin.io/
[signup-page]:https://dashboard.resin.io/signup
[gettingStarted-link]:http://docs.resin.io/#/pages/installing/gettingStarted.md
