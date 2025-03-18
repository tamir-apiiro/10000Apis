
const express = require('express')
import {handler1287} from "./handler1287";
const app = express()
app.get('/1287', handler1287)
app.listen(3000, () => {})
        