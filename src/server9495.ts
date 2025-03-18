
const express = require('express')
import {handler9495} from "./handler9495";
const app = express()
app.get('/9495', handler9495)
app.listen(3000, () => {})
        