
const express = require('express')
import {handler1572} from "./handler1572";
const app = express()
app.get('/1572', handler1572)
app.listen(3000, () => {})
        