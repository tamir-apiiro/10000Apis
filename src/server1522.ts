
const express = require('express')
import {handler1522} from "./handler1522";
const app = express()
app.get('/1522', handler1522)
app.listen(3000, () => {})
        