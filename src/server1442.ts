
const express = require('express')
import {handler1442} from "./handler1442";
const app = express()
app.get('/1442', handler1442)
app.listen(3000, () => {})
        