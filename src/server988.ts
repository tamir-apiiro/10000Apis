
const express = require('express')
import {handler988} from "./handler988";
const app = express()
app.get('/988', handler988)
app.listen(3000, () => {})
        