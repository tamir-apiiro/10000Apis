
const express = require('express')
import {handler1074} from "./handler1074";
const app = express()
app.get('/1074', handler1074)
app.listen(3000, () => {})
        