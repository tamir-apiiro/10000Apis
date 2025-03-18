
const express = require('express')
import {handler210} from "./handler210";
const app = express()
app.get('/210', handler210)
app.listen(3000, () => {})
        