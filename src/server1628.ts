
const express = require('express')
import {handler1628} from "./handler1628";
const app = express()
app.get('/1628', handler1628)
app.listen(3000, () => {})
        