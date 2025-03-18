
const express = require('express')
import {handler9606} from "./handler9606";
const app = express()
app.get('/9606', handler9606)
app.listen(3000, () => {})
        