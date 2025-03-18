
const express = require('express')
import {handler1454} from "./handler1454";
const app = express()
app.get('/1454', handler1454)
app.listen(3000, () => {})
        