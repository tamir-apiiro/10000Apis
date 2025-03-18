
const express = require('express')
import {handler1147} from "./handler1147";
const app = express()
app.get('/1147', handler1147)
app.listen(3000, () => {})
        