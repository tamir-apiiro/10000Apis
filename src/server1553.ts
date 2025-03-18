
const express = require('express')
import {handler1553} from "./handler1553";
const app = express()
app.get('/1553', handler1553)
app.listen(3000, () => {})
        