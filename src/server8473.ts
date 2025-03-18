
const express = require('express')
import {handler8473} from "./handler8473";
const app = express()
app.get('/8473', handler8473)
app.listen(3000, () => {})
        