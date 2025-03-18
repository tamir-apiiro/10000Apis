
const express = require('express')
import {handler295} from "./handler295";
const app = express()
app.get('/295', handler295)
app.listen(3000, () => {})
        