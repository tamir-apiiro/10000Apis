
const express = require('express')
import {handler1109} from "./handler1109";
const app = express()
app.get('/1109', handler1109)
app.listen(3000, () => {})
        