
const express = require('express')
import {handler1422} from "./handler1422";
const app = express()
app.get('/1422', handler1422)
app.listen(3000, () => {})
        