
const express = require('express')
import {handler1632} from "./handler1632";
const app = express()
app.get('/1632', handler1632)
app.listen(3000, () => {})
        