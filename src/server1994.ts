
const express = require('express')
import {handler1994} from "./handler1994";
const app = express()
app.get('/1994', handler1994)
app.listen(3000, () => {})
        