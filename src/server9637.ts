
const express = require('express')
import {handler9637} from "./handler9637";
const app = express()
app.get('/9637', handler9637)
app.listen(3000, () => {})
        