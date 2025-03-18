
const express = require('express')
import {handler1201} from "./handler1201";
const app = express()
app.get('/1201', handler1201)
app.listen(3000, () => {})
        