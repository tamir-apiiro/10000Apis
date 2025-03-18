
const express = require('express')
import {handler2554} from "./handler2554";
const app = express()
app.get('/2554', handler2554)
app.listen(3000, () => {})
        