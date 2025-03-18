
const express = require('express')
import {handler8795} from "./handler8795";
const app = express()
app.get('/8795', handler8795)
app.listen(3000, () => {})
        