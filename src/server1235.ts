
const express = require('express')
import {handler1235} from "./handler1235";
const app = express()
app.get('/1235', handler1235)
app.listen(3000, () => {})
        