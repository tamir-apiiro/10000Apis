
const express = require('express')
import {handler1177} from "./handler1177";
const app = express()
app.get('/1177', handler1177)
app.listen(3000, () => {})
        