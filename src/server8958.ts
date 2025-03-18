
const express = require('express')
import {handler8958} from "./handler8958";
const app = express()
app.get('/8958', handler8958)
app.listen(3000, () => {})
        