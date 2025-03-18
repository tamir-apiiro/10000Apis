
const express = require('express')
import {handler8949} from "./handler8949";
const app = express()
app.get('/8949', handler8949)
app.listen(3000, () => {})
        