
const express = require('express')
import {handler452} from "./handler452";
const app = express()
app.get('/452', handler452)
app.listen(3000, () => {})
        