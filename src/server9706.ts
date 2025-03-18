
const express = require('express')
import {handler9706} from "./handler9706";
const app = express()
app.get('/9706', handler9706)
app.listen(3000, () => {})
        