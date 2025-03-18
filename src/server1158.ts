
const express = require('express')
import {handler1158} from "./handler1158";
const app = express()
app.get('/1158', handler1158)
app.listen(3000, () => {})
        