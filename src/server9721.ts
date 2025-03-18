
const express = require('express')
import {handler9721} from "./handler9721";
const app = express()
app.get('/9721', handler9721)
app.listen(3000, () => {})
        