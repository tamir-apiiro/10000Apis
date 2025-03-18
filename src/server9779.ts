
const express = require('express')
import {handler9779} from "./handler9779";
const app = express()
app.get('/9779', handler9779)
app.listen(3000, () => {})
        