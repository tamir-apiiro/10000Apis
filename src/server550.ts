
const express = require('express')
import {handler550} from "./handler550";
const app = express()
app.get('/550', handler550)
app.listen(3000, () => {})
        