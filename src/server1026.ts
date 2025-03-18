
const express = require('express')
import {handler1026} from "./handler1026";
const app = express()
app.get('/1026', handler1026)
app.listen(3000, () => {})
        