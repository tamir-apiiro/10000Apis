
const express = require('express')
import {handler1737} from "./handler1737";
const app = express()
app.get('/1737', handler1737)
app.listen(3000, () => {})
        