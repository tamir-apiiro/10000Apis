
const express = require('express')
import {handler1608} from "./handler1608";
const app = express()
app.get('/1608', handler1608)
app.listen(3000, () => {})
        