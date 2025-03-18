
const express = require('express')
import {handler949} from "./handler949";
const app = express()
app.get('/949', handler949)
app.listen(3000, () => {})
        