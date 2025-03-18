
const express = require('express')
import {handler1214} from "./handler1214";
const app = express()
app.get('/1214', handler1214)
app.listen(3000, () => {})
        