
const express = require('express')
import {handler169} from "./handler169";
const app = express()
app.get('/169', handler169)
app.listen(3000, () => {})
        