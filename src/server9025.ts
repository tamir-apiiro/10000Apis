
const express = require('express')
import {handler9025} from "./handler9025";
const app = express()
app.get('/9025', handler9025)
app.listen(3000, () => {})
        