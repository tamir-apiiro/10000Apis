
const express = require('express')
import {handler1764} from "./handler1764";
const app = express()
app.get('/1764', handler1764)
app.listen(3000, () => {})
        