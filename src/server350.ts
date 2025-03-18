
const express = require('express')
import {handler350} from "./handler350";
const app = express()
app.get('/350', handler350)
app.listen(3000, () => {})
        