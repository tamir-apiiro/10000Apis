
const express = require('express')
import {handler7919} from "./handler7919";
const app = express()
app.get('/7919', handler7919)
app.listen(3000, () => {})
        