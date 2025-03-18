
const express = require('express')
import {handler1811} from "./handler1811";
const app = express()
app.get('/1811', handler1811)
app.listen(3000, () => {})
        