
const express = require('express')
import {handler1188} from "./handler1188";
const app = express()
app.get('/1188', handler1188)
app.listen(3000, () => {})
        