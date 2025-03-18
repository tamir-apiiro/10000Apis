
const express = require('express')
import {handler1029} from "./handler1029";
const app = express()
app.get('/1029', handler1029)
app.listen(3000, () => {})
        