
const express = require('express')
import {handler1706} from "./handler1706";
const app = express()
app.get('/1706', handler1706)
app.listen(3000, () => {})
        