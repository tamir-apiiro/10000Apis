
const express = require('express')
import {handler8758} from "./handler8758";
const app = express()
app.get('/8758', handler8758)
app.listen(3000, () => {})
        