
const express = require('express')
import {handler2950} from "./handler2950";
const app = express()
app.get('/2950', handler2950)
app.listen(3000, () => {})
        