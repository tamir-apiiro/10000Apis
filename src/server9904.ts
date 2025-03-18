
const express = require('express')
import {handler9904} from "./handler9904";
const app = express()
app.get('/9904', handler9904)
app.listen(3000, () => {})
        