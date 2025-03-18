
const express = require('express')
import {handler973} from "./handler973";
const app = express()
app.get('/973', handler973)
app.listen(3000, () => {})
        