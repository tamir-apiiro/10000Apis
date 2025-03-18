
const express = require('express')
import {handler1486} from "./handler1486";
const app = express()
app.get('/1486', handler1486)
app.listen(3000, () => {})
        