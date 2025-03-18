
const express = require('express')
import {handler9181} from "./handler9181";
const app = express()
app.get('/9181', handler9181)
app.listen(3000, () => {})
        