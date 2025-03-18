
const express = require('express')
import {handler9710} from "./handler9710";
const app = express()
app.get('/9710', handler9710)
app.listen(3000, () => {})
        