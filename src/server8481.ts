
const express = require('express')
import {handler8481} from "./handler8481";
const app = express()
app.get('/8481', handler8481)
app.listen(3000, () => {})
        