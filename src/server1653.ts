
const express = require('express')
import {handler1653} from "./handler1653";
const app = express()
app.get('/1653', handler1653)
app.listen(3000, () => {})
        