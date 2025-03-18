
const express = require('express')
import {handler7758} from "./handler7758";
const app = express()
app.get('/7758', handler7758)
app.listen(3000, () => {})
        