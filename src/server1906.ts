
const express = require('express')
import {handler1906} from "./handler1906";
const app = express()
app.get('/1906', handler1906)
app.listen(3000, () => {})
        