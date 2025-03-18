
const express = require('express')
import {handler1307} from "./handler1307";
const app = express()
app.get('/1307', handler1307)
app.listen(3000, () => {})
        