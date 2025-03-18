
const express = require('express')
import {handler8087} from "./handler8087";
const app = express()
app.get('/8087', handler8087)
app.listen(3000, () => {})
        