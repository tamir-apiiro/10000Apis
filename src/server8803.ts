
const express = require('express')
import {handler8803} from "./handler8803";
const app = express()
app.get('/8803', handler8803)
app.listen(3000, () => {})
        