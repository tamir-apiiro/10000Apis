
const express = require('express')
import {handler1100} from "./handler1100";
const app = express()
app.get('/1100', handler1100)
app.listen(3000, () => {})
        