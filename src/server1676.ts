
const express = require('express')
import {handler1676} from "./handler1676";
const app = express()
app.get('/1676', handler1676)
app.listen(3000, () => {})
        