
const express = require('express')
import {handler1202} from "./handler1202";
const app = express()
app.get('/1202', handler1202)
app.listen(3000, () => {})
        