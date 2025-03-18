
const express = require('express')
import {handler1268} from "./handler1268";
const app = express()
app.get('/1268', handler1268)
app.listen(3000, () => {})
        