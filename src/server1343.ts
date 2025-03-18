
const express = require('express')
import {handler1343} from "./handler1343";
const app = express()
app.get('/1343', handler1343)
app.listen(3000, () => {})
        