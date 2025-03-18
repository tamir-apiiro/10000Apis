
const express = require('express')
import {handler3758} from "./handler3758";
const app = express()
app.get('/3758', handler3758)
app.listen(3000, () => {})
        