
const express = require('express')
import {handler8787} from "./handler8787";
const app = express()
app.get('/8787', handler8787)
app.listen(3000, () => {})
        