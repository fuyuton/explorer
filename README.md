# NUKOexplorer 

<b>Live Version: [explorer.nekonium.org](http://explorer.nekonium.org/)</b>

## Local installation

Clone the repo

`git clone https://github.com/nekonium/explorer`

Download [Nodejs and npm](https://docs.npmjs.com/getting-started/installing-node "Nodejs install") if you don't have them

Install dependencies:

`npm install`

Install mongodb:

MacOS: `brew install mongodb`

Ubuntu: `sudo apt-get install -y mongodb-org`

## Populate the DB

This will fetch and parse the entire blockchain.

Configuration file: `/tools/config.json`

Basic settings:
```json
{
    "gethPort": 8293, 
    "blocks": [ {"start": 102555, "end": "latest"}],
    "quiet": false,
    "terminateAtExistingDB": true,
    "listenOnly": false
}
```

```blocks``` is a list of blocks to grab. It can be specified as a list of block numbers or an interval of block numbers. When specified as an interval, it will start at the ```end``` block and keep recording decreasing block numbers. 

```terminateAtExistingDB``` will terminate the block grabber once it gets to a block it has already stored in the DB.

```quiet``` prints out the log of what it is doing.

```listenOnly``` When true, the grabber will create a filter to receive the latest blocks from gnekonium as they arrive. It will <b>not</b> continue to populate older block numbers. 

<b>Note: When ```listenOnly``` is set to ```true```, the ```blocks``` option is ignored. </b>

<b>Note 2: ```terminateAtExistingDB``` and ```listenOnly``` are mutually exclusive. Do not use ```terminateAtExistingDB``` when in ```listenOnly``` mode.</b>

### Run:

`node ./tools/grabber.js`

Leave this running in the background to continuously fetch new blocks.

You must run grabber.js in the background for the block explorer to work.

### Stats

Tools for updating network stats are under development, but can be found in:

`./tools/stats.js` 
