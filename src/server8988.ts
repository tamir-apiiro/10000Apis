
const express = require('express')
import {handler8988} from "./handler8988";
const app = express()
app.get('/8988', handler8988)
app.listen(3000, () => {})
        