
const express = require('express')
import {handler8196} from "./handler8196";
const app = express()
app.get('/8196', handler8196)
app.listen(3000, () => {})
        