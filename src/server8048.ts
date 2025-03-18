
const express = require('express')
import {handler8048} from "./handler8048";
const app = express()
app.get('/8048', handler8048)
app.listen(3000, () => {})
        