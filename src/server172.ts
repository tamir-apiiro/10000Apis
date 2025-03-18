
const express = require('express')
import {handler172} from "./handler172";
const app = express()
app.get('/172', handler172)
app.listen(3000, () => {})
        