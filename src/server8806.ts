
const express = require('express')
import {handler8806} from "./handler8806";
const app = express()
app.get('/8806', handler8806)
app.listen(3000, () => {})
        