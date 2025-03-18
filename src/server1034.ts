
const express = require('express')
import {handler1034} from "./handler1034";
const app = express()
app.get('/1034', handler1034)
app.listen(3000, () => {})
        