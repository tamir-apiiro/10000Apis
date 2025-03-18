
const express = require('express')
import {handler7348} from "./handler7348";
const app = express()
app.get('/7348', handler7348)
app.listen(3000, () => {})
        