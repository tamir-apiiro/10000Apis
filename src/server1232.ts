
const express = require('express')
import {handler1232} from "./handler1232";
const app = express()
app.get('/1232', handler1232)
app.listen(3000, () => {})
        