
const express = require('express')
import {handler1844} from "./handler1844";
const app = express()
app.get('/1844', handler1844)
app.listen(3000, () => {})
        