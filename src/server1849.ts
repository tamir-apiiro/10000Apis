
const express = require('express')
import {handler1849} from "./handler1849";
const app = express()
app.get('/1849', handler1849)
app.listen(3000, () => {})
        