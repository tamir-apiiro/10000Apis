
const express = require('express')
import {handler729} from "./handler729";
const app = express()
app.get('/729', handler729)
app.listen(3000, () => {})
        