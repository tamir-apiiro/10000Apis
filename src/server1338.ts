
const express = require('express')
import {handler1338} from "./handler1338";
const app = express()
app.get('/1338', handler1338)
app.listen(3000, () => {})
        