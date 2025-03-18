
const express = require('express')
import {handler1978} from "./handler1978";
const app = express()
app.get('/1978', handler1978)
app.listen(3000, () => {})
        