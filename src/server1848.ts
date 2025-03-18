
const express = require('express')
import {handler1848} from "./handler1848";
const app = express()
app.get('/1848', handler1848)
app.listen(3000, () => {})
        