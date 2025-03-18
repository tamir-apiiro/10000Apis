
const express = require('express')
import {handler1362} from "./handler1362";
const app = express()
app.get('/1362', handler1362)
app.listen(3000, () => {})
        