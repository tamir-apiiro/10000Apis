
const express = require('express')
import {handler1396} from "./handler1396";
const app = express()
app.get('/1396', handler1396)
app.listen(3000, () => {})
        