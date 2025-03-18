
const express = require('express')
import {handler1631} from "./handler1631";
const app = express()
app.get('/1631', handler1631)
app.listen(3000, () => {})
        