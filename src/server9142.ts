
const express = require('express')
import {handler9142} from "./handler9142";
const app = express()
app.get('/9142', handler9142)
app.listen(3000, () => {})
        