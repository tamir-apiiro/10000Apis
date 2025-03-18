
const express = require('express')
import {handler1469} from "./handler1469";
const app = express()
app.get('/1469', handler1469)
app.listen(3000, () => {})
        