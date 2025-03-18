
const express = require('express')
import {handler1936} from "./handler1936";
const app = express()
app.get('/1936', handler1936)
app.listen(3000, () => {})
        