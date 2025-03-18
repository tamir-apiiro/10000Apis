
const express = require('express')
import {handler1355} from "./handler1355";
const app = express()
app.get('/1355', handler1355)
app.listen(3000, () => {})
        