
const express = require('express')
import {handler4307} from "./handler4307";
const app = express()
app.get('/4307', handler4307)
app.listen(3000, () => {})
        