
const express = require('express')
import {handler1492} from "./handler1492";
const app = express()
app.get('/1492', handler1492)
app.listen(3000, () => {})
        