
const express = require('express')
import {handler816} from "./handler816";
const app = express()
app.get('/816', handler816)
app.listen(3000, () => {})
        