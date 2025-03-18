
const express = require('express')
import {handler1080} from "./handler1080";
const app = express()
app.get('/1080', handler1080)
app.listen(3000, () => {})
        