
const express = require('express')
import {handler9478} from "./handler9478";
const app = express()
app.get('/9478', handler9478)
app.listen(3000, () => {})
        