
const express = require('express')
import {handler1093} from "./handler1093";
const app = express()
app.get('/1093', handler1093)
app.listen(3000, () => {})
        