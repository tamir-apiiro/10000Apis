
const express = require('express')
import {handler2758} from "./handler2758";
const app = express()
app.get('/2758', handler2758)
app.listen(3000, () => {})
        