
const express = require('express')
import {handler1517} from "./handler1517";
const app = express()
app.get('/1517', handler1517)
app.listen(3000, () => {})
        