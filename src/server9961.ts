
const express = require('express')
import {handler9961} from "./handler9961";
const app = express()
app.get('/9961', handler9961)
app.listen(3000, () => {})
        