
const express = require('express')
import {handler1023} from "./handler1023";
const app = express()
app.get('/1023', handler1023)
app.listen(3000, () => {})
        