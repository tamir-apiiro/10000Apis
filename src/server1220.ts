
const express = require('express')
import {handler1220} from "./handler1220";
const app = express()
app.get('/1220', handler1220)
app.listen(3000, () => {})
        