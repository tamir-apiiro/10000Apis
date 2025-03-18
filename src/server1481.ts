
const express = require('express')
import {handler1481} from "./handler1481";
const app = express()
app.get('/1481', handler1481)
app.listen(3000, () => {})
        