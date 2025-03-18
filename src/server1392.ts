
const express = require('express')
import {handler1392} from "./handler1392";
const app = express()
app.get('/1392', handler1392)
app.listen(3000, () => {})
        