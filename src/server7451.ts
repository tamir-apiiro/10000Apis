
const express = require('express')
import {handler7451} from "./handler7451";
const app = express()
app.get('/7451', handler7451)
app.listen(3000, () => {})
        