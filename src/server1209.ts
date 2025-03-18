
const express = require('express')
import {handler1209} from "./handler1209";
const app = express()
app.get('/1209', handler1209)
app.listen(3000, () => {})
        