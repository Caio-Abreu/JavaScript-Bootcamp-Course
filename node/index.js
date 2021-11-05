#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const { lstat } = fs.promises;
 

fs.readdir(process.cwd(), async (err, filenames) => {
    // Either 
    // err === an error object, which means something went wrong
    // OR
    // err ==== null, wich means everything is Ok
    if (err) {
        // error handling code here
        console.log(err);
    }

    const statPromises = filenames.map(filename => {
        return lstat(filename);
    });

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats) {
        const index = allStats.indexOf(stats);

        if (stats.isFile()) {
            console.log(filenames[index]);
        } else {
            console.log(chalk.red(filenames[index]));
        }
    }



    // const allStats = Array(filenames.length).fill(null);
    // // BAD CODE HERE !!!
    // for (let filename of filenames) {
    //     const index = filenames.indexOf(filename)
    //     fs.lstat(filename, (err, stats) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         allStats[index] = stats;

    //         const ready = allStats.every((stats) => {
    //             return stats;
    //         });

    //         if (ready) {
    //             allStats.forEach((stats, index) => {
    //                 console.log(filenames[index], stats.isFile());
    //             });
    //         }
    //     })
    // }

    
});
