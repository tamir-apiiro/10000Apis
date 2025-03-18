
const express = require('express')
import {handler1056} from "./handler1056";
const app = express()
app.get('/1056', handler1056)
app.listen(3000, () => {})
        