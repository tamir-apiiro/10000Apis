
const express = require('express')
import {handler8440} from "./handler8440";
const app = express()
app.get('/8440', handler8440)
app.listen(3000, () => {})
        