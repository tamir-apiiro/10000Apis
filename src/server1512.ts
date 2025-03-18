
const express = require('express')
import {handler1512} from "./handler1512";
const app = express()
app.get('/1512', handler1512)
app.listen(3000, () => {})
        