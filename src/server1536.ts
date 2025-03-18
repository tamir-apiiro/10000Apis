
const express = require('express')
import {handler1536} from "./handler1536";
const app = express()
app.get('/1536', handler1536)
app.listen(3000, () => {})
        