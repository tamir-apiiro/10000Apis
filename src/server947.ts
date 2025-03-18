
const express = require('express')
import {handler947} from "./handler947";
const app = express()
app.get('/947', handler947)
app.listen(3000, () => {})
        