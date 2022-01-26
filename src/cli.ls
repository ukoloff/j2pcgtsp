require!<[fs process]>

dbs = fs.read-file-sync(process.argv[2] + '.dbs.json')
