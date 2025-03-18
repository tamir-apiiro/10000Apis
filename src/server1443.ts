
const express = require('express')
import {handler1443} from "./handler1443";
const app = express()
app.get('/1443', handler1443)
app.listen(3000, () => {})
        