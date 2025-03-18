
const express = require('express')
import {handler8397} from "./handler8397";
const app = express()
app.get('/8397', handler8397)
app.listen(3000, () => {})
        