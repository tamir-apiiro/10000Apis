
const express = require('express')
import {handler9172} from "./handler9172";
const app = express()
app.get('/9172', handler9172)
app.listen(3000, () => {})
        