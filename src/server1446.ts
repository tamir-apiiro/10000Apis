
const express = require('express')
import {handler1446} from "./handler1446";
const app = express()
app.get('/1446', handler1446)
app.listen(3000, () => {})
        