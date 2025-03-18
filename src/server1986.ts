
const express = require('express')
import {handler1986} from "./handler1986";
const app = express()
app.get('/1986', handler1986)
app.listen(3000, () => {})
        