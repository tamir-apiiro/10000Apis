
const express = require('express')
import {handler554} from "./handler554";
const app = express()
app.get('/554', handler554)
app.listen(3000, () => {})
        