
const express = require('express')
import {handler1329} from "./handler1329";
const app = express()
app.get('/1329', handler1329)
app.listen(3000, () => {})
        