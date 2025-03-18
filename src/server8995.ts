
const express = require('express')
import {handler8995} from "./handler8995";
const app = express()
app.get('/8995', handler8995)
app.listen(3000, () => {})
        