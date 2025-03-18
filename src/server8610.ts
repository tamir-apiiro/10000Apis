
const express = require('express')
import {handler8610} from "./handler8610";
const app = express()
app.get('/8610', handler8610)
app.listen(3000, () => {})
        