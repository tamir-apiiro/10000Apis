
const express = require('express')
import {handler1427} from "./handler1427";
const app = express()
app.get('/1427', handler1427)
app.listen(3000, () => {})
        