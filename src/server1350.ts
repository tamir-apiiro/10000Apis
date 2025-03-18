
const express = require('express')
import {handler1350} from "./handler1350";
const app = express()
app.get('/1350', handler1350)
app.listen(3000, () => {})
        