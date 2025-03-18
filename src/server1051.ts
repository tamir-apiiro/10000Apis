
const express = require('express')
import {handler1051} from "./handler1051";
const app = express()
app.get('/1051', handler1051)
app.listen(3000, () => {})
        