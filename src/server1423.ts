
const express = require('express')
import {handler1423} from "./handler1423";
const app = express()
app.get('/1423', handler1423)
app.listen(3000, () => {})
        