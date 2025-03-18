
const express = require('express')
import {handler929} from "./handler929";
const app = express()
app.get('/929', handler929)
app.listen(3000, () => {})
        