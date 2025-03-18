
const express = require('express')
import {handler1239} from "./handler1239";
const app = express()
app.get('/1239', handler1239)
app.listen(3000, () => {})
        