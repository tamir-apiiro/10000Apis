
const express = require('express')
import {handler8337} from "./handler8337";
const app = express()
app.get('/8337', handler8337)
app.listen(3000, () => {})
        