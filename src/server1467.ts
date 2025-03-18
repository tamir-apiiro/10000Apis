
const express = require('express')
import {handler1467} from "./handler1467";
const app = express()
app.get('/1467', handler1467)
app.listen(3000, () => {})
        