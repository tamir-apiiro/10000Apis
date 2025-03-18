
const express = require('express')
import {handler1212} from "./handler1212";
const app = express()
app.get('/1212', handler1212)
app.listen(3000, () => {})
        