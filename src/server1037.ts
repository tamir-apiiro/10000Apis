
const express = require('express')
import {handler1037} from "./handler1037";
const app = express()
app.get('/1037', handler1037)
app.listen(3000, () => {})
        