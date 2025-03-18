
const express = require('express')
import {handler1658} from "./handler1658";
const app = express()
app.get('/1658', handler1658)
app.listen(3000, () => {})
        