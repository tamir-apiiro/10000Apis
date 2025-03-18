
const express = require('express')
import {handler844} from "./handler844";
const app = express()
app.get('/844', handler844)
app.listen(3000, () => {})
        