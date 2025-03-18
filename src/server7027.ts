
const express = require('express')
import {handler7027} from "./handler7027";
const app = express()
app.get('/7027', handler7027)
app.listen(3000, () => {})
        