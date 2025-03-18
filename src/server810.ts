
const express = require('express')
import {handler810} from "./handler810";
const app = express()
app.get('/810', handler810)
app.listen(3000, () => {})
        