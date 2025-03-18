
const express = require('express')
import {handler7554} from "./handler7554";
const app = express()
app.get('/7554', handler7554)
app.listen(3000, () => {})
        