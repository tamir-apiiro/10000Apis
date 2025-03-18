
const express = require('express')
import {handler1832} from "./handler1832";
const app = express()
app.get('/1832', handler1832)
app.listen(3000, () => {})
        