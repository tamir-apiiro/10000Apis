
const express = require('express')
import {handler608} from "./handler608";
const app = express()
app.get('/608', handler608)
app.listen(3000, () => {})
        