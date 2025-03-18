
const express = require('express')
import {handler8705} from "./handler8705";
const app = express()
app.get('/8705', handler8705)
app.listen(3000, () => {})
        