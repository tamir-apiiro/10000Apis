
const express = require('express')
import {handler9925} from "./handler9925";
const app = express()
app.get('/9925', handler9925)
app.listen(3000, () => {})
        