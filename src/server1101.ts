
const express = require('express')
import {handler1101} from "./handler1101";
const app = express()
app.get('/1101', handler1101)
app.listen(3000, () => {})
        