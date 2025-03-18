
const express = require('express')
import {handler9325} from "./handler9325";
const app = express()
app.get('/9325', handler9325)
app.listen(3000, () => {})
        