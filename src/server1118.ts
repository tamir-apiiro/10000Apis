
const express = require('express')
import {handler1118} from "./handler1118";
const app = express()
app.get('/1118', handler1118)
app.listen(3000, () => {})
        