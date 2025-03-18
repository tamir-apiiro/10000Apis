
const express = require('express')
import {handler9611} from "./handler9611";
const app = express()
app.get('/9611', handler9611)
app.listen(3000, () => {})
        