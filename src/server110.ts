
const express = require('express')
import {handler110} from "./handler110";
const app = express()
app.get('/110', handler110)
app.listen(3000, () => {})
        