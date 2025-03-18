
const express = require('express')
import {handler1755} from "./handler1755";
const app = express()
app.get('/1755', handler1755)
app.listen(3000, () => {})
        