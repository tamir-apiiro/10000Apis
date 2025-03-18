
const express = require('express')
import {handler981} from "./handler981";
const app = express()
app.get('/981', handler981)
app.listen(3000, () => {})
        