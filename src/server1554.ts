
const express = require('express')
import {handler1554} from "./handler1554";
const app = express()
app.get('/1554', handler1554)
app.listen(3000, () => {})
        