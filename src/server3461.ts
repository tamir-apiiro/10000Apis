
const express = require('express')
import {handler3461} from "./handler3461";
const app = express()
app.get('/3461', handler3461)
app.listen(3000, () => {})
        