
const express = require('express')
import {handler1760} from "./handler1760";
const app = express()
app.get('/1760', handler1760)
app.listen(3000, () => {})
        