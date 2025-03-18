
const express = require('express')
import {handler9005} from "./handler9005";
const app = express()
app.get('/9005', handler9005)
app.listen(3000, () => {})
        