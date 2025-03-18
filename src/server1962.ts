
const express = require('express')
import {handler1962} from "./handler1962";
const app = express()
app.get('/1962', handler1962)
app.listen(3000, () => {})
        