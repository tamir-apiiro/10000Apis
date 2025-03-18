
const express = require('express')
import {handler8368} from "./handler8368";
const app = express()
app.get('/8368', handler8368)
app.listen(3000, () => {})
        