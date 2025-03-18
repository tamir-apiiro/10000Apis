
const express = require('express')
import {handler4758} from "./handler4758";
const app = express()
app.get('/4758', handler4758)
app.listen(3000, () => {})
        