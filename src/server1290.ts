
const express = require('express')
import {handler1290} from "./handler1290";
const app = express()
app.get('/1290', handler1290)
app.listen(3000, () => {})
        