
const express = require('express')
import {handler1503} from "./handler1503";
const app = express()
app.get('/1503', handler1503)
app.listen(3000, () => {})
        