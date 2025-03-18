
const express = require('express')
import {handler9472} from "./handler9472";
const app = express()
app.get('/9472', handler9472)
app.listen(3000, () => {})
        