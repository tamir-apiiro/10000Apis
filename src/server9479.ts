
const express = require('express')
import {handler9479} from "./handler9479";
const app = express()
app.get('/9479', handler9479)
app.listen(3000, () => {})
        