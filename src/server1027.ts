
const express = require('express')
import {handler1027} from "./handler1027";
const app = express()
app.get('/1027', handler1027)
app.listen(3000, () => {})
        