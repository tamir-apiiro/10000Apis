
const express = require('express')
import {handler9360} from "./handler9360";
const app = express()
app.get('/9360', handler9360)
app.listen(3000, () => {})
        