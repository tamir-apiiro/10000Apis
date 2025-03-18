
const express = require('express')
import {handler1532} from "./handler1532";
const app = express()
app.get('/1532', handler1532)
app.listen(3000, () => {})
        