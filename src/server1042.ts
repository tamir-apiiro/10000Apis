
const express = require('express')
import {handler1042} from "./handler1042";
const app = express()
app.get('/1042', handler1042)
app.listen(3000, () => {})
        