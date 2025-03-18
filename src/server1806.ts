
const express = require('express')
import {handler1806} from "./handler1806";
const app = express()
app.get('/1806', handler1806)
app.listen(3000, () => {})
        