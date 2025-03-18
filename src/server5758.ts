
const express = require('express')
import {handler5758} from "./handler5758";
const app = express()
app.get('/5758', handler5758)
app.listen(3000, () => {})
        