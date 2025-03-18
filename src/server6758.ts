
const express = require('express')
import {handler6758} from "./handler6758";
const app = express()
app.get('/6758', handler6758)
app.listen(3000, () => {})
        