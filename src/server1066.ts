
const express = require('express')
import {handler1066} from "./handler1066";
const app = express()
app.get('/1066', handler1066)
app.listen(3000, () => {})
        