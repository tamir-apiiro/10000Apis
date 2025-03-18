
const express = require('express')
import {handler1452} from "./handler1452";
const app = express()
app.get('/1452', handler1452)
app.listen(3000, () => {})
        