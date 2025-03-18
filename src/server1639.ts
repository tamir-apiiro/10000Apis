
const express = require('express')
import {handler1639} from "./handler1639";
const app = express()
app.get('/1639', handler1639)
app.listen(3000, () => {})
        