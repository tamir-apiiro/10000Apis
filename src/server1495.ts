
const express = require('express')
import {handler1495} from "./handler1495";
const app = express()
app.get('/1495', handler1495)
app.listen(3000, () => {})
        