
const express = require('express')
import {handler509} from "./handler509";
const app = express()
app.get('/509', handler509)
app.listen(3000, () => {})
        