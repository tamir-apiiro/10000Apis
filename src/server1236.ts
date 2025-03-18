
const express = require('express')
import {handler1236} from "./handler1236";
const app = express()
app.get('/1236', handler1236)
app.listen(3000, () => {})
        