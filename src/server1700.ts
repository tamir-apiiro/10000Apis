
const express = require('express')
import {handler1700} from "./handler1700";
const app = express()
app.get('/1700', handler1700)
app.listen(3000, () => {})
        