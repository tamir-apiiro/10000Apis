
const express = require('express')
import {handler9311} from "./handler9311";
const app = express()
app.get('/9311', handler9311)
app.listen(3000, () => {})
        