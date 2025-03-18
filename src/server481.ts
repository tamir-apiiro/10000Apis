
const express = require('express')
import {handler481} from "./handler481";
const app = express()
app.get('/481', handler481)
app.listen(3000, () => {})
        