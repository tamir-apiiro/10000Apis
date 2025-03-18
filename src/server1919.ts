
const express = require('express')
import {handler1919} from "./handler1919";
const app = express()
app.get('/1919', handler1919)
app.listen(3000, () => {})
        