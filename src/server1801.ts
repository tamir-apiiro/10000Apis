
const express = require('express')
import {handler1801} from "./handler1801";
const app = express()
app.get('/1801', handler1801)
app.listen(3000, () => {})
        